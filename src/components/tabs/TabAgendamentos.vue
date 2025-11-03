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
                <h1>1</h1>
            </div>
        </div>
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Faturamento Mensal</h3>
                <h1>R$ 14.500</h1>
            </div>
        </div>
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Faturamento Mensal</h3>
                <h1>R$ 14.500</h1>
            </div>
        </div>
    </div>
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