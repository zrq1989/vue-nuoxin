<template>
    <section class="bottom clear_fix">
        <p class="taste no_wrap">口味：雪域口味</p>
        <p class="size has_icon no_wrap">
            约
            <i></i>
            13x13x4cm
        </p>
        <p class="tableware has_icon no_wrap">
            <i></i>
            含5套餐具
        </p>
        <p class="sweet">
            甜度：
            <i class="level_2"></i>
        </p>
        <p class="weight has_icon">
            约
            <i></i>
            450g
        </p>
    </section>
</template>

<script>
    export default {
        name: "AddcartBottom"
    }
</script>

<style scoped lang="less">
    .bottom {
        margin: 0 24px;
        padding: 16px 0;
        border-bottom: 1px solid #e4dbcd;
        p {
            float: left;
            width: 95px;
            height: 32px;
            line-height: 32px;
            position: relative;
            font-size: 12px;
            i {
                top: 50%;
                margin-top: -10px;
            }
        }
        p.taste {
            width: 165px;
        }
        p.has_icon {
            padding-left: 20px;
        }
        .size {
            i {
                position: absolute;
                width: 20px;
                height: 20px;
                background: url("../../../assets/img/icons_1.png") center no-repeat;
                background-position-y: center;
                left: 0;
                background-position: -65px -165px;
            }
        }
        p.has_icon {
            padding-left: 20px;
        }
        .tableware {
            i {
                position: absolute;
                width: 20px;
                height: 20px;
                background: url("../../../assets/img/icons_1.png") center no-repeat;
                left: 0;
                background-position: -115px -165px;
            }
        }
    }
    p.sweet {
        width: 165px;
        .level_2 {
            width: 33px;
        }
    }
    .clear_fix {
        *zoom: 1;
        display: block;
        zoom: 1;
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
    .no_wrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .sweet {
        i {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url("../../../assets/img/icons_1.png") center no-repeat;
            background-position: -206px -164px;
            left: 40px;
        }
    }
    .weight {
        i {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url("../../../assets/img/icons_1.png") center no-repeat;
            left: 0;
            background-position: -165px -165px;
        }
    }
</style>