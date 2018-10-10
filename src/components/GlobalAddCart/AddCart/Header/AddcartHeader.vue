<template>
    <header>
        <h3>建议食用人数</h3>
        <a href="javascript:;" class="close_btn">关闭</a>
    </header>
</template>

<script>
    export default {
        name: "AddcartHeader"
    }
</script>

<style scoped lang="less">
    header {
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #e4dbcd;
        position: relative;
        padding-left: 24px;
    .close_btn {
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("../../../../assets/img/icons_1.png") center no-repeat;
        background-position: -5px -155px;
        left: auto;
        right: 2px;
        top: 2px;
        text-indent: -9999px;
        overflow: hidden;
    }
    }
</style>