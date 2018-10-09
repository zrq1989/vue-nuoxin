<template>
    <div :class="[header_wrap,fix_header,active]">

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
        components: {GlobalNav, GlobaRight, GloRight, HeaderConte},
        data () {
            return{
                header_wrap: "header_wrap",
                fix_header: "fix_header",
                active: 'activ'
            }
        },
        methods: {
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop>="44") {
                    this.active = "active"
                }else {
                    this.active = ""
                }
            }


        } ,
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .header_wrap.fix_header.active {
        top: 0;
    }
    .header_wrap.fix_header {
        position: fixed;
        top: -60px;
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