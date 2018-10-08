<template>
    <div class="header_wrap fix_header active">
        <header-conte></header-conte>

    </div>
</template>

<script>
    import HeaderConte from "./HeaderConte";
    import GloRight from "../Container/GloRight";
    import GlobaRight from "./GlobaRight";
    import GlobalNav from "./GlobalNav";
    export default {
        name: "GlobWarp",
        components: {GlobalNav, GlobaRight, GloRight, HeaderConte}
    }
</script>

<style scoped>
    .header_wrap.fix_header {
        position: fixed;
        z-index: 21;
        -webkit-transition: all 0.5s ease;
    }
    .header_wrap {
        width: 100%;
        min-width: 1200px;
        left: 0;
        background: #ffffff;
        border-bottom: 1px solid #e5e5e5;
    }
</style>