<template>
    <div class="f_right">
        <a href="/">登录</a>
        <b>/</b>
        <a href="#" style="margin-left: 0px">注册</a>
        <a href="#" class="wx_btn f_right" @mouseenter="wxShow" @mouseleave="wxHide">
            <img src="./../../../assets/img/qr_code_top.png" alt="" :style="{ display: change }">
            微信
        </a>
    </div>
</template>

<script>
    export default {
        name: "HeaderContent",
        data () {
            return {
                change: "none"
            }
        },
        methods: {
            wxShow() {
                this.change = "block"
            },
            wxHide () {
                this.change = "none"
            }
        }
    }
</script>

<style scoped lang="less">
    #globalHeader{
        font-size: 12px;
        .wx_btn {
            padding-left: 36px;
            img {
                position: absolute;
                width: 195px;
                height: 239px;
                max-width: none;
                top: 20px;
                left: 50%;
                margin-left: -100px;
                z-index: 10;
            }
        }
        .wx_btn::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            background: url("../../../assets/img/icons.png") center no-repeat;
            background-size: 400px 400px;
            top: 50%;
            margin-top: -20px;
            background-position: -320px -240px;
            left: 0;
        }
         a {
             margin-left: 30px;
            position: relative;
        }
        .f_right {
            float: right !important;
        }
        a:hover {
            color: #EA9599;
        }
    }
</style>