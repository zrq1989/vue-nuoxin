<template>
    <div class="header_warp">
        <section class="top_bar">
            <top-bar></top-bar>
        </section>
        <section class="header_content main_width clear_fix">
            <glob-logo></glob-logo>
            <div class="f_right right_content">
                <glob-city></glob-city>
                <glob-search></glob-search>
                <glob-car></glob-car>
            </div>
            <global-nav></global-nav>
        </section>
    </div>
</template>

<script>
    import TopBar from "./TopBar";
    import HeaderContent from "./HeaderContent";
    import GlobLogo from "./GlobLogo";
    import GlobCity from "./Content/GlobCity";
    import GlobSearch from "./Content/GlobSearch";
    import GlobCar from "./Content/GlobCar";
    import GlobalNav from "./GlobalNav";
    export default {
        name: "HeaderWarp",
        components: {GlobalNav, GlobCar, GlobSearch, GlobCity, GlobLogo, HeaderContent, TopBar}
    }
</script>

<style scoped lang="less">
    .header_warp {
        display: block;
        .top_bar {
            height: 30px;
            line-height: 30px;
            background: #f9f9f9;
            position: relative;
            padding-right: 12px;
            z-index: 10;
            a {
                margin-left: 30px;
                position: relative;
            }
        }
        z-index: 10;
        width: 100%;
        min-width: 1200px;
        left: 0;
        background: #ffffff;
        border-bottom: 1px solid #e5e5e5;
    }
    .main_width {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .clear_fix {
        zoom: 1;
        display: block;
    }
    .right_content {
        font-size: 0;
        margin: 24px 128px 0 0;
    }
    .f_right {
        float: right !important;
    }
</style>