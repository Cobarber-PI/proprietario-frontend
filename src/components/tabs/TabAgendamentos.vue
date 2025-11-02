<template>
    <div>
        <h2>Agendamentos</h2>
        <!-- Conteúdo de Agendamentos -->

        <div class="dashboard" style="display:flex; gap:16px;">
    <div style="flex:1; background:#0f1113; padding:12px; border-radius:10px;">
      <h3 style="color:#e6e6e6; margin-bottom:8px;">Agendamentos por Dia da Semana</h3>
      <apexchart
        type="bar"
        :options="barOptions"
        :series="barSeries"
        height="260"
      />
    </div>

    <div style="flex:1; background:#0f1113; padding:12px; border-radius:10px;">
      <h3 style="color:#e6e6e6; margin-bottom:8px;">Faturamento Mensal</h3>
      <apexchart
        type="line"
        :options="lineOptions"
        :series="lineSeries"
        height="260"
      />
    </div>
  </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const barSeries = ref([
  { name: 'Agendamentos', data: [10, 18, 14, 22, 28, 36, 18] }
])
const barOptions = ref({
  chart: { toolbar: { show: false }, background: '#0f1113' },
  colors: ['#F2C94C'],
  plotOptions: { bar: { borderRadius: 8, columnWidth: '50%' } },
  xaxis: {
    categories: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
    labels: { style: { colors: '#9aa0a6' } }
  },
  yaxis: {
    labels: { style: { colors: '#9aa0a6' } },
  },
  grid: { borderColor: 'rgba(255,255,255,0.03)' },
  tooltip: { theme: 'dark' },
  dataLabels: { enabled: false },
  legend: { show: false }
})

const lineSeries = ref([
  { name: 'Faturamento', data: [8200, 9000, 11800, 11000, 13500, 15000] }
])
const lineOptions = ref({
  chart: { toolbar: { show: false }, background: '#0f1113' },
  stroke: { curve: 'smooth', width: 3 },
  fill: { type: 'gradient', gradient: { shade: 'light', opacityFrom: 0.25, opacityTo: 0 } },
  colors: ['#F2C94C'],
  xaxis: {
    categories: ['Jan','Fev','Mar','Abr','Mai','Jun'],
    labels: { style: { colors: '#9aa0a6' } }
  },
  yaxis: {
    labels: { style: { colors: '#9aa0a6' }, formatter: val => `R$ ${Number(val).toLocaleString()}` }
  },
  grid: { borderColor: 'rgba(255,255,255,0.03)' },
  tooltip: { theme: 'dark' },
  dataLabels: { enabled: false },
  markers: { size: 4 }
})
</script>
