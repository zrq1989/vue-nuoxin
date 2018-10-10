<template>
    <section class="comment_section">
        <h2>用户评论</h2>
        <baner-lunbo></baner-lunbo>
    </section>
</template>

<script>
    import BanerLunbo from "./BanerLunbo";
    export default {
        name: "HomeComent",
        components: {BanerLunbo}
    }
</script>

<style scoped lang="less">
    .comment_section {
        width: 841px;
        margin: auto;
        position: relative;
        padding-bottom: 20px;
        h2 {
            font-size: 18px;
            font-weight: bold;
            padding: 16px 0 20px;
            text-align: center;
        }
    }
</style>