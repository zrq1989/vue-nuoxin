<template xmlns="">
    <section class="header_content main_width clear_fix">
        <a href="javascript:;" class="logo_img">
            <img src="./../../../assets/img/logo_new.png" alt="logo">
        </a>
        <globa-right></globa-right>
        <global-nav></global-nav>
    </section>
</template>

<script>
    import GlobaRight from "./GlobaRight";
    import GlobalNav from "./GlobalNav";
    export default {
        name: "HeaderConte",
        components: {GlobalNav, GlobaRight}
    }
</script>

<style scoped lang="less">
    .logo_img {
        height: 24px;
        margin: 18px 32px 0 64px;
    }
    img, object, embed {
        max-width: 100%;
        vertical-align: top;
    }
    .main_width {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .clear_fix {
        *zoom: 1;
        display: block;
        zoom: 1;
    }
    .logo_img {
        float: left;
        width: 207px;
    }
</style>