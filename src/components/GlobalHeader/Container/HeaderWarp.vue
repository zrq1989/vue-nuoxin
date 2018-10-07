<template>
    <div class="header_warp">
        <section class="top_bar">
            <top-bar></top-bar>
        </section>
        <section class="header_content main_width clear_fix">
            <header-content></header-content>
        </section>
    </div>
</template>

<script>
    import TopBar from "./TopBar";
    import HeaderContent from "./HeaderContent";
    export default {
        name: "HeaderWarp",
        components: {HeaderContent, TopBar}
    }
</script>

<style scoped>

</style>