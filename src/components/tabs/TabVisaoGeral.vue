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
        <h1>Top Barbeiros do Mês</h1>
        <div class="content">
            <div class="barbeiros">
                <div class="parte-esquerda">
                    <div class="img-esquerda">
                        <img src="/public/home/cifra.svg" alt="">
                    </div>
                    <div class="info-esquerda">
                        <h1>João Silva</h1>
                        <p>45 Cortes</p>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
            <div class="barbeiros">
                <div class="parte-esquerda">
                    <div class="img-esquerda">
                        <img src="/public/home/cifra.svg" alt="">
                    </div>
                    <div class="info-esquerda">
                        <h1>João Silva</h1>
                        <p>45 Cortes</p>
                    </div>
                </div>
                <div class="parte-direita">
                    <h1>R$ 1.500</h1>
                    <p>Faturamento</p>
                </div>
            </div>
            <div class="barbeiros">
                <div class="parte-esquerda">
                    <div class="img-esquerda">
                        <img src="/public/home/cifra.svg" alt="">
                    </div>
                    <div class="info-esquerda">
                        <h1>João Silva</h1>
                        <p>45 Cortes</p>
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
    border: 2px solid #333333;

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
    margin-left: 40px;
}

.logo-info img {
    width: 1.5rem;
    height: 1.5rem;
}

.wrapper-grafico {
    height: 400px;
    width: 1180px;
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
}

.barbeiros-mes {
    background-color: #1A1A1A;
    height: 360px;
    width: 1180px;
    margin: auto;
    border-radius: 10px;
    padding-top: 35px;
    margin-top: 20px;
    border: 2px solid #333333;
}

.barbeiros-mes>h1 {
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

.barbeiros {
    background-color: #1A1A1A;
    border: 2px solid #333333;
    height: 75px;
    width: 96%;
    margin: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.parte-esquerda {
    display: flex;
}

.img-esquerda {
    border-radius: 50%;
    background-color: #302B1C;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}

.img-esquerda img {
    width: 1.25rem;
    height: 1.25rem;
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
