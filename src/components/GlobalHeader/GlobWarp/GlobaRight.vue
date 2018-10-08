<template>
    <div class="f_right right_content">
        <global-cyti></global-cyti>
        <global-search></global-search>
        <global-customer></global-customer>
        <global-vav-cart></global-vav-cart>
    </div>
</template>

<script>
    import GlobCity from "../Container/Content/GlobCity";
    import GlobalCyti from "./GlobalCyti";
    import GlobalSearch from "./GlobalSearch";
    import GlobalCustomer from "./GlobalCustomer";
    import GlobalVavCart from "./GlobalVavCart";
    export default {
        name: "GlobaRight",
        components: {GlobalVavCart, GlobalCustomer, GlobalSearch, GlobalCyti, GlobCity}
    }
</script>

<style scoped>
    .right_content {
        font-size: 0;
    }
    .f_right {
        float: right !important;
    }
    .right_content {
        margin: 14px 64px 0 0;
    }
</style>