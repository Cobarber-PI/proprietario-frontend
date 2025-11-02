<script setup>
import { ref, computed } from 'vue';
const barSeries = ref([
    { name: 'Receita', data: [8200, 9000, 11800, 11000, 13500, 15000] },
    { name: 'Despesas', data: [5600, 6200, 7000, 6400, 7600, 8000] }
])
const barCategories = ref(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'])
const barOptions = ref({
    chart: {
        toolbar: { show: false },
        stacked: false
    },
    colors: ['#F2C94C', '#E04646'], // amarelo e vermelho
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 5
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
    grid: { borderColor: '#333333' },
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
const pieSeries = ref([46, 23, 18, 9, 4])
const pieLabels = ['Salários', 'Comissões', 'Aluguel', 'Produtos', 'Outros']
const pieTotal = computed(() => pieSeries.value.reduce((s, v) => s + v, 0))

const pieOptions = ref({
  chart: {
    toolbar: { show: false },
  },
  labels: pieLabels,
  colors: ['#F2C94C', '#F29F3F', '#17A2FF', '#A96DF5', '#E84B8B'],  
  legend: { show: false },
  dataLabels: {
    enabled: true, 
    formatter: function (val, opts) {
      const idx = opts.seriesIndex
      const value = pieSeries.value[idx]
      const percent = (value / pieTotal.value) * 100
      return `${pieLabels[idx]} ${percent.toFixed(0)}%`
    },
    style: { colors: ['#fff'], },
    dropShadow: { enabled: false }
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val, opts) => {
        const idx = opts.seriesIndex
        const percent = (pieSeries.value[idx] / pieTotal.value) * 100
        return `${pieSeries.value[idx]} (${percent.toFixed(0)}%)`
      }
    }
  }
})
</script>

<template>
    <div class="wrapper-geral">
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Receita Total</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Despesas Totais</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Lucro Líquido</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
    </div>
    <div class="wrapper-grafico">
        <div class="grafico">
            <h3 style="color: white; margin-left: 30px; margin-top: 35px;">Receitas vs Despesas</h3>
            <apexchart class="chart" type="bar" :options="barOptions" :series="barSeries" :height="280" />
        </div>
        <div class="grafico">
            <h3 style="color: white; margin-left: 30px; margin-top: 35px;">Distribuição de Despesas</h3>
            <apexchart
          class="chart pie-chart"
          type="pie"
          :options="pieOptions"
          :series="pieSeries"
          :height="280"
        />
        </div>
    </div>
    <div class="despesas-detalhamento">
        <h1>Top Barbeiros do Mês</h1>
        <div class="content">
            <div class="despesas">
                <div class="parte-esquerda">
                    <div class="img-esquerda" style="background-color: #F8C630;"></div>
                    <div class="info-esquerda">
                        <h1>Salários</h1>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
            <div class="despesas">
                <div class="parte-esquerda">
                    <div class="img-esquerda" style="background-color: #E88C30;"></div>
                    <div class="info-esquerda">
                        <h1>Comissões</h1>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
            <div class="despesas">
                <div class="parte-esquerda">
                    <div class="img-esquerda" style="background-color: #19A2E6;"></div>
                    <div class="info-esquerda">
                        <h1>Aluguel</h1>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
            <div class="despesas">
                <div class="parte-esquerda">
                    <div class="img-esquerda" style="background-color: #AF57DB;"></div>
                    <div class="info-esquerda">
                        <h1>Produtos</h1>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
            <div class="despesas">
                <div class="parte-esquerda">
                    <div class="img-esquerda" style="background-color: #E23670;"></div>
                    <div class="info-esquerda">
                        <h1>Outros</h1>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper-geral {
    width: 1140px;
    display: flex;
    margin: auto;
    margin-top: 20px;
    height: 140px;
    justify-content: center;
    gap: 10px;
}

.infos-wrapper {
    width: 100%;
    height: 100%;
    background-color: #1A1A1A;
    border-radius: 10px;
    border: 1px solid #333333;
    display: flex;
    align-items: center;
    border: 2px solid #333333;
    justify-content: space-between;

}

.text-info {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}

.text-info h3 {
    font-size: 15px;
    color: #8B978B;
    margin-bottom: 22px;
    font-weight: 900;
}

.text-info h1 {
    font-size: 22px;
    color: white;
}

.text-info p {
    font-size: 12px;
    margin-bottom: 5px;
    color: #CDA12B;
}

.logo-info {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #302B1C;
    margin-right: 20px;
}

.logo-info img {
    width: 1.5rem;
    height: 1.5rem;
}

.wrapper-grafico {
    height: 400px;
    width: 1140px;
    display: flex;
    margin: auto;
    margin-top: 20px;
    gap: 20px;
}

.grafico {
    background-color: #1A1A1A;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #333333;
    ;
}

.chart {
    margin-top: 20px;
}
.despesas-detalhamento {
    background-color: #1A1A1A;
    height: auto;
    width: 1140px;
    margin: auto;
    border-radius: 10px;
    padding-top: 35px;
    margin-top: 20px;
    border: 2px solid #333333;
}
.despesas-detalhamento>h1 {
    color: white;
    margin-left: 30px;
    font-size: 23px;
}
.content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
}
.despesas {
    background-color: #1A1A1A;
    border: 2px solid #333333;
    height: 75px;
    width: 96%;
    margin: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}
.parte-esquerda {
    display: flex;
    align-items: center;
}
.img-esquerda {
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}
.info-esquerda {
    margin-left: 20px;
}

.info-esquerda h1 {
    color: white;
    font-size: 18px;
}

.info-esquerda p {
    color: #8B978B;
    margin-top: 5px;
}

.parte-direita {
    margin-right: 20px;
}

.parte-direita h1 {
    color: white;
    font-size: 18px;
}

.parte-direita p {
    color: #8B978B;
    font-size: 14px;
}
</style>
