<template>
    <div class="global_nav">
       <ul class="nav clear_fix" @click="listClick">
          <li :key="item.id" v-for="item of list"
                :data-index="item.id"
              :class="listindex == item.id?'active':'' "
          >
              <a :data-index="item.id" href="javascript:;">{{ item.title }}</a>
          </li>
       </ul>
    </div>
</template>

<script>
    export default {
        name: "GlobalNav",
        data () {
            return {
                list: [
                    {
                        id: "000",
                        title: "首页"
                    },
                    {
                        id: "001",
                        title: "蛋糕"
                    },
                    {
                        id: "002",
                        title: "吐司"
                    },
                    {
                        id: "003",
                        title: "礼品"
                    },
                    {
                        id: "004",
                        title: "企业专区"
                    },
                    {
                        id: "005",
                        title: "我的诺心"
                    }
                ],
                listindex: "000"
            }
        },
        methods: {
            listClick (e) {
                if (e.target.nodeName === "A") {
                    const index = e.target.getAttribute("data-index")
                    this.listindex = index
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .global_nav {
        height: 20px;
        .nav {
            display: inline-block;
            text-align: center;
            li.active::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background: #f5bdc0;
                left: 0;
                bottom: -24px;
            }
        }
        li {
            font-size: 16px;
            position: relative;
            text-align: center;
            padding: 0 40px;
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
        .clear_fix::after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0;
            zoom: 1;
        }
        clear: both;
        padding: 24px 0;
        position: relative;
        text-align: center;
        font-size: 0;
    }
</style>