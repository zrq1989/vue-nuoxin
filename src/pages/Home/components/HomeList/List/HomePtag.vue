<template>
    <div class="p_tag">
        <p>
          <span class="tag">
            {{ ptags }}
          </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "HomePtag",
        props: ["ptag"],
        data () {
            return{
                ptags: ""
            }
        },
        mounted () {
            this.ptags = this.ptag
        }
    }
</script>

<style scoped lang="less">
    .p_tag {
        margin-bottom: 10px;
        min-height: 48px;
    p {
        margin-bottom: 4px;
        padding-top: 0;
    }
        span {
            padding: 2px 4px;
            color: #ffffff;
            background: #ff4001;
        }
    }
</style>