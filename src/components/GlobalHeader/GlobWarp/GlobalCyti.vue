<template>
    <div class="select_city_wrap">
        <a href="#" class="select_city">
            <span class="currentCity">上海</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "GlobalCyti"
    }
</script>

<style scoped>
    .select_city_wrap {
        position: relative;
        display: inline-block;
        left: 0;
        top: 0;
        vertical-align: middle;
        height: 24px;
        line-height: 24px;
        padding-left: 32px;
        font-size: 12px;
    }
    .select_city::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("../../../assets/img/icons.png") center no-repeat;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -280px -200px;
        left: 0;
    }
    .select_city {
        position: relative;
        padding-left: 32px;
        font-size: 12px;
    }

</style>