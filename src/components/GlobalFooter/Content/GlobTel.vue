<template>
    <div class="footer_tel">
        <p>
            <i></i>
            <span>客服电话：4001-578-578 服务时间（08:30-22:30）</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "GlobTel"
    }
</script>

<style scoped lang="less">
    .footer_tel { p {
        padding-left: 30px;
        position: relative;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        i {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url("./../../../assets/img/icons_1.png") center no-repeat;
            background-position: -265px -15px;
            left: 0;
            top: 50%;
            margin-top: -8px;
        }
    }
    }

</style>