<template>
    <div class="customer_link_wrap" @mouseenter="listShow" @mouseleave="listHide">
        <span class="s"></span>
        <div class="global_top_customer" :style="{display: togg}">
            <a href="#">登录</a>
            <a href="#">注册</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GlobalCustomer",
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
    .customer_link_wrap {
        display: inline-block;
        font-size: 12px;
        position: relative;
        width: 32px;
        height: 32px;
        vertical-align: middle;
        z-index: 1;
        margin-left: 10px;
        cursor: pointer;
    }
    .customer_link_wrap::before {
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -360px -200px;
        content: '';
        left: 50%;
        margin-left: -20px;
    }
    .s {
        display: block;
        position: absolute;
        width: 16px;
        height: 20px;
        bottom: -15px;
        left: 50%;
        margin-left: -8px;
    }
    .global_top_customer {
        position: absolute;
        top: 47px;
        left: 50%;
        margin-left: -40px;
        background: #ffffff;
        z-index: 12;
        box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
        -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
        padding: 6px 20px;
        a {
            display: block;
            width: 40px;
            height: 36px;
            line-height: 36px;
            text-align: center;
        }
        a:first-of-type {
            border-bottom: 1px solid #e5e5e5;
        }
    }
</style>