<template>
    <div class="search-result page subpage">
        <h1>这里是搜索结果页面</h1>
        <router-link to="/home/details" class="com1"> 
            搜索结果-商品
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app .search-result{
    background: lightgreen;
    .com1{
        display: block;
        width: 100px;
        height: 100px;
        background: lightgoldenrodyellow;
        text-align: center;
        margin: 10px;
    }
}
</style>
