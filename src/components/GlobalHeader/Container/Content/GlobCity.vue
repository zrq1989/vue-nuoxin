<template>
    <div class="select_city_wrap" >
        <a href="javascript:;" class="select_city">
            <span>
                上海
            </span>
        </a>
        <a href="javascript:;" class="address_check_link">
            查询地址是否可配送
        </a>
    </div>
</template>

<script>
    export default {
        name: "GlobCity"
    }
</script>

<style scoped lang="less">
    .select_city_wrap {
        position: absolute;
        left: 64px;
        top: 24px;
        height: 24px;
        line-height: 24px;
        padding-left: 32px;
        font-size: 12px;
    }
    .select_city {
        position: relative;
        padding-left: 32px;
        font-size: 12px;
    }
    .select_city::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("./../../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -280px -200px;
        left: 0;
    }
    .address_check_link {
        color: #949494;
        margin-left: 4px;
    }
</style>