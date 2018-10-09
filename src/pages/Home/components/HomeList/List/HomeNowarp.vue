<template>
    <a href="#">
        <p class="no_wrap p_name">
            {{ titles }}
        </p>
    </a>
</template>

<script>
    export default {
        name: "HomeNowarp",
        props: ["title"],
        data () {
          return {
              titles: ""
          }
        },
        mounted () {
            this.titles = this.title
        }
    }
</script>

<style scoped>
    .p_name {
        padding: 6px 0;
    }
</style>