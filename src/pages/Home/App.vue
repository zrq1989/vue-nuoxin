<template>
  <div id="app" class="container main_home max_width">
   <global-header></global-header>
      <global-footer></global-footer>
  </div>
</template>

<script>
import HelloWorld from './components/NavHeader.vue'
import GlobalHeader from "../../components/GlobalHeader/GlobalHeader";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";

export default {
  name: 'app',
  components: {
      GlobalFooter,
      GlobalHeader,
    HelloWorld
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
