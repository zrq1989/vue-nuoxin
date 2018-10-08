<template>
    <nav class="global_nav">
        <ul class="nav clear_fix" @click="showList" @mouseover="listShow" @mouseout="listHide">
            <li :class="listindex == item.id?'active':''" v-for="(item, index) of lists"
                :key="item.id"
                :indexs="index"
            >
                <a href="javascript:;"  :data-index="item.id">{{ item.title }}</a>
                <div class="inner_wrap" v-if="item.id == disp"><a href="#" v-for="im of item.cons">{{ im.con }}</a></div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "GlobalNav",
        data () {
            return {
                lists: [
                    {
                        id: "0",
                        title: "首页"
                    },
                    {
                        id: "1",
                        title: "蛋糕"
                    },
                    {
                        id: "2",
                        title: "吐司"
                    },
                    {
                        id: "3",
                        title: "礼品"
                    },
                    {
                        id: "4",
                        title: "企业专区",
                        cons: [
                            {
                                con: "企业采购"
                            },
                            {
                                con: "大客户区"
                            },
                            {
                                con: "福利券区"
                            },
                            {
                                con: "合作专区"
                            },
                            {
                                con: "小食盒区"
                            },
                        ]
                    },
                    {
                        id: "5",
                        title: "我的诺心",
                        cons: [
                            {
                                con: "LECLUB"
                            },
                            {
                                con: "我的订单"
                            },
                            {
                                con: "找回密码"
                            },
                            {
                                con: "礼卡专区"
                            }
                        ]
                    },
                ],
                disp: "",
                listindex: "0"
            }
        },
        methods: {
            showList(e) {
                if (e.target.nodeName == "A") {
                    const index = e.target.getAttribute("data-index");
                    this.listindex = index
                }

            },
            listShow (e) {
                if (e.target.nodeName == "LI") {
                    const index = e.target.getAttribute("indexs");
                    const le = this.lists[index].cons
                    if (le) {
                        this.disp = index
                    }
                }
            },
            listHide(e) {
                this.disp = ""
            }
        }
    }
</script>

<style scoped lang="less">
    .global_nav {
        float: left;
        clear: none;
        padding: 20px 0;
        height: 20px;
        position: relative;
        text-align: center;
        font-size: 0;
        .nav {
            display: inline-block;
            text-align: center;
            a:hover {
                color: #ea9599;
            }
            li {
                padding: 0 22px;
                font-size: 16px;
                position: relative;
                text-align: center;
                height: 20px;
                line-height: 20px;
                float: left;
            }
            li.active > a {
                color: #ea9599;
                position: relative;
                left: 20px;
            }
            li.active > a::before {
                content: '';
                position: absolute;
                width: 14px;
                height: 13px;
                background: url("../../../assets/img/icon_heart.png") no-repeat center;
                left: -24px;
                top: 50%;
                margin-top: -6px;
            }
            li.active::after {
                bottom: -20px;
            }
            li.active::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background: #f5bdc0;
                left: 0;
                bottom: -20px;
            }
            .inner_wrap {
                padding: 10px 0;
                position: absolute;
                width: 100%;
                left: 0;
                background: #ffffff;
                z-index: 2;
                top: 40px;
                box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
                -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
                display: block;
                a {
                    display: block;
                    text-align: center;
                    height: 32px;
                    line-height: 32px;
                }
            }
        }
    }
</style>