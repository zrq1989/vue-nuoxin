<template>
    <article id="buy_pop" class="buy_pop">
        <addcart-header @offcart="offCart"></addcart-header>
        <div class="main">
            <addcart-main></addcart-main>
            <div class="detail">
                <addcart-datail></addcart-datail>
                <addcart-bottom></addcart-bottom>
            </div>
        </div>
        <addcart-footer></addcart-footer>
    </article>
</template>

<script>
    import AddcartHeader from "./AddCart/Header/AddcartHeader";
    import AddcartMain from "./AddcartMain/AddcartMain";
    import AddcartDatail from "./AddcartMain/AddcartDatail";
    import AddcartBottom from "./AddcartMain/AddcartBottom";
    import AddcartFooter from "./AddcartFooter";

    export default {
        name: "GlobalAddCart",
        components: {AddcartFooter, AddcartBottom, AddcartDatail, AddcartMain, AddcartHeader},
        data () {
            return {
                of: "",
                carData: [],
                nums: [],
                indexs: ""
            }
        },
        methods: {
            offCart (e) {
                this.of = e;
                this.$emit("cartoff",this.of);
            }
        },
        mounted () {

        },
        computed: {

        },
        watch: {

        }
    }
</script>

<style scoped>
    .buy_pop {
        position: fixed;
        width: 450px;
        min-height: 380px;
        top: 50%;
        left: 50%;
        margin-left: -225px;
        margin-top: -240px;
        z-index: 200;
        background: #ffffff;
        font-size: 14px;
    }
</style>