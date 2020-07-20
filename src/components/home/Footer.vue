<template>
    <footer>
        <router-link to="/">
            <img src="@/assets/img/footer1.png" alt="">
            <span>首页</span>
        </router-link>
        <router-link to="/order">
            <img src="@/assets/img/footer2.png" alt="">
            <span>订单</span>
        </router-link>
        <router-link to="/userCenter">
            <img src="@/assets/img/footer3.png" alt="">
            <span>个人中心</span>
        </router-link>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    z-index: 9999;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.46666rem;
    width: 100%;
    background: #fff;
}
footer a{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
footer a img{
    width: .72rem;
    height: .72rem;
}
footer a span{
    font-size: .37333rem;
    margin-top: .13333rem;
}
</style>