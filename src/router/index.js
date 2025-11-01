import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

import HomeView from '../views/HomeView.vue'
import TabVisaoGeral from '../components/tabs/TabVisaoGeral.vue'
import TabAgendamentos from '../components/tabs/TabAgendamentos.vue'
import TabBarbeiros from '../components/tabs/TabBarbeiros.vue'
import TabClientes from '../components/tabs/TabClientes.vue'
import TabAvaliacoes from '../components/tabs/TabAvaliacoes.vue'
import TabFinanceiro from '../components/tabs/TabFinanceiro.vue'
import TabNotificacoes from '../components/tabs/TabNotificacoes.vue'
import TabConfiguracoes from '../components/tabs/TabConfiguracoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'visao-geral',
          name: 'visao-geral',
          component: TabVisaoGeral,
        },
        {
          path: 'agendamentos',
          name: 'agendamentos',
          component: TabAgendamentos,
        },
        {
          path: 'barbeiros',
          name: 'barbeiros',
          component: TabBarbeiros,
        },
        {
          path: 'clientes',
          name: 'clientes',
          component: TabClientes,
        },
        {
          path: 'avaliacoes',
          name: 'avaliacoes',
          component: TabAvaliacoes,
        },
        {
          path: 'financeiro',
          name: 'financeiro',
          component: TabFinanceiro,
        },
        {
          path: 'notificacoes',
          name: 'notificacoes',
          component: TabNotificacoes,
        },
        {
          path: 'configuracoes',
          name: 'configuracoes',
          component: TabConfiguracoes,
        },
      ],
    },
  ],
})

export default router
