<template>
    <div class="search_wrap">
        <p class="input_wrap">
            <input placeholder="雪域牛乳芝士" value="" maxlength="50" class="search_input"/>
        </p>
        <button class="search_btn global_search_btn">搜索</button>
    </div>
</template>

<script>
    export default {
        name: "GlobalSearch"
    }
</script>

<style scoped lang="less">
    .search_wrap {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        .input_wrap {
        width: 0;
        }
        input {
                font-size: 12px;
                width: 200px;
                padding: 2px 4px;
            }
       button {
            position: relative;
            width: 32px;
            height: 32px;
            vertical-align: middle;
            text-indent: -100000px;
            overflow: hidden;
            z-index: 1;
        }
        button {
            background: transparent;
        }
        button::before {
            position: absolute;
            width: 40px;
            height: 40px;
            background: url("../../../assets/img/icons.png") center no-repeat;
            background-size: 400px 400px;
            top: 50%;
            margin-top: -20px;
            background-position: -320px -200px;
            content: '';
            left: 50%;
            margin-left: -20px;
        }
    }
    .input_wrap {
        display: inline-block;
        width: 200px;
        overflow: hidden;
        transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        border-bottom: 1px solid #3e3e3e;
        vertical-align: middle;
    }


</style>