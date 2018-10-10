<template>
    <section class="cake_section main_width">
        <home-warp @onCart="oncart"></home-warp>
    </section>
</template>

<script>
    import HomeWarp from "./HomeWarp";
    export default {
        name: "HomeList",
        components: {HomeWarp},
        data () {
            return {
                ons: "",
                carData: []
            }
        },
        methods: {
            oncart (e, cardata) {
                this.ons = e;
                this.carData = cardata;
                this.$emit("cartons",this.ons,cardata);
            }
        },
        watch: {
            ons: function () {

                // this.ons = ""
            }
        }
    }
</script>

<style scoped lang="less">
    .cake_section {
        position: relative;
        z-index: 2;
        margin: -5% auto 20px;
        padding: 20px;
        background: #f9f9f9;
    }
    .main_width {
        width: 100%;
        max-width: 1200px;
    }
</style>