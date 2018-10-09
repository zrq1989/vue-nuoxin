<template>
  <div id="app" class="container main_home max_width">
   <global-header></global-header>
      <home-content></home-content>
      <global-footer></global-footer>
  </div>
</template>

<script>
import GlobalHeader from "../../components/GlobalHeader/GlobalHeader";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import HomeContent from "./components/HomeContent";

export default {
  name: 'app',
  components: {
      HomeContent,
      GlobalFooter,
      GlobalHeader,
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
