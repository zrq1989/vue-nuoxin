<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./../../../../assets/img/F142CDFB2F176E427F3BF80D762387C3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="./../../../../assets/img/190C11E7C165DFA621CA8D1A44DCA0BD.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="./../../../../assets/img/0CFF3A64625CC821CBFC36CA8B0E64E9.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="./../../../../assets/img/341577EF04BDEAA87401FBB48EAEB6C1.jpg" alt="">
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "BanerLunbo",
        mounted () {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay:true,
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplayDisableOnInteraction:false,
            })
        }
    }
</script>

<style scoped>

</style>