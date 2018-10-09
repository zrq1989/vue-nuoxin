<template>
    <section class="gift_section">
        <home-warp></home-warp>
    </section>
</template>

<script>
    import HomeWarp from "./HomeWarp";
    export default {
        name: "HomeLists",
        components: {HomeWarp}
    }
</script>

<style scoped lang="less">
    .gift_section {
        position: relative;
        z-index: 2;
        padding: 20px 0;
        background: #f9f9f9;
    }
</style>