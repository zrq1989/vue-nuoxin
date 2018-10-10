<template>
 <div class="main">
     <section class="banner"> <baner-lunbo></baner-lunbo></section>
     <home-list
        @cartons="onCart"
     ></home-list>
     <home-imges></home-imges>
     <home-lists></home-lists>
     <home-coment></home-coment>
 </div>
</template>

<script>
import BanerLunbo from "./Banner/BanerLunbo";
import HomeList from "./HomeList/HomeList";
import HomeImges from "./HomeImg/HomeImges";
import HomeLists from "./HomeLists/HomeLists";
import HomeComent from "./HomeComent/HomeComent";
export default {
  name: 'HomeContent',
    components: {HomeComent, HomeLists, HomeImges, HomeList, BanerLunbo},
    data () {
      return {
          ons: "",
          carData: []
      }
    },
    methods: {
        onCart (e, cardata) {
            this.ons = e ;
            this.carData = cardata;
            this.$emit("oncart", this.ons,cardata);
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
    .main {
        background: #ffffff;
        position: relative;
        min-width: 1200px;
    }
    .banner {
        overflow: hidden;
        position: relative;
        min-height: 400px;
    }
</style>
