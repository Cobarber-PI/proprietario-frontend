<template>
    <nav>
        <div class="tittle">
            <img src="/public/home/tesoura.svg" alt="">
            <div class="text">
                <h1>Cobarber</h1>
                <p>Painel de Proprietário</p>
            </div>
        </div>
        <div class="info">
            <div class="info-text">
                <h1>Barbearia Premium</h1>
                <p>CNPJ: 12.345.678/0001-90</p>
            </div>
            <div class="profile">
                <img src="/public/home/user.svg" alt="">
            </div>
        </div>
    </nav>

    <div class="tabs">
        <button v-for="tab in tabs" :key="tab.key" :class="{ active: activeTab === tab.key }"
            @click="activeTab = tab.key" style="background-color:">
            {{ tab.label }}
        </button>
    </div>
    <div class="tab-content">
        <component :is="activeTabComponent" />
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

import TabVisaoGeral from './tabs/TabVisaoGeral.vue';
import TabAgendamentos from './tabs/TabAgendamentos.vue';
import TabBarbeiros from './tabs/TabBarbeiros.vue';
import TabClientes from './tabs/TabClientes.vue';
import TabFinanceiro from './tabs/TabFinanceiro.vue';
import TabConfiguracoes from './tabs/TabConfiguracoes.vue';

const tabs = [
    { label: 'Visão Geral', key: 'visao', component: TabVisaoGeral },
    { label: 'Agendamentos', key: 'agendamentos', component: TabAgendamentos },
    { label: 'Barbeiros', key: 'barbeiros', component: TabBarbeiros },
    { label: 'Clientes', key: 'clientes', component: TabClientes },
    { label: 'Financeiro', key: 'financeiro', component: TabFinanceiro },
    { label: 'Configurações', key: 'configuracoes', component: TabConfiguracoes },
];
const activeTab = ref(localStorage.getItem('activeTab') || 'visao');
watch(activeTab, (newTab) => {
    localStorage.setItem('activeTab', newTab)
});

const activeTabComponent = computed(() => {
    const tab = tabs.find(t => t.key === activeTab.value);
    return tab ? tab.component : null;
});
</script>

<style scoped>
nav {
    color: white;
    display: flex;
    height: 85px;
    width: 100%;
    background-color: #1A1A1A;
    align-items: center;
    justify-content: space-between;
}

.tittle {
    display: flex;
    align-items: center;
}

.tittle img {
    width: 30px;
    height: 30px;
    margin-left: 80px;
}

.text {
    margin-left: 20px;
}

.text h1 {
    font-size: 23px;
}

.text p {
    font-size: 14px;
    color: #8B978B;
    margin-top: 2px;
}

.info {
    display: flex;
    margin-right: 80px;
    align-items: center;
}

.info-text h1 {
    font-size: 18px;
}

.info p {
    margin-top: 5px;
    font-size: 14px;
    color: #8B978B;
}

.profile {
    border-radius: 50%;
    background-color: #F8C630;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 20px;
}

.profile img {
    width: 20px;
    height: 20px;
}

.tabs {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 35px;
}

.tabs button {
    background: none;
    border: none;
    color: #fff;
    padding: 8px 25px;
    cursor: pointer;
    font-size: 16px;
    border-bottom: 2px solid transparent;
    transition: color 0.2s, border-bottom 0.2s;
}

.tabs button.active {
    border-bottom: 2px solid #F8C630;
    color: #F8C630;
}

.tab-content {
    margin: 0 80px;
}

.tabs button:hover {
    color: #F8C630;
    border-bottom: 2px solid #F8C630;
}

@media (max-width: 768px) {
    .tabs {
        flex-direction: column;
        align-items: center;
    }

    .tabs button {
        padding: 8px 0;
    }

    .tab-content {
        margin: 0 20px;
    }

    .tabs button:hover {
        background-color: #F8C630;
        width: 100%;
        color: #1A1A1A;
    }
    .text, .info-text{
        display: none;
    }
}
</style>