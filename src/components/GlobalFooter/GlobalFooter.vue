<template>
    <footer class="global_footer">
        <glob-olin></glob-olin>
        <glob-tel></glob-tel>
        <glob-fot-nav></glob-fot-nav>
        <glob-address></glob-address>
        <glob-copy></glob-copy>
    </footer>
</template>

<script>
    import GlobOlin from "./Content/GlobOlin";
    import GlobTel from "./Content/GlobTel";
    import GlobalNav from "../GlobalHeader/Container/GlobalNav";
    import GlobFotNav from "./Content/GlobFotNav";
    import GlobAddress from "./Content/GlobAddress";
    import GlobCopy from "./Content/GlobCopy";
    export default {
        name: "GlobalFooter",
        components: {GlobCopy, GlobAddress, GlobFotNav, GlobalNav, GlobTel, GlobOlin}
    }
</script>

<style scoped>
    .global_footer {
        border-top: 1px solid #e5e5e5;
        text-align: center;
        padding: 40px 0 20px;
        background: #ebebeb;
        position: relative;
    }
    .footer_online a {
        display: inline-block;
        position: relative;
        width: 100px;
        padding-top: 36px;
    }


</style>