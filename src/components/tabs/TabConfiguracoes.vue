<template>
    <section class="config-root">
        <h2 class="page-title">Configurações da Barbearia</h2>
        <p class="subtitle">Gerencie as informações e configurações do seu estabelecimento</p>

        <!-- Informações Básicas -->
        <div class="card">
            <div class="card-header">
                <h3>Informações Básicas</h3>
            </div>

            <div class="grid two-cols">
                <label class="field">
                    <span class="label">Nome da Barbearia</span>
                    <input v-model="form.name" placeholder="Barbearia Premium" />
                </label>

                <label class="field">
                    <span class="label">CNPJ</span>
                    <input v-model="form.cnpj" placeholder="12.345.678/0001-90" />
                </label>

                <label class="field">
                    <span class="label">Telefone</span>
                    <input v-model="form.phone" placeholder="(11) 3456-7890" />
                </label>

                <label class="field">
                    <span class="label">Email</span>
                    <input v-model="form.email" placeholder="contato@barbeariapremium.com" />
                </label>

                <label class="field full">
                    <span class="label">Endereço Completo</span>
                    <input v-model="form.address" placeholder="Rua dos Barbeiros, 123 - Centro, São Paulo - SP" />
                </label>

                <label class="field full">
                    <span class="label">Descrição</span>
                    <textarea v-model="form.description" rows="3"
                        placeholder="Barbearia premium com os melhores profissionais da região. Atendimento personalizado e ambiente acolhedor."></textarea>
                </label>
            </div>
        </div>

        <!-- Horário de Funcionamento -->
        <div class="card">
            <div class="card-header">
                <h3>Horário de Funcionamento</h3>
            </div>

            <div class="hours-list">
                <div class="hour-row" v-for="(d, idx) in hours" :key="d.day">
                    <div class="day">{{ d.day }}</div>

                    <div class="controls">
                        <div class="time">
                            <input type="time" v-model="d.start" :disabled="!d.open" />
                        </div>
                        <div class="sep">até</div>
                        <div class="time">
                            <input type="time" v-model="d.end" :disabled="!d.open" />
                        </div>
                        <label class="toggle">
                            <input type="checkbox" v-model="d.open" />
                            <span>{{ d.open ? 'Aberto' : 'Fechado' }}</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Configurações de Pagamento -->
        <div class="card">
            <div class="card-header">
                <h3>Configurações de Pagamento</h3>
            </div>

            <div class="grid two-cols">
                <label class="field">
                    <span class="label">Taxa de Cancelamento (R$)</span>
                    <input v-model="form.cancelFee" placeholder="10,00" />
                    <small class="hint">Cobrada em cancelamentos com menos de 3h de antecedência</small>
                </label>

                <label class="field">
                    <span class="label">Comissão Padrão (%)</span>
                    <input v-model="form.defaultCommission" placeholder="50" />
                    <small class="hint">Percentual padrão para novos barbeiros</small>
                </label>
            </div>
        </div>

        <!-- Footer actions -->
        <div class="actions">
            <button class="btn btn-ghost">Cancelar</button>
            <button class="btn btn-primary">Salvar Configurações</button>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    name: 'Barbearia Premium',
    cnpj: '12.345.678/0001-90',
    phone: '(11) 3456-7890',
    email: 'contato@barbeariapremium.com',
    address: 'Rua dos Barbeiros, 123 - Centro, São Paulo - SP',
    description:
        'Barbearia premium com os melhores profissionais da região. Atendimento personalizado e ambiente acolhedor.',
    cancelFee: '10,00',
    defaultCommission: '50'
});

const hours = reactive([
    { day: 'Segunda-feira', open: true, start: '09:00', end: '19:00' },
    { day: 'Terça-feira', open: true, start: '09:00', end: '19:00' },
    { day: 'Quarta-feira', open: true, start: '09:00', end: '19:00' },
    { day: 'Quinta-feira', open: true, start: '09:00', end: '19:00' },
    { day: 'Sexta-feira', open: true, start: '09:00', end: '20:00' },
    { day: 'Sábado', open: true, start: '08:00', end: '18:00' },
    { day: 'Domingo', open: false, start: '00:00', end: '00:00' }
]);

// purely aesthetic component — actions are placeholders
function save() {
    // placeholder for save functionality
    console.log('save', { form, hours });
}
</script>

<style scoped>
.config-root {
    color: #fff;
    padding: 28px 40px 80px 40px;
    background: transparent;
}

.page-title {
    font-size: 22px;
    margin: 0 0 6px 0;
}

.subtitle {
    color: #9aa19a;
    margin-bottom: 20px;
}

.card {
    background: #1A1A1A;
    border-radius: 10px;
    padding: 18px 20px;
    margin-bottom: 22px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.02) inset, 0 6px 20px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.03);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
}

.card-header .icon {
    padding: 8px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.card-header h3 {
    margin: 0;
    font-size: 15px;
}

.grid {
    display: grid;
    gap: 12px;
}

.two-cols {
    grid-template-columns: 1fr 1fr;
}

.field {
    display: flex;
    flex-direction: column;
}

.field.full {
    grid-column: 1 / -1;
}

.label {
    font-size: 13px;
    color: #9aa19a;
    margin-bottom: 6px;
}

input[type="text"],
input[type="time"],
input,
textarea {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 10px 12px;
    border-radius: 8px;
    color: #fff;
    outline: none;
    transition: box-shadow .12s, border-color .12s;
}

input:focus,
textarea:focus {
    box-shadow: 0 0 0 4px rgba(248, 198, 48, 0.06);
    border-color: #f8c630;
}

textarea {
    min-height: 72px;
    resize: vertical;
}

.hint {
    margin-top: 6px;
    font-size: 12px;
    color: #9ea69a;
}

.hours-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.hour-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.03);
}

.hour-row .day {
    font-weight: 600;
    width: 160px;
}

.controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.time input[type="time"],
input[type="time"] {
    width: 100px;
}

.sep {
    color: #9aa19a;
    font-size: 13px;
}

.toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
    color: #9aa19a;
    font-size: 13px;
}

.actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 8px;
}

.btn {
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.btn-ghost {
    background: transparent;
    color: #ddd;
    border: 1px solid rgba(255, 255, 255, 0.04);
}

.btn-ghost:hover {
    background: #D2A800;
    color: #111;
    transition: 0.5s;
}

.btn-primary {
    background: #f8c630;
    color: #111;
    box-shadow: 0 6px 18px rgba(248, 198, 48, 0.18);
}

/* Responsive */
@media (max-width: 900px) {
    .two-cols {
        grid-template-columns: 1fr;
    }

    .hour-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .hour-row .day {
        width: 100%;
    }

    .controls {
        width: 100%;
        justify-content: space-between;
    }

    .config-root {
        padding: 20px;
    }
}
</style>
