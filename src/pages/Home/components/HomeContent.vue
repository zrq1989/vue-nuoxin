<template>
 <div class="main">
     <section class="banner"> <baner-lunbo></baner-lunbo></section>

     <home-list></home-list>
 </div>
</template>

<script>
import BanerLunbo from "./Banner/BanerLunbo";
import HomeList from "./HomeList/HomeList";
export default {
  name: 'HomeContent',
    components: {HomeList, BanerLunbo},
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
