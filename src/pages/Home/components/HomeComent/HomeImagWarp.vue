<template>
    <div class="img_wrap">
        <img :src="txImgUrls" alt="">
    </div>
</template>

<script>
    export default {
        name: "HomeImagWarp",
        props: ["txImgUrl"],
        data () {
            return {
                txImgUrls:""
            }
        },
        mounted () {
            this.txImgUrls = this.txImgUrl
        }
    }
</script>

<style scoped lang="less">
    .img_wrap {
        width: 68px;
        height: 68px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        margin: 0 auto 6px;
        img {
            max-height: 100%;
            max-width: none;
            position: absolute;
            margin: auto;
            top: -1000px;
            right: -1000px;
            bottom: -1000px;
            left: -1000px;
        }
    }
    .img_wrap {
        overflow: hidden;
        position: relative;
    }
</style>