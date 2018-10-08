<template>
    <div class="footer_nav clear_fix">
        <p class="clear_fix">
            <a href="#">诺心公告</a>
            <a href="#">关于诺心</a>
            <a href="#">联系我们</a>
            <a href="#">客服服务</a>
            <a href="#">食品经营许可证</a>
            <a href="#">生产许可证</a>
            <a href="#">预付费卡协议</a>
            <a href="#">
                <i></i>
                上海工商
            </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "GlobFotNav"
    }
</script>

<style scoped lang="less">
    .clear_fix {
        zoom: 1;
        display: block;
    }
    .footer_nav {
        p {
            position: relative;
            display: inline-block;
            height: 40px;
            line-height: 40px;
        }
        a {
            float: left;
            height: 16px;
            line-height: 16px;
            padding: 0 12px;
            margin-top: 12px;
            border-right: 1px solid #3e3e3e;
        }
        a.last i {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url("../../../assets/img/icons_1.png") center no-repeat;
            background-position: -15px -65px;
            left: 12px;
        }
    }
    .clear_fix::after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
        zoom: 1;
    }

</style>