<template>
    <div class="main_width clear_fix">
        <glo-right></glo-right>
    </div>
</template>

<script>
    import GloRight from "./GloRight";
    export default {
        name: "TopBar",
        components: {GloRight}
    }
</script>

<style scoped lang="less">
    .main_width {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .clear_fix {
        display: block;
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