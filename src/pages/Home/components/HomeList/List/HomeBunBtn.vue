<template>
    <a href="javascript:;" class="buy_btn ">
        <span @click="oncart">{{ bunbtns }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </a>
</template>

<script>
    import { mapActions,mapMutations,mapState } from 'vuex'
    export default {
        name: "HomeBunBtn",
        props: ["bunbtn","indexs"],
        data () {
            return {
                bunbtns: "",
                carDatas: [],
                index: ""
            }
        },
        computed: {
            ...mapState(['carData'])
        },
        mounted () {
            this.bunbtns = this.bunbtn;
            this.index = this.indexs
        },
        methods: {
            oncart () {

                this.$http.get("./carJson/carJson.json").then(res=>{
                    return this.$store.dispatch("addData",res.data)
                }).catch(res=>console.log(res))
                let obj = {}
                obj.index = this.index
                obj.n = "1"
               this.$store.dispatch("addIndex",obj)
            }

        }
    }
</script>

<style scoped lang="less">
    .buy_btn {
        color: #ff3500;
        position: relative;
        z-index: 2;
        display: inline-block;
        font-size: 12px;

    }
    .buy_btn::before {

        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: url("../../../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -10px;
        background-position: -10px -290px;
        right: 0;
    }
</style>