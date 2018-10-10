<template>
    <div class="swiper-container1">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(page, index) of pages"
                   :key="index"
            >
                <div class="comment_item" v-for="item of page"
                    :key="item.id"
                >
                    <figure>
                        <home-imag-warp :txImgUrl="item.txImgUrl"></home-imag-warp>
                        <figcaption>{{ item.tel }}</figcaption>
                    </figure>
                    <div class="comment_content">
                        <p class="text">{{ item.pjcon }}</p>
                        <p class="content_time">{{ item.pjData }}</p>
                        <div class="cake_info">
                            <a href="#">
                                <img style="display: inline" :src="item.bgImgUrl" alt="">
                                <p>{{ item.text }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import HomeImagWarp from "./HomeImagWarp";
    export default {
        name: "BanerLunbo",
        components: {HomeImagWarp},
        mounted () {
            var mySwiper1 = new Swiper('.swiper-container1', {
                autoplay:false,
                loop:false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplayDisableOnInteraction:false,
            })
        },
        computed: {
            pages () {
                const pages = [];
                this.lists.forEach((item, index) =>{
                    let page = Math.floor(index/3)
                    if (!pages[page]){
                        pages[page] = [];
                        pages[page].push(item)
                    } else {
                        pages[page].push(item)
                    }
                } )
                return pages;
            }
        },
        data () {
            return {
                lists: [
                    {
                        id: "0",
                        txImgUrl: require('./../../../../assets/img/F694B23D3C5ACE6BD02CC951DD2A9EEC.png'),
                        pjcon: "口感一如既往的棒。流心有点甜，但是不影响整体口感！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/26931B3F1E24B1C240905A9E6E858EFF.png'),
                        text: "立即购买",
                        tel: "134****2844"
                    },
                    {
                        id: "1",
                        txImgUrl: require('./../../../../assets/img/5503BB28C8E58193D253C50CE57D0B64.png'),
                        pjcon: "好吃66666666",
                        pjData: "2018-09-26",
                        bgImgUrl: require('../../../../assets/img/FAAA4D4FC907999E74482B1A26DAAB1E.png'),
                        text: "立即购买",
                        tel: "138****2856"
                    },
                    {
                        id: "2",
                        txImgUrl: require('./../../../../assets/img/DAF5F3371785E269B4121452B6A7C0B1.png'),
                        pjcon: "蛋糕非常的不错，芝士味浓郁，不甜不腻，家人都喜欢的味道！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/901FF8ECFA19064DE66BDEA23B865D25.png'),
                        text: "立即购买",
                        tel: "139****1234"
                    },
                    {
                        id: "3",
                        txImgUrl: require('./../../../../assets/img/958674FF57F92F7BB104681DAA92431E.png'),
                        pjcon: "口感一如既往的棒。流心有点甜，但是不影响整体口感！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/682E99F638803498E8DC9CC3C1BEDB57.png'),
                        text: "立即购买",
                        tel: "134****2844"
                    },
                    {
                        id: "4",
                        txImgUrl: require('./../../../../assets/img/1717AC16A4D3B2C50C6CDDC56C6E1FCA.png'),
                        pjcon: "好吃66666666",
                        pjData: "2018-09-26",
                        bgImgUrl: require('../../../../assets/img/2746AC55A92E0981690EBE268238B1A3.png'),
                        text: "立即购买",
                        tel: "138****2856"
                    },
                    {
                        id: "5",
                        txImgUrl: require('./../../../../assets/img/87B7DA21DB1DA56DD3EB0E033BF7153A.png'),
                        pjcon: "蛋糕非常的不错，芝士味浓郁，不甜不腻，家人都喜欢的味道！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/F5042FDF3CEEADE235E161A5797A755A.png'),
                        text: "立即购买",
                        tel: "139****1234"
                    },
                    {
                        id: "6",
                        txImgUrl: require('./../../../../assets/img/F694B23D3C5ACE6BD02CC951DD2A9EEC.png'),
                        pjcon: "口感一如既往的棒。流心有点甜，但是不影响整体口感！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/26931B3F1E24B1C240905A9E6E858EFF.png'),
                        text: "立即购买",
                        tel: "134****2844"
                    },
                    {
                        id: "7",
                        txImgUrl: require('./../../../../assets/img/5503BB28C8E58193D253C50CE57D0B64.png'),
                        pjcon: "好吃66666666",
                        pjData: "2018-09-26",
                        bgImgUrl: require('../../../../assets/img/FAAA4D4FC907999E74482B1A26DAAB1E.png'),
                        text: "立即购买",
                        tel: "138****2856"
                    },
                    {
                        id: "8",
                        txImgUrl: require('./../../../../assets/img/DAF5F3371785E269B4121452B6A7C0B1.png'),
                        pjcon: "蛋糕非常的不错，芝士味浓郁，不甜不腻，家人都喜欢的味道！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/901FF8ECFA19064DE66BDEA23B865D25.png'),
                        text: "立即购买",
                        tel: "139****1234"
                    },
                    {
                        id: "9",
                        txImgUrl: require('./../../../../assets/img/F694B23D3C5ACE6BD02CC951DD2A9EEC.png'),
                        pjcon: "口感一如既往的棒。流心有点甜，但是不影响整体口感！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/26931B3F1E24B1C240905A9E6E858EFF.png'),
                        text: "立即购买",
                        tel: "134****2844"
                    },
                    {
                        id: "10",
                        txImgUrl: require('./../../../../assets/img/5503BB28C8E58193D253C50CE57D0B64.png'),
                        pjcon: "好吃66666666",
                        pjData: "2018-09-26",
                        bgImgUrl: require('../../../../assets/img/FAAA4D4FC907999E74482B1A26DAAB1E.png'),
                        text: "立即购买",
                        tel: "138****2856"
                    },
                    {
                        id: "11",
                        txImgUrl: require('./../../../../assets/img/DAF5F3371785E269B4121452B6A7C0B1.png'),
                        pjcon: "蛋糕非常的不错，芝士味浓郁，不甜不腻，家人都喜欢的味道！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/901FF8ECFA19064DE66BDEA23B865D25.png'),
                        text: "立即购买",
                        tel: "139****1234"
                    },
                    {
                        id: "12",
                        txImgUrl: require('./../../../../assets/img/F694B23D3C5ACE6BD02CC951DD2A9EEC.png'),
                        pjcon: "口感一如既往的棒。流心有点甜，但是不影响整体口感！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/26931B3F1E24B1C240905A9E6E858EFF.png'),
                        text: "立即购买",
                        tel: "134****2844"
                    },
                    {
                        id: "13",
                        txImgUrl: require('./../../../../assets/img/5503BB28C8E58193D253C50CE57D0B64.png'),
                        pjcon: "好吃66666666",
                        pjData: "2018-09-26",
                        bgImgUrl: require('../../../../assets/img/FAAA4D4FC907999E74482B1A26DAAB1E.png'),
                        text: "立即购买",
                        tel: "138****2856"
                    },
                    {
                        id: "14",
                        txImgUrl: require('./../../../../assets/img/DAF5F3371785E269B4121452B6A7C0B1.png'),
                        pjcon: "蛋糕非常的不错，芝士味浓郁，不甜不腻，家人都喜欢的味道！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/901FF8ECFA19064DE66BDEA23B865D25.png'),
                        text: "立即购买",
                        tel: "139****1234"
                    },
                    {
                        id: "15",
                        txImgUrl: require('./../../../../assets/img/F694B23D3C5ACE6BD02CC951DD2A9EEC.png'),
                        pjcon: "口感一如既往的棒。流心有点甜，但是不影响整体口感！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/26931B3F1E24B1C240905A9E6E858EFF.png'),
                        text: "立即购买",
                        tel: "134****2844"
                    },
                    {
                        id: "16",
                        txImgUrl: require('./../../../../assets/img/5503BB28C8E58193D253C50CE57D0B64.png'),
                        pjcon: "好吃66666666",
                        pjData: "2018-09-26",
                        bgImgUrl: require('../../../../assets/img/FAAA4D4FC907999E74482B1A26DAAB1E.png'),
                        text: "立即购买",
                        tel: "138****2856"
                    },
                    {
                        id: "17",
                        txImgUrl: require('./../../../../assets/img/DAF5F3371785E269B4121452B6A7C0B1.png'),
                        pjcon: "蛋糕非常的不错，芝士味浓郁，不甜不腻，家人都喜欢的味道！",
                        pjData: "2018-09-27",
                        bgImgUrl: require('../../../../assets/img/901FF8ECFA19064DE66BDEA23B865D25.png'),
                        text: "立即购买",
                        tel: "139****1234"
                    },
                ],
            }

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">

    .comment_item {
        width: 227px;
        position: relative;
        margin-right: 80px;
        float: left;
        figure {
            height: 100px;
            text-align: center;
        }
        .comment_content {
            position: relative;
            height: 260px;
            padding-top: 60px;
            background: url("../../../../assets/img/comment_bg.png") no-repeat center top;
            .text {
                width: 158px;
                height: 108px;
                overflow: hidden;
                line-height: 18px;
                margin: 0 auto;
            }
            .content_time {
                width: 158px;
                margin: 0 auto 18px;
                text-align: right;
                color: #9c9c9c;
                font-size: 12px;
            }
            .cake_info {
                text-align: center;
                height: 124px;
                position: relative;
                img {
                    position: relative;
                }
                p {
                    position: absolute;
                    width: 100%;
                    height: 20px;
                    left: 0;
                    bottom: 0;
                    line-height: 20px;
                }
            }
        }
    }
    .comment_item:nth-last-child(1) {
        margin-right: 0px!important;
    }
    .swiper-container1 {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
</style>