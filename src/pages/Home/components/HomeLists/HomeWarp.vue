<template>
    <div class="wrap main_width">
        <list-newp></list-newp>
        <home-link-warp></home-link-warp>
    </div>
</template>

<script>
    import HomelistSlider from "./HomelistSlider";
    import ListNewp from "./List/ListNewp";
    import HomeLinkWarp from "./HomeLinkWarp";
    export default {
        name: "HomeWarp",
        components: {HomeLinkWarp, ListNewp, HomelistSlider}
    }
</script>

<style scoped>
    .main_width {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
</style>