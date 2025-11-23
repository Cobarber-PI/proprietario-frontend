<template>
    <section class="agendamentos-root">
        <div class="wrapper-geral">
            <div class="infos-wrapper">
                <div class="text-info">
                    <h3>Total de Agendamentos</h3>
                    <h1>4</h1>
                </div>
            </div>

            <div class="infos-wrapper">
                <div class="text-info">
                    <h3>Pendentes</h3>
                    <h1 class="pending">1</h1>
                </div>
            </div>

            <div class="infos-wrapper">
                <div class="text-info">
                    <h3>Confirmados</h3>
                    <h1 class="confirmed">1</h1>
                </div>
            </div>

            <div class="infos-wrapper">
                <div class="text-info">
                    <h3>Hoje</h3>
                    <h1 class="pending">0</h1>
                </div>
            </div>
        </div>
        <div class="main-grid">
            <aside class="cal-card">
                <div class="cal-header">
                    <h3>Calendário</h3>
                </div>

                <div class="cal-body">
                    <VCalendar v-model="selectedDate" is-expanded @dayclick="onDayClick"
                        :popover="{ visibility: 'hover' }" />
                </div>
            </aside>
            <div class="right-column">
                <div class="controls">
                    <div class="search">
                        <input v-model="searchQuery" placeholder="Buscar por cliente ou telefone..." />
                    </div>

                    <div class="filters">
                        <select v-model="filterBarber">
                            <option value="">Todos os Barbeiros</option>
                            <option v-for="b in barbers" :key="b.id" :value="b.id">{{ b.name }}</option>
                        </select>

                        <select v-model="filterStatus">
                            <option value="">Todos os Status</option>
                            <option value="pending">Pendentes</option>
                            <option value="confirmed">Confirmados</option>
                            <option value="canceled">Cancelados</option>
                        </select>
                    </div>
                </div>

                <div class="appointments-box">
                    <h3 class="appointments-title">Agendamentos - {{ formattedSelectedDate }}</h3>

                    <div v-if="filteredAppointments.length === 0" class="appointments-empty">
                        Nenhum agendamento encontrado para esta data
                    </div>

                    <div v-else class="appointments-list">
                        <div v-for="apt in filteredAppointments" :key="apt.id" class="appointment-item">
                            <div class="apt-left">
                                <div class="apt-time">{{ apt.time }}</div>
                                <div class="apt-client">
                                    <strong>{{ apt.client }}</strong>
                                    <div class="muted">{{ apt.phone }}</div>
                                </div>
                            </div>

                            <div class="apt-right">
                                <div class="apt-barber">{{ apt.barber }}</div>
                                <div :class="['apt-status', apt.status]">{{ statusLabel(apt.status) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedDate = ref(new Date())

const barbers = ref([
    { id: 1, name: 'Carlos Silva' },
    { id: 2, name: 'João Santos' },
    { id: 3, name: 'Pedro Oliveira' }
])

const searchQuery = ref('')
const filterBarber = ref('')
const filterStatus = ref('')

const appointments = ref([
    { id: 1, date: formatISO(selectedDate.value), time: '09:00', client: 'Carlos Silva', phone: '(11) 98765-4321', barber: 'Carlos Silva', status: 'pending' },
    { id: 2, date: formatISO(selectedDate.value), time: '11:30', client: 'Pedro Oliveira', phone: '(11) 98765-4323', barber: 'Pedro Oliveira', status: 'confirmed' },
    { id: 3, date: formatISO(addDays(new Date(), 2)), time: '15:00', client: 'Lucas Ferreira', phone: '(11) 96543-2109', barber: 'João Santos', status: 'confirmed' }
])

function onDayClick(day) {
    const date = day && day.date ? day.date : day
    selectedDate.value = new Date(date)
}

const formattedSelectedDate = computed(() => {
    const d = selectedDate.value
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
})

const filteredAppointments = computed(() => {
    const selIso = formatISO(selectedDate.value)
    return appointments.value.filter(a => {
        if (a.date !== selIso) return false
        if (filterBarber.value && String(a.barber) !== String(getBarberNameById(filterBarber.value))) return false
        if (filterStatus.value && a.status !== filterStatus.value) return false
        const q = searchQuery.value.trim().toLowerCase()
        if (!q) return true
        return (
            a.client.toLowerCase().includes(q) ||
            (a.phone && a.phone.toLowerCase().includes(q))
        )
    })
})

function getBarberNameById(id) {
    const b = barbers.value.find(x => String(x.id) === String(id))
    return b ? b.name : ''
}

function statusLabel(s) {
    if (s === 'pending') return 'Pendente'
    if (s === 'confirmed') return 'Confirmado'
    if (s === 'canceled') return 'Cancelado'
    return s
}

function pad(n) { return String(n).padStart(2, '0') }
function formatISO(d) {
    const date = new Date(d)
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}
function addDays(d, days) {
    const x = new Date(d)
    x.setDate(x.getDate() + days)
    return x
}
</script>

<style scoped>
.agendamentos-root {
    margin: 0 80px;
    color: #fff;
    padding: 20px 0 80px;
    position: relative;
}

.wrapper-geral {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: stretch;
    height: 120px;
}

.infos-wrapper {
    flex: 1 1 0;
    background: #1A1A1A;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 18px 22px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.text-info h3 {
    font-size: 15px;
    color: #8B978B;
    margin: 6px 0 0;
    font-weight: 700;
}

.text-info h1 {
    margin: 10px 0 0;
    font-size: 26px;
    color: #fff;
}

.pending {
    color: #EAB308;
}

.confirmed {
    color: #3B82F6;
}

.main-grid {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 26px;
    margin-top: 18px;
}

.cal-card {
    background: #1A1A1A;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 18px;
    box-sizing: border-box;
}

.cal-header h3 {
    margin: 0 0 10px 0;
    font-size: 20px;
}

.cal-card ::v-deep .vc {
    background: transparent;
    color: #e6e6e6
}
.cal-card ::v-deep .vc-pane,
.cal-card ::v-deep .vc-viewport,
.cal-card ::v-deep .vc-grid,
.cal-card ::v-deep .vc-nav {
    background: #0f0f0f;
    color: #e6e6e6;
    border-radius: 8px;
}

.cal-card ::v-deep .vc-nav {
    background: transparent;
    color: #fff;
}

.cal-card ::v-deep .vc-nav__title {
    background: transparent;
    color: #fff;
    font-weight: 700;
}

.cal-card ::v-deep .vc-weekday {
    color: #8B978B;
    font-weight: 700;
}

/* day cells (numbers) */
.cal-card ::v-deep .vc-day {
    background: transparent;
    color: #d1d1d1;
    border-radius: 6px;
}

.cal-card ::v-deep .vc-day-dot,
.cal-card ::v-deep .vc-dot {
    background: #F8C630;
}

.cal-card ::v-deep .vc-highlight,
.cal-card ::v-deep .vc-day[aria-selected="true"] {
    background: #F8C630;
    color: #111;
    box-shadow: none;
}

.cal-card ::v-deep .vc-day--today {
    outline: 1px solid rgba(248, 198, 48, 0.12);
}

.cal-card ::v-deep .vc-nav__arrow {
    color: #fff;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 6px;
}

.right-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.controls {
    display: flex;
    gap: 14px;
    align-items: center;
}

.search {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 10px 12px;
    border-radius: 8px;
}

.search input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    font-size: 14px;
}

.icon-search {
    color: #8B978B;
}

.filters {
    display: flex;
    gap: 12px;
}

.filters select {
    background: #1A1A1A;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 10px 12px;
    border-radius: 8px;
    min-width: 180px;
    appearance: none;
}

.filters select::-ms-expand {
    display: none;
}

.filters select option {
    background: #161616;
    color: #fff;
}

.appointments-box {
    background: #1A1A1A;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 22px;
    min-height: 160px;
}

.appointments-title {
    margin: 0 0 18px 0;
    font-size: 22px;
}

.appointments-empty {
    color: #8B978B;
    padding: 28px;
    text-align: center;
}

.appointment-item {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.02);
    margin-bottom: 12px;
    align-items: center;
}

.apt-left {
    display: flex;
    gap: 12px;
    align-items: center;
}

.apt-time {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 8px 10px;
    border-radius: 8px;
    width: 82px;
    text-align: center;
    font-weight: 700;
}

.apt-client strong {
    font-size: 15px;
}

.muted {
    color: #8B978B;
    font-size: 13px;
}

.apt-right {
    display: flex;
    gap: 12px;
    align-items: center;
}

.apt-status {
    padding: 6px 10px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 13px;
}

.apt-status.pending {
    background: rgba(234, 179, 8, 0.12);
    color: #EAB308;
    border: 1px solid rgba(234, 179, 8, 0.12);
}

.apt-status.confirmed {
    background: rgba(59, 130, 246, 0.08);
    color: #3B82F6;
    border: 1px solid rgba(59, 130, 246, 0.08);
}

.apt-status.canceled {
    background: rgba(200, 60, 60, 0.06);
    color: #FF6B6B;
    border: 1px solid rgba(255, 80, 80, 0.06);
}

.decorative-img {
    position: absolute;
    right: 20px;
    bottom: 10px;
    width: 260px;
    opacity: 0.04;
    pointer-events: none;
    user-select: none;
}

@media (max-width: 1100px) {
    .main-grid {
        grid-template-columns: 1fr;
    }

    .cal-card {
        order: 1;
    }

    .right-column {
        order: 2;
    }

    .wrapper-geral {
        flex-direction: column;
        height: auto;
        gap: 12px;
    }

    .filters select {
        min-width: 140px;
    }

    .agendamentos-root {
        margin: 0 20px;
    }
}
</style>
