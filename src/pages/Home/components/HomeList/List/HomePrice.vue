<template>
    <div class="price_wrap">
        <p class="new_price">
            <small>¥</small>
            {{ prices }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "HomePrice",
        props: ["price"],
        data () {
            return {
                prices: ""
            }
        },
        mounted () {
            this.prices = this.price
        }
    }
</script>

<style scoped lang="less">
    .price_wrap {
        p {
            display: inline-block;
            margin-right: 4px;
            vertical-align: middle;
            small {
                font-size: inherit;
                margin-right: 2px;
            }
        }
    }

</style>