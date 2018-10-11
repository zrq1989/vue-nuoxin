<template>
    <section class="top clear_fix ">{{ f }}
        <a class="pop_item " href="javascript:;"
            v-for="(item, index) in list"
            :key="index"
           :data-index="index"
           @click="tabTogg"
           :class="{'active':index == listIndex}"
        >{{ item.num }}人食</a>
    </section>
</template>

<script>
    export default {
        name: "AddcartMain",
        data () {
            return {
                num: [],
                indes: "",
                list: [],
                cart: [],
                listIndex: '0'
            }
        },
        created() {

        },
        computed: {
            f: function () {
               if (this.$store.state.carData.length != 0 ) {
                    this.cart = this.$store.state.carData;
                   const index = this.$store.state.index;
                   this.list = this.cart[index].nums;
               }
            },

        },
        methods: {
            tabTogg (e) {
                this.listIndex = e.target.getAttribute("data-index")
                this.$store.dispatch('listn', this.listIndex)
            }
        }
    }
</script>

<style scoped lang="less">
    .top {
        background: #f9f9f9;
        a {
            float: left;
            width: 25%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 12px;
        }
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
    a.active {
        background: #ffffff;
    }
</style>