<template>
    <section class="middle clear_fix">
        <div class="f_left title">
            <h2 class="no_wrap">
                雪域牛乳芝士蛋糕
            </h2>
            <h3></h3>
        </div>
        <div class="f_right price_wrap text_right">
            <p class="new_price">
                {{ f }}
                <small>¥ </small>
                {{ pic }}
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AddcartDatail",
        data () {
            return {
                pic: '',
                cardata: [],
                value: []
            }
        },
        computed: {
            f: function () {
                if (this.$store.state.carData.length != 0) {
                    const index = this.$store.state.index;
                    const listn = this.$store.state.listindex;
                    this.cardata = this.$store.state.carData;
                    this.value = this.cardata[index].value;
                    this.pic = this.value[listn].pic
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .middle {
        margin: 0 24px;
        padding: 16px 0;
        border-bottom: 1px solid #e4dbcd;
        font-size: 16px;
        .title {
            width: 280px;
        }
        h2 {
            line-height: 24px;
        }
        h3 {
            font-size: 14px;
            color: #949494;
            line-height: 20px;
        }
        .price_wrap {
            color: #ff4001;
            .new_price {
                line-height: 24px;
            }
        }

    }
    .text_right {
        text-align: right !important;
    }
    .f_right {
        float: right !important;
    }
    .no_wrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .f_left {
        float: left !important;
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
    .clear_fix {
        *zoom: 1;
        display: block;
        zoom: 1;
    }
    small {
        font-size: 85%;
    }
</style>