<template>
    <div class="footer_address">
        <p class="clear_fix">
            诺心食品（上海)有限公司上海徐汇区田林路140号28号楼503室客服邮箱：services@lecake.com  公司电话：4001-578-578
        </p>
    </div>
</template>

<script>
    export default {
        name: "GlobAddress"
    }
</script>

<style lang="less" scoped>
    p {
        position: relative;
        display: inline-block;
        height: 40px;
        line-height: 40px;
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