<template>
    <div class="goods_detail">
        <h2 class="no_wrap">
            美刀刀蛋糕
            <a href="javascript:;" class="delete_btn"></a>
        </h2>
        <h3>5-8人食</h3>
        <div class="price_wrap">
            <p class="new_price">
                ￥
                <strong>298</strong>
            </p>
            <p class="count">x1</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GlobalGoods"
    }
</script>

<style scoped lang="less">
    .goods_detail {
        position: relative;
        margin-left: 100px;
        height: 90px;
        h2 {
            height: 28px;
            line-height: 28px;
            font-size: 12px;
            padding-right: 28px;
            position: relative;
            .delete_btn {
                position: absolute;
                width: 28px;
                height: 28px;
                right: 0;
                top: 0;
            }
        }
        h3 {
            font-size: 12px;
            color: #949494;
        }
        .no_wrap {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price_wrap {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            strong {
                font-size: 14px;
            }
            .count {
                position: absolute;
                right: 0;
                bottom: 2px;
                color: #949494;
            }
        }
    }
</style>