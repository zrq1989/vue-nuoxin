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
                <home-bun-btn :bunbtn="item.bunbtn"></home-bun-btn>
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
                        imgUrl: require('../../../../../assets/img/list_17073.jpg'),
                        title : "熊抱巧克力吐司（整条）",
                        price: "88",
                        bunbtn: "加入购物车",
                        ptag: "人气明星",
                        active: "acti"
                    },
                    {
                        id: "1",
                        imgUrl: require('../../../../../assets/img/list_17100.jpg'),
                        title : "熊抱原味匠心吐司（整条）",
                        price: "78",
                        bunbtn: "加入购物车",
                        ptag: "金牌吐司",
                        active: "0"
                    },
                    {
                        id: "2",
                        imgUrl: require('../../../../../assets/img/list_16942_o.jpg'),
                        title : "熊抱吐司经典套餐",
                        price: "198",
                        bunbtn: "加入购物车",
                        ptag: "10月底前 198元蛋糕卡可兑换",
                        active: "acti"
                    },
                    {
                        id: "3",
                        imgUrl: require('../../../../../assets/img/list_16936_o.jpg'),
                        title : "熊抱吐司尊享套餐",
                        price: "298",
                        bunbtn: "加入购物车",
                        ptag: "10月底前 298元蛋糕卡可兑换",
                        active: "acti"
                    }
                ],
                active: "acti",
                p_item_new: "p_item_new"
            }
        },
        methods: {
            addList (e) {
                const indexs = e.target.getAttribute("data-index");
                this.active = indexs;
            },
            remList () {
                this.active = "acti"
            }
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
    .p_item_new.active>>>.buy_btn::before {
        background-position:-50px -290px;
    }
</style>