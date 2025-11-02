<template>
  <div class="dashboard-grid">
    <div class="card">
      <h3 class="card-title">Receitas vs Despesas</h3>
      <div class="chart-wrapper">
        <apexchart
          class="chart"
          type="bar"
          :options="barOptions"
          :series="barSeries"
          :height="300"
        />
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Distribuição de Despesas</h3>
      <div class="chart-wrapper">
        <apexchart
          class="chart pie-chart"
          type="pie"
          :options="pieOptions"
          :series="pieSeries"
          :height="300"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* === DADOS - você altera aqui === */
const barSeries = ref([
  { name: 'Receita', data: [8200, 9000, 11800, 11000, 13500, 15000] },
  { name: 'Despesas', data: [5600, 6200, 7000, 6400, 7600, 8000] }
])
const barCategories = ref(['Jan','Fev','Mar','Abr','Mai','Jun'])

const pieSeries = ref([46, 23, 18, 9, 4]) // valores percentuais ou absolutos
const pieLabels = ['Salários', 'Comissões', 'Aluguel', 'Produtos', 'Outros']
/* ================================ */

/* === OPTIONS: BARRAS === */
const barOptions = ref({
  chart: {
    toolbar: { show: false },
    background: '#0f1113',
    stacked: false
  },
  colors: ['#F2C94C', '#E04646'], // amarelo e vermelho
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%',
      borderRadius: 8
    }
  },
  dataLabels: { enabled: false },
  stroke: { show: false },
  xaxis: {
    categories: barCategories.value,
    labels: { style: { colors: '#9aa0a6' } }
  },
  yaxis: {
    labels: {
      style: { colors: '#9aa0a6' },
      formatter: (val) => `R$ ${Number(val).toLocaleString()}`
    }
  },
  grid: { borderColor: 'rgba(255,255,255,0.03)' },
  legend: {
    show: true,
    position: 'bottom',
    labels: { colors: '#ddd' }
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val) => `R$ ${Number(val).toLocaleString()}`
    }
  }
})

/* === OPTIONS: PIE (com cálculo de porcentagem para os rótulos) === */
const pieTotal = computed(() => pieSeries.value.reduce((s, v) => s + v, 0))

const pieOptions = ref({
  chart: {
    toolbar: { show: false },
    background: '#0f1113'
  },
  labels: pieLabels,
  colors: ['#F2C94C', '#F29F3F', '#17A2FF', '#A96DF5', '#E84B8B'], // cores distintas
  legend: { show: false },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      // val pode não ser a porcentagem direta, por isso calculamos manualmente
      const idx = opts.seriesIndex
      const value = pieSeries.value[idx]
      const percent = (value / pieTotal.value) * 100
      return `${pieLabels[idx]} ${percent.toFixed(0)}%`
    },
    style: { colors: ['#fff'] },
    dropShadow: { enabled: false }
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val, opts) => {
        // mostra valor absoluto e porcentagem
        const idx = opts.seriesIndex
        const percent = (pieSeries.value[idx] / pieTotal.value) * 100
        return `${pieSeries.value[idx]} (${percent.toFixed(0)}%)`
      }
    }
  }
})
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Card base */
.card {
  background: #0f1113;
  padding: 18px;
  border-radius: 8px;
  box-sizing: border-box;
  min-height: 360px;
  display: flex;
  flex-direction: column;
}

/* Título */
.card-title {
  margin: 0 0 14px 0;
  color: #e6e6e6;
  font-weight: 600;
}

/* Wrapper para forçar espaço e centralizar gráficos */
.chart-wrapper {
  flex: 1;
  display: flex;
  align-items: center;   /* centraliza verticalmente */
  justify-content: center; /* centraliza horizontalmente */
  min-height: 260px;
}

/* controlar largura dos charts */
.chart { width: 100%; max-width: 740px; }

/* se quiser o pie menor visualmente */
.pie-chart { max-width: 420px; }
</style>
