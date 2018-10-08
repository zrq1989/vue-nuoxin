<template>
    <header id="globalHeader" class="global_header_new">
        <header-warp></header-warp>
        <glob-warp></glob-warp>
    </header>
</template>

<script>

    import HeaderWarp from "./Container/HeaderWarp";
    import GlobWarp from "./GlobWarp/GlobWarp";
    export default {
        name: "GlobalHeader",
        components: {GlobWarp, HeaderWarp}
    }
</script>

<style scoped>
    .global_header_new {
        line-height: 30px;
        width: 100%;
    }
</style>