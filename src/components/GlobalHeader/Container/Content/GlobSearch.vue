<template>
    <div class="search_wrap" style="line-height: 0">
        <p class="input_wrap">
            <input type="text" class="search_input" placeholder="雪域牛乳芝士" value=""/>
        </p>
        <button class="search_btn global_search_btn">搜索</button>
    </div>
</template>

<script>
    export default {
        name: "GlobSearch"
    }
</script>

<style scoped lang="less">
    .search_wrap {
        .input_wrap {
            display: inline-block;
            width: 200px;
            overflow: hidden;
            border-bottom: 1px solid #3e3e3e;
            vertical-align: middle;
            input {
                font-size: 12px;
                width: 200px;
                padding: 2px 4px;
                border: 0;
                outline: 0;
                resize: none;
            }
        }
        button {
            position: relative;
            width: 32px;
            height: 32px;
            vertical-align: middle;
            text-indent: -100000px;
            overflow: hidden;
            z-index: 1;
            background: #fff;
        }
        button::before {
            position: absolute;
            width: 40px;
            height: 40px;
            background: url("./../../../../assets/img/icons.png") center no-repeat;
            background-size: 400px 400px;
            top: 50%;
            margin-top: -20px;
            background-position: -320px -200px;
            content: '';
            left: 50%;
            margin-left: -20px;
        }
    }

</style>