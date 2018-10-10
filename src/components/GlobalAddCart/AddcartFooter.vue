<template>
    <footer class="buy_wrap">
        <a href="javascript:;" class="add_cart">
            加入购物车
        </a>
    </footer>
</template>

<script>
    export default {
        name: "AddcartFooter"
    }
</script>

<style scoped lang="less">
    .buy_wrap {
        padding: 22px;
        a {
            display: block;
            width: 192px;
            height: 56px;
            line-height: 56px;
            text-align: center;
            background: #ff4001;
            color: #ffffff;
            margin: auto;
        }
    }
</style>