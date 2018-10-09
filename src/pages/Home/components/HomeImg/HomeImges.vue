<template>
    <section class="pub_image max_width">
        <a href="#">
            <img src="./../../../../assets/img/toast.jpg" alt="">
        </a>
    </section>
</template>

<script>
    export default {
        name: "HomeImges"
    }
</script>

<style scoped>
    .max_width {
        width: 100%;
        max-width: 1920px;
        margin: auto;
        position: relative;
    }
    img, object, embed {
        max-width: 100%;
        vertical-align: top;
    }
</style>