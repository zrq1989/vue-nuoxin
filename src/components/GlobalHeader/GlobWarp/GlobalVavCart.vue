<template>
    <div class="nav_cart_wrap f_right" @mouseenter="listShow" @mouseleave="listHide">
        <a href="#" class="nav_cart">
            <strong class="global_cart_num hide">
                <b>0</b>
            </strong>
        </a>
        <span class="s"></span>
        <div class="global_top_cart" :style="{ display: togg }">
            <div class="no_content">
                 购物车中还没有商品，赶紧选购吧
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GlobalVavCart",
        data () {
            return {
                togg: "none"
            }
        },
        methods: {
            listShow () {
                this.togg = "block"
            },
            listHide () {
                this.togg = "none"
            }
        }
    }
</script>

<style scoped lang="less">
    .nav_cart_wrap {
        position: relative;
        margin-left: 10px;
        height: 32px;
        width: 32px;
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        cursor: pointer;
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
    }
    .f_right {
        float: right !important;
    }
    .hide {
        display: none !important;
    }
    .nav_cart_wrap::before {
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -240px -240px;
        content: '';
        left: 50%;
        margin-left: -20px;
    }
    .nav_cart_wrap {
        font-size: 12px;
        cursor: pointer;
    }
    .nav_cart {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .s {
        position: absolute;
        width: 16px;
        height: 20px;
        bottom: -15px;
        left: 50%;
        margin-left: -8px;
    }
    .global_top_cart {
        position: absolute;
        top: 47px;
        width: 300px;
        right: -40px;
        background: #ffffff;
        z-index: 12;
        box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
        -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
        .no_content {
            text-align: center;
            padding: 20px 0;
            color: #949494;
        }
    }
</style>