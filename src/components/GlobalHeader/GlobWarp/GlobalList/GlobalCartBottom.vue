<template>
    <div class="cart_bottom">
        <p>共计1件商品</p>
        <p class="total_price">
            ￥
            <strong>298</strong>
        </p>
        <a href="javascript:;">去购物车结算</a>
    </div>
</template>

<script>
    export default {
        name: "GlobalCartBottom"
    }
</script>

<style scoped lang="less">
    .cart_bottom {
        background: #f9f9f9;
        height: 60px;
        position: relative;
        p {
            margin-left: 20px;
            color: #949494;
            padding-top: 10px;
        }
        .total_price {
            line-height: 1;
            padding-top: 0;
            font-size: 14px;
            color: #ff4001;
            strong {
                font-size: 20px;
            }
        }
        a {
            position: absolute;
            width: 120px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            color: #ffffff;
            right: 20px;
            top: 50%;
            margin-top: -17px;
            background: #ff4001;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
        }
    }
</style>