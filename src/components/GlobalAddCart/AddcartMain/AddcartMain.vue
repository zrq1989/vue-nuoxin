<template>
    <section class="top clear_fix ">
        <a class="pop_item " href="#">2-4人食</a>
        <a class="pop_item "  href="#">5-8人食</a>
        <a class="pop_item "  href="#">10-12人食</a>
        <a class="pop_item "  href="#">15-20人食</a>
    </section>
</template>

<script>
    export default {
        name: "AddcartMain"
    }
</script>

<style scoped lang="less">
    .top {
        background: #f9f9f9;
        a {
            float: left;
            width: 25%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 12px;
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