<script setup>
import { ref } from 'vue'

const selectedDate = ref(new Date())

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'yellow',
      fillMode: 'outline',
    },
    dates: selectedDate,
  },
])
</script>

<template>
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
                <h1 style="color: #EAB308;">1</h1>
            </div>
        </div>
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Confirmados</h3>
                <h1 style="color: #3B82F6;">1</h1>
            </div>
        </div>
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Hoje</h3>
                <h1 style="color: #EAB308;">0</h1>
            </div>
        </div>
    </div>
      <VCalendar transparent borderless 
      />

</template>
<style scoped>
.wrapper-geral {
    width: 1180px;
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
    border: 2px solid #333333;

}

.text-info {
    margin-left: 30px;
    text-align: left;
  }

.text-info h3 {
    font-size: 15px;
    color: #8B978B;
    font-weight: 900;
    margin-top: 35px;
}

.text-info h1 {
    font-size: 22px;
    color: white;
    margin-top: 15px;
}

</style>