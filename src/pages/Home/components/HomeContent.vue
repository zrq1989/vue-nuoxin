<template>
 <div class="main">
     <section class="banner"> <baner-lunbo></baner-lunbo></section>
     <home-list></home-list>
     <home-imges></home-imges>
     <home-lists></home-lists>
 </div>
</template>

<script>
import BanerLunbo from "./Banner/BanerLunbo";
import HomeList from "./HomeList/HomeList";
import HomeImges from "./HomeImg/HomeImges";
import HomeLists from "./HomeLists/HomeLists";
export default {
  name: 'HomeContent',
    components: {HomeLists, HomeImges, HomeList, BanerLunbo},
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
