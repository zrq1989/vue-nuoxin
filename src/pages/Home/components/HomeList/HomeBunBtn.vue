<template>
    <a href="#" class="buy_btn ">
        <span>{{ bunbtns }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </a>
</template>

<script>
    export default {
        name: "HomeBunBtn",
        props: ["bunbtn"],
        data () {
            return {
                bunbtns: ""
            }
        },
        mounted () {
            this.bunbtns = this.bunbtn
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
        background: url("../../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -10px;
        background-position: -10px -290px;
        right: 0;
    }
</style>