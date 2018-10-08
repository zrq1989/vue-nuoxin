<template>
    <div class="nav_cart_wrap f_right">
        <a href="javascript:;" class="nav_cart">
            <strong class="global_cart_num hide">0</strong>
        </a>
    </div>
</template>

<script>
    export default {
        name: "GlobCar"
    }
</script>

<style scoped>
    .nav_cart_wrap {
        position: relative;
        margin-left: 10px;
        height: 32px;
        width: 32px;
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        cursor: pointer;
    }
    .f_right {
        float: right !important;
    }
    .nav_cart_wrap::before {
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("./../../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: -50%;
        margin-top: -20px;
        background-position: -240px -240px;
        content: '';
        left: 50%;
        margin-left: 20px;
    }
    .nav_cart {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .global_cart_num {
        position: absolute;
        min-width: 14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        border-radius: 7px;
        z-index: 1;
        top: 0;
        left: 20px;
        font-size: 12px;
        background: #ff4001;
        color: #ffffff;
    }
    .hide {
        display: none !important;
    }
</style>