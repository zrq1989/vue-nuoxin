<template>
    <ul class="goods_list">
        <li class="goods_item clear_fix">
            <global-ima-warp></global-ima-warp>
            <global-goods></global-goods>
        </li>
    </ul>
</template>

<script>
    import GlobalImaWarp from "./GlobalImaWarp";
    import GlobalGoods from "./GlobalGoods";
    export default {
        name: "GlpbalList",
        components: {GlobalGoods, GlobalImaWarp}
    }
</script>

<style scoped lang="less">
    .goods_list {
        padding: 0 20px;
        max-height: 350px;
        overflow: auto;
        .goods_item:last-of-type {
            border-bottom: 0;
        }
        .goods_item {
            padding: 20px 0;
            border-bottom: 1px solid #e5e5e5;
        }
    }
    .clear_fix {
        *zoom: 1;
        display: block;
        zoom: 1;
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