<template>
    <section class="cake_section main_width">
        <home-warp></home-warp>
    </section>
</template>

<script>
    import HomeWarp from "./HomeWarp";
    export default {
        name: "HomeList",
        components: {HomeWarp}
    }
</script>

<style scoped lang="less">
    .cake_section {
        position: relative;
        z-index: 2;
        margin: -5% auto 20px;
        padding: 20px;
        background: #f9f9f9;
    }
    .main_width {
        width: 100%;
        max-width: 1200px;
    }
</style>