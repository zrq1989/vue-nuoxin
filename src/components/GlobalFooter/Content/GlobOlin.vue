<template>
    <div class="footer_online">
        <a href="#" class="service_btn">
            <i></i>
            在线客服
        </a>
        <a href="#" class="wx_btn" @mouseenter="showImg" @mouseleave="hideImg">
            <img :style="{display:disp }" src="./../../../assets/img/qr_code_top.png" alt="微信">
            <i></i>
            微信
        </a>
    </div>
</template>

<script>
    export default {
        name: "GlobOlin",
        data () {
            return {
                disp : "none"
            }
        },
        methods: {
            showImg () {
                this.disp = "block";
            },
            hideImg () {
                this.disp = "none";
            }
        }
    }
</script>

<style scoped lang="less">
    .service_btn {
        display: inline-block !important;
    }
    .wx_btn i {
        background-position: -210px -10px;
    }
    .service_btn i {
        background-position: -160px -10px;
    }
    a i {
        position: absolute;
        width: 30px;
        height: 30px;
        background: url("../../../assets/img/icons_1.png") center no-repeat;
            background-position: -160px -10px;
        top: 0;
        left: 50%;
        margin-left: -15px;
            z-index: 5;
    }
    .footer_online {
        margin-bottom: 20px;
    a {
        display: inline-block;
        position: relative;
        width: 100px;
        padding-top: 36px;
        z-index: 5;
    }
        .wx_btn img {
            position: absolute;
            width: 195px;
            height: 240px;
            max-width: none;
            bottom: 55px;
            left: 50%;
            margin-left: -97px;
            z-index: 10;
        }
    }
</style>