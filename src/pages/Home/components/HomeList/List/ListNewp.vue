<template>
    <ul class="p_list_new clear_fix ">
        <li :class="{'p_item_new': 'p_item_new','active': item.id == active}" v-for="(item, index) of imgLists"
            :key="item.id"
            @mouseenter="addList"
            @mouseleave="remList"
            :data-index="item.id"
        >
            <a href="#">
                <home-img-warp :imgurl="item.imgUrl"></home-img-warp>
            </a>
            <div class="p_info">
                <home-nowarp :title="item.title"></home-nowarp>
                <home-ptag :ptag="item.ptag"></home-ptag>
                <home-price :price="item.price"></home-price>
                <home-bun-btn :bunbtn="item.bunbtn"
                              :indexs="item.id"
                ></home-bun-btn>
            </div>
        </li>
    </ul>
</template>

<script>
    import HomeImgWarp from "./HomeImgWarp";
    import HomePtag from "./HomePtag";
    import HomeNowarp from "./HomeNowarp";
    import HomePrice from "./HomePrice";
    import HomeBunBtn from "./HomeBunBtn";
    export default {
        name: "ListNewp",
        components: {HomeBunBtn, HomePrice, HomeNowarp, HomePtag, HomeImgWarp},
        data () {
            return {
                imgLists: [
                    {
                        id: "0",
                        imgUrl: require('../../../../../assets/img/list_10800.jpg'),
                        title : "雪域牛乳芝士蛋糕",
                        price: "198",
                        bunbtn: "加入购物车",
                        ptag: "人气爆款",
                        active: "acti"
                    },
                    {
                        id: "1",
                        imgUrl: require('../../../../../assets/img/list_16196.jpg'),
                        title : "数字蛋糕",
                        price: "198",
                        bunbtn: "加入购物车",
                        ptag: "NEW",
                        active: "0"
                    },
                    {
                        id: "2",
                        imgUrl: require('../../../../../assets/img/list_15474.jpg'),
                        title : "美刀刀蛋糕",
                        price: "298",
                        bunbtn: "加入购物车",
                        ptag: "人气爆款",
                        active: "acti"
                    },
                    {
                        id: "3",
                        imgUrl: require('../../../../../assets/img/list_12287.jpg'),
                        title : "环游世界·秋冬季蛋糕",
                        price: "218",
                        bunbtn: "加入购物车",
                        ptag: "人气爆款",
                        active: "acti"
                    },
                    {
                        id: "4",
                        imgUrl: require('../../../../../assets/img/list_18475.jpg'),
                        title : "小甜点蛋糕",
                        price: "198",
                        bunbtn: "加入购物车",
                        ptag: "HOT",
                        active: "acti"
                    },
                    {
                        id: "5",
                        imgUrl: require('../../../../../assets/img/list_18465_o.jpg'),
                        title : "栗子千层蛋糕",
                        price: "218",
                        bunbtn: "加入购物车",
                        ptag: "人气爆款",
                        active: "acti"
                    },
                    {
                        id: "6",
                        imgUrl: require('../../../../../assets/img/list_12775.jpg'),
                        title : "提拉米苏蛋糕",
                        price: "198",
                        bunbtn: "加入购物车",
                        ptag: "人气爆款",
                        active: "acti"
                    },
                    {
                        id: "7",
                        imgUrl: require('../../../../../assets/img/list_12943.jpg'),
                        title : "诺心花园·秋月蛋糕",
                        price: "218",
                        bunbtn: "加入购物车",
                        ptag: "人气爆款",
                        active: "acti"
                    }
                ],
                active: "acti",
                p_item_new: "p_item_new",
                carData: []
            }
        },
        methods: {
            addList (e) {
                const indexs = e.target.getAttribute("data-index");
                this.active = indexs;
            },
            remList () {
                this.active = "acti"
            },

        },
        watch: {
        }
    }
</script>

<style scoped>
    .clear_fix {
        *zoom: 1;
        display: block;
        zoom: 1;
    }
    .p_item_new {
        position: relative;
        float: left;
        width: 260px;
        height: 402px;
        padding: 19px;
        overflow: hidden;
        background: #ffffff;
        margin: 1px;
        font-size: 14px;
        transition: all 1s ease;
        -moz-transition: all 1s ease;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
    }
    .p_item_new.active {

        background: #FCEDEF;
    }
    .p_item_new>>>img {
        transition: all 1s ease;
        -moz-transition: all 1s ease;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
    }
    .p_item_new.active>>>.buy_btn::before {
        background-position:-50px -290px;
    }
    .p_item_new.active>>>img {
        transform: scale(1.05);
    }
    .p_info {
        font-size: 14px;
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