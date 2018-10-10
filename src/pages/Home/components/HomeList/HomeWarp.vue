<template>
    <div class="wrap main_width">
        <homelist-slider></homelist-slider>
        <list-newp
            @cartons="oncart"
        ></list-newp>
        <home-link-warp></home-link-warp>
    </div>
</template>

<script>
    import HomelistSlider from "./HomelistSlider";
    import ListNewp from "./List/ListNewp";
    import HomeLinkWarp from "./HomeLinkWarp";
    export default {
        name: "HomeWarp",
        components: {HomeLinkWarp, ListNewp, HomelistSlider},
        data (){
                return{
                    ons: "",
                    carData: []
                }

        },
        methods: {
            oncart (e, cardata) {
                this.ons = e;
                this.carData = cardata
                this.$emit("onCart",this.ons,cardata);
            }
        },
        watch: {
            ons: function () {

                // this.ons = ""
            }
        }
    }
</script>

<style scoped>
    .main_width {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
</style>