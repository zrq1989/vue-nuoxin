<template>
    <div class="global_cover"></div>
</template>

<script>
    export default {
        name: "GlobalCover"
    }
</script>

<style scoped>
    .global_cover {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: #3e3e3e;
        opacity: .3;
        -moz-opacity: .3;
        filter: alpha(opacity=30);
    }
</style>