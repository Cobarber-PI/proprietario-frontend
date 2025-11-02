<script setup>
// ...
</script>
<template>
    <div class="wrapper-geral">
        <div class="infos-wrapper">
            <div class="text-info">
                <h3>Faturamento Mensal</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
        <div class="infos-wrapper">
             <div class="text-info">
                <h3>Faturamento Mensal</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
        <div class="infos-wrapper">
             <div class="text-info">
                <h3>Faturamento Mensal</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
        <div class="infos-wrapper">
             <div class="text-info">
                <h3>Faturamento Mensal</h3>
                <h1>R$ 14.500</h1>
                <p>+12% vs mês anterior</p>
            </div>
            <div class="logo-info">
                <img src="/public/home/cifra.svg" alt="">
            </div>
        </div>
    </div>
    <div class="wrapper-grafico">
        <div class="grafico"></div>
        <div class="grafico"></div>
    </div>
    <div class="barbeiros-mes">

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
    border: 1px solid #333333;
    display: flex;
    align-items: center;
}
.text-info{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
.text-info  h3 {
    font-size: 15px;
    color: #8B978B;
    margin-bottom: 22px;
    font-weight: 900;
}
.text-info h1{
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
    margin-left: 40px;
}
.logo-info img {
    width: 1.5rem;
    height: 1.5rem;
}
.wrapper-grafico{
    height: 400px;
    width: 1180px;
    display: flex;
    margin: auto;
    margin-top: 20px;
    gap: 20px;
}
.grafico{
    background-color: #1A1A1A;
    height: 100%;
    width: 100%;
    border-radius: 10px;

}
.barbeiros-mes{
    background-color: #1A1A1A;
    height: 360px;
    width: 1180px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
}
</style>
