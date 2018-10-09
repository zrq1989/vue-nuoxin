<template>
    <div class="img_wrap">
        <div class="div_img">
            <img class="lazy" :src="srcs" alt="" style="display: block">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeImgWarp",
        props: ["imgurl"],
        data () {
            return {
                srcs:""
            }
        },
        mounted () {
            this.srcs = this.imgurl
        },
        methods: {

        }

    }
</script>

<style scoped>
    .img_wrap {
        width: 260px;
        height: 260px;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
        -o-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        overflow: hidden;
    }
    .div_img img {

        max-height: 100%;
        max-width: 100%;

    }
    .img_wrap img {
        max-height: 100%;
        max-width: none;
        position: absolute;
        margin: auto;
        top: -1000px;
        right: -1000px;
        bottom: -1000px;
        left: -1000px;
    }
</style>