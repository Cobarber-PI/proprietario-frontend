<template>
  <section class="clientes-root">
    <!-- Top stats -->
    <div class="stats-row">
      <div class="summary-card">
        <small>Total de Clientes</small>
        <strong>{{ totalClients }}</strong>
      </div>

      <div class="summary-card">
        <small>Clientes Ativos</small>
        <div class="col">
          <strong class="highlight">{{ activeClients }}</strong>
          <small class="muted">Últimos 30 dias</small>
        </div>
      </div>

      <div class="summary-card">
        <small>Receita Total</small>
        <strong class="money">{{ fmtCurrency(totalRevenue) }}</strong>
      </div>

      <div class="summary-card">
        <small>Ticket Médio</small>
        <strong class="money yellow">{{ fmtCurrency(ticketAverage) }}</strong>
      </div>
    </div>

    <!-- Clientes list container -->
    <div class="clientes-box">
      <div class="clientes-header">
        <h3>Clientes Cadastrados</h3>

        <div class="search-wrap">
          <input v-model="searchTerm" placeholder="Buscar cliente..." />
        </div>
      </div>

      <div class="clientes-list">
        <template v-if="filteredClients.length">
          <div v-for="client in filteredClients" :key="client.id" class="cliente-item">
            <div class="left">
              <div class="avatar">
                <span v-if="client.avatarInitials">{{ client.avatarInitials }}</span>
                <svg v-else viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 12a5 5 0 10-.001-9.999A5 5 0 0012 12zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/></svg>
              </div>

              <div class="info">
                <div class="name-row">
                  <strong class="client-name">{{ client.name }}</strong>
                </div>
                <div class="contact">
                  <span class="contact-line">
                    <svg class="icon-mail" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M2 6v12h20V6l-10 6L2 6z"/></svg>
                    <small class="muted">{{ client.email }}</small>
                  </span>

                  <span class="contact-line">
                    <svg class="icon-phone" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M6.6 10.8a15.053 15.053 0 006.6 6.6l1.8-1.8a1 1 0 01.9-.27c1 .2 2.1.3 3.2.3a1 1 0 011 1V20a1 1 0 01-1 1C9.9 21 3 14.1 3 6a1 1 0 011-1h2.5a1 1 0 011 1c0 1.1.1 2.2.3 3.2a1 1 0 01-.2.9L6.6 10.8z"/></svg>
                    <small class="muted">{{ client.phone }}</small>
                  </span>
                </div>
              </div>
            </div>

            <div class="right">
              <div class="meta-stat">
                <small>Agendamentos</small>
                <strong>{{ client.appointments }}</strong>
              </div>

              <div class="meta-stat">
                <small>Total Gasto</small>
                <strong class="money yellow">{{ fmtCurrency(client.totalSpent) }}</strong>
              </div>

              <div class="meta-stat rating">
                <svg class="star" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.606L19.334 24 12 19.897 4.666 24l1.584-8.644L.5 9.75l7.832-1.732L12 .587z"/></svg>
                <strong>{{ client.rating.toFixed(1) }}</strong>
              </div>

              <button class="btn-profile" @click="$emit('open-client', client.id)">Ver Perfil</button>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="empty">Nenhum cliente encontrado.</div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchTerm = ref('');

// dados de exemplo (substitua por props ou API)
const clients = ref([
  {
    id: 1,
    name: 'Carlos Silva',
    email: 'carlos@email.com',
    phone: '(11) 98765-4321',
    appointments: 24,
    totalSpent: 1440,
    rating: 4.8,
    active: true,
    avatarInitials: 'CS'
  },
  {
    id: 2,
    name: 'Pedro Oliveira',
    email: 'pedro@email.com',
    phone: '(11) 97654-3210',
    appointments: 15,
    totalSpent: 750,
    rating: 4.5,
    active: false,
    avatarInitials: 'PO'
  },
  {
    id: 3,
    name: 'Lucas Ferreira',
    email: 'lucas@email.com',
    phone: '(11) 96543-2109',
    appointments: 8,
    totalSpent: 400,
    rating: 4.9,
    active: true,
    avatarInitials: 'LF'
  }
]);

const filteredClients = computed(() => {
  const q = searchTerm.value.trim().toLowerCase();
  if (!q) return clients.value;
  return clients.value.filter(c =>
    c.name.toLowerCase().includes(q) ||
    (c.email && c.email.toLowerCase().includes(q)) ||
    (c.phone && c.phone.toLowerCase().includes(q))
  );
});

const totalClients = computed(() => clients.value.length);
const activeClients = computed(() => clients.value.filter(c => c.active).length);
const totalRevenue = computed(() => clients.value.reduce((s, c) => s + (c.totalSpent || 0), 0));
const ticketAverage = computed(() => {
  const count = clients.value.length || 1;
  return Math.round((totalRevenue.value / count) * 100) / 100;
});

function fmtCurrency(value) {
  // formata para BRL simples
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
</script>

<style scoped>
/* container aligns with parent (tab-content has margin: 0 80px) */
.clientes-root {
  margin: 0 80px;
  padding: 24px 0;
  color: #fff;
}

/* top summary cards */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 22px;
}

.summary-card {
  background: #1A1A1A;
  border: 1px solid rgba(255,255,255,0.04);
  padding: 18px;
  border-radius: 10px;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.summary-card small {
  color: #8B978B;
  font-size: 13px;
}

.summary-card strong {
  font-size: 20px;
  margin-top: 6px;
}

.summary-card .col { display:flex; flex-direction:column; gap:4px; align-items:flex-start; }
.highlight { color: #F8C630; font-size: 20px; }

/* clientes box */
.clientes-box {
  margin-top: 18px;
  background: #1A1A1A;
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 22px;
  box-sizing: border-box;
}

/* header with title and search */
.clientes-header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 12px;
  margin-bottom: 14px;
}

.clientes-header h3 {
  margin: 0;
  font-size: 22px;
}

.search-wrap {
  display:flex;
  align-items:center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255,255,255,0.03);
  padding: 10px 12px;
  border-radius: 8px;
  min-width: 240px;
}

.search-wrap input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  min-width: 160px;
  font-size: 14px;
}

/* list */
.clientes-list {
  display:flex;
  flex-direction: column;
  gap: 14px;
}

.cliente-item {
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255,255,255,0.02);
  padding: 14px;
  border-radius: 12px;
  gap: 12px;
}

/* left area: avatar + details */
.left {
  display:flex;
  gap: 12px;
  align-items:center;
  flex: 1 1 auto;
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #F8C630;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight: 700;
  color: #111;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow: inset 0 -4px rgba(0,0,0,0.12);
}

.info {
  display:flex;
  flex-direction: column;
  gap: 6px;
}

.client-name {
  font-size: 15px;
  color: #fff;
}

.contact {
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contact-line {
  display:flex;
  gap:8px;
  align-items:center;
  color: #8B978B;
  font-size: 13px;
}

/* right area: stats and action */
.right {
  display:flex;
  align-items:center;
  gap: 18px;
  justify-content:flex-end;
  flex-shrink: 0;
}

.meta-stat {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:6px;
  min-width: 80px;
}

.meta-stat small {
  color: #8B978B;
  font-size: 12px;
}

.meta-stat strong {
  font-size: 16px;
}

.star { color: #F8C630; margin-right:6px; }

.rating { display:flex; align-items:center; gap:6px; justify-content:flex-end; flex-direction: row;}

/* profile button */
.btn-profile {
  background: transparent;
  color:#fff;
  border: 1px solid rgba(255,255,255,0.04);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.btn-profile:hover {
  background: #D2A800;
  color: #111;
  transition: 0.5s;
}

/* empty state */
.empty {
  padding: 30px;
  color: #8B978B;
  text-align: center;
}

/* responsive adjustments */
@media (max-width: 1100px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .right { gap: 12px; }
}

@media (max-width: 940px) {
  .clientes-root { margin: 0 20px; }
  .stats-row { grid-template-columns: 1fr; gap: 12px;}
  .clientes-header { flex-direction: column; align-items: flex-start; gap: 10px; }
  .cliente-item { flex-direction: column; align-items: stretch; gap: 10px; }
  .right { justify-content: space-between; width: 100%; }
  .meta-stat { align-items: flex-start; }
  .btn-profile { align-self: flex-end; }
  .search-wrap { width: 100%; }
}
@media (max-width: 600px) {
  .avatar { width: 44px; height: 44px; font-size: 14px; }
  .client-name { font-size: 14px; }
  .contact-line { font-size: 12px; }
  .meta-stat { min-width: 70px; }
  .summary-card { min-height: 60px; padding: 14px;}
  .summary-card strong { font-size: 18px; }
}

.cliente-item:hover{
  border: 1px solid #D2A800;
}
</style>
