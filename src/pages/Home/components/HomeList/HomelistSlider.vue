<template>
    <div class="slider clear_fix">
        <a href="#">
            <img src="./../../../../assets/img/6051D1672B034B18AF5EAFFEFD5A7E56.jpg" alt="">
        </a>
        <a href="#">
            <img src="./../../../../assets/img/D7D9B2AC73BB9C130E23F5C997EEDC17.jpg" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "HomelistSlider"
    }
</script>

<style scoped lang="less">
    .slider {
        margin-bottom: 20px;
        a {
            float: left;
        }
        a:first-of-type {
            float: left;
        }
        a:last-of-type {
            float: right;
        }
    }
    img, object, embed {
        max-width: 100%;
        vertical-align: top;
    }
    .clear_fix {
        *zoom: 1;
        display: block;
        zoom: 1;
    }
    .clear_fix::after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
        zoom: 1;
    }
</style>