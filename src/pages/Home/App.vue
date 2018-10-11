<template>
  <div id="app" class="container main_home max_width">
   <global-header></global-header>
      <home-content
      ></home-content>
      <global-footer></global-footer>
      <global-add-cart
        v-if="changeOns=='1'?true:false"
        :cardatas="carData"
      ></global-add-cart>
      <global-cover
              v-if="ons=='1'?true:false"
      ></global-cover>
  </div>
</template>

<script>
import GlobalHeader from "../../components/GlobalHeader/GlobalHeader";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import HomeContent from "./components/HomeContent";
import GlobalAddCart from "../../components/GlobalAddCart/GlobalAddCart";
import GlobalCover from "../../components/GlobalCover/GlobalCover";

export default {
  name: 'app',
  components: {
      GlobalCover,
      GlobalAddCart,
      HomeContent,
      GlobalFooter,
      GlobalHeader,
  },
    data () {
      return {
          of: "1",
          GlobalAddCart:"",
          ons: "0",
          carData:[]
      }
    },
    methods: {


    },
    watch: {
      of: function () {

      }
    },
    computed: {

      changeOns () {console.log(this.$store.state)
          return this.ons = this.$store.state.nn;

      }
    }
}
</script>

<style>
    #app{
        min-height: 100%;
        width: 100%;
        position: relative;
        background: #fff;
        z-index: 20;
    }
    .max_width{
        max-width: 1920px;
        margin: auto;
     }
</style>
