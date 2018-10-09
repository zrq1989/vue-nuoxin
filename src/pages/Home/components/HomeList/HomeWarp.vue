<template>
    <div class="wrap main_width">
        <homelist-slider></homelist-slider>
    </div>
</template>

<script>
    import HomelistSlider from "./HomelistSlider";
    export default {
        name: "HomeWarp",
        components: {HomelistSlider}
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