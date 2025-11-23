<template>
  <section class="barbeiros-root">
    <div class="barbeiros-header">
      <div>
        <h2>Gerenciar Barbeiros</h2>
        <p>Convide e gerencie sua equipe de profissionais</p>
      </div>

      <div class="actions">
        <button class="btn-invite" @click="$emit('invite')">
          <span class="icon">+</span> Convidar Barbeiro
        </button>
      </div>
    </div>

    <div class="cards-grid">
      <article v-for="barbeiro in barbeiros" :key="barbeiro.id" class="card">
        <div class="card-top">
          <div class="avatar">
            <span class="initials">{{ initials(barbeiro.name) }}</span>
          </div>

          <div class="meta">
            <div class="name-row">
              <h3 class="name">{{ barbeiro.name }}</h3>
              <div class="rating">
                <svg class="star" viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                  <path fill="currentColor"
                    d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.606L19.334 24 12 19.897 4.666 24l1.584-8.644L.5 9.75l7.832-1.732L12 .587z" />
                </svg>
                <span class="score">{{ barbeiro.rating.toFixed(1) }}</span>
              </div>
            </div>

            <div class="contact">
              <div class="line"><svg class="icon-mail" viewBox="0 0 24 24" width="14" height="14">
                  <path fill="currentColor" d="M2 6v12h20V6l-10 6L2 6z" />
                </svg> {{ barbeiro.email }}</div>
              <div class="line"><svg class="icon-phone" viewBox="0 0 24 24" width="14" height="14">
                  <path fill="currentColor"
                    d="M6.6 10.8a15.053 15.053 0 006.6 6.6l1.8-1.8a1 1 0 01.9-.27c1 .2 2.1.3 3.2.3a1 1 0 011 1V20a1 1 0 01-1 1C9.9 21 3 14.1 3 6a1 1 0 011-1h2.5a1 1 0 011 1c0 1.1.1 2.2.3 3.2a1 1 0 01-.2.9L6.6 10.8z" />
                </svg> {{ barbeiro.phone }}</div>
            </div>
          </div>

          <span class="badge" v-if="barbeiro.active">Ativo</span>
        </div>

        <hr class="divider" />

        <div class="stats">
          <div class="stat">
            <small>Total de Cortes</small>
            <strong>{{ barbeiro.totalCuts }}</strong>
          </div>
          <div class="stat">
            <small>Comissão</small>
            <strong>{{ barbeiro.commission }}%</strong>
          </div>
        </div>

        <button class="btn-details" @click="$emit('open-barber', barbeiro.id)">Ver Detalhes</button>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const imagemDecorativa = '';

const barbeiros = ref([
  {
    id: 1,
    name: 'Carlos Silva',
    email: 'carlos@email.com',
    phone: '(11) 98765-4321',
    rating: 4.8,
    totalCuts: 245,
    commission: 50,
    active: true
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao@email.com',
    phone: '(11) 98765-4322',
    rating: 4.7,
    totalCuts: 198,
    commission: 45,
    active: true
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro@email.com',
    phone: '(11) 98765-4323',
    rating: 4.9,
    totalCuts: 312,
    commission: 55,
    active: true
  }
]);

function initials(name) {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
}
</script>

<style scoped>
.barbeiros-root {
  color: #fff;
  padding: 28px 0;
  background: transparent;
  margin: 0 80px;
}

.barbeiros-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 20px 0;
  gap: 50px;
}

.barbeiros-header h2 {
  margin: 0;
  font-size: 26px;
}

.barbeiros-header p {
  margin: 6px 0 0 0;
  color: #8B978B;
}

.actions {
  display: flex;
  align-items: center;
}

.btn-invite {
  background-color: #D2A800;
  border: none;
  color: #111;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
}

.btn-invite .icon {
  font-weight: 700;
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  justify-content: center;
  gap: 26px;
  margin-top: 12px;
  width: 100%;
}

@media (max-width: 1100px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .barbeiros-header {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
@media (max-width: 600px) {
  .barbeiros-root {
    margin: 0 20px;
  }
  .badge {
    right: 8px;
    top: 8px;
    padding: 4px 8px;
    font-size: 10px;
  }
}

.card {
  background: #1A1A1A;
  border-radius: 12px;
  padding: 18px 14px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
  width: 100%;
}

.card-top {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  position: relative;
}

.avatar {
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #F8C630;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #111;
  font-size: 14px;
  flex-shrink: 0;
  box-shadow: inset 0 -4px rgba(0, 0, 0, 0.12);
}

.meta {
  flex: 1;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.name {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #F8C630;
  font-weight: 600;
}

.rating .star {
  display: block;
  color: #F8C630;
}

.rating .score {
  color: #fff;
  font-size: 13px;
}

.contact {
  margin-top: 8px;
  color: #8B978B;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact .line {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8B978B;
}

.contact svg {
  opacity: 0.9;
}

.badge {
  position: absolute;
  right: 12px;
  top: 12px;
  background: rgba(248, 198, 48, 0.12);
  color: #D2A800;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.divider {
  margin: 12px 0;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
}

.stats {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
}

.stat small {
  color: #8B978B;
  display: block;
  font-size: 12px;
  margin-bottom: 6px;
}

.stat strong {
  font-size: 18px;
}

.btn-details {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
}

.btn-details:hover {
  background: #D2A800;
  color: #111;
  transition: 0.5s;
}

.decorative-img {
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 260px;
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
}

.card:hover{
  border: 1px solid #D2A800;
}

</style>
