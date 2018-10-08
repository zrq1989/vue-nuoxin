<template>
    <header id="globalHeader" class="global_header_new">
        <header-warp></header-warp>
    </header>
</template>

<script>

    import HeaderWarp from "./Container/HeaderWarp";
    export default {
        name: "GlobalHeader",
        components: {HeaderWarp}
    }
</script>

<style scoped>
    .global_header_new {
        line-height: 30px;
        width: 100%;
    }
</style>