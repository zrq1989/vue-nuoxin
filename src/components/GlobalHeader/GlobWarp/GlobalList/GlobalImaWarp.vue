<template>
    <div class="img_wrap f_left">
        <img class="" src="./../../../../assets/img/list_12287.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "GlobalImaWarp"
    }
</script>

<style scoped lang="less">
    .img_wrap {
        width: 90px;
        height: 90px;
    }
    .img_wrap {
        overflow: hidden;
        position: relative;
        img {
            max-height: 100%;
            max-width: none;
            position: absolute;
            margin: auto;
            top: -1000px;
            right: -1000px;
            bottom: -1000px;
            left: -1000px;
        }
    }
    .f_left {
        float: left !important;
    }
</style>