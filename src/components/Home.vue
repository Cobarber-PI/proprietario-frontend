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
</template>

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
.profile{
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
</style>