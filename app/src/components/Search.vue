<template>
    <div class="com-search">
        <i class="icon"></i>
        <span>{{showTxt}}</span>
    </div>
</template>

<script>
export default {
    name:"app-search",
    props:{
        showTxt:String
    }

}
</script>

<style lang="scss">
/* 宽度不固定，使用的时候设置宽度 */
.com-search{
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    background: #ededed;
    border-radius: 4px;
    color: #666;
    .icon{
        display: block;
        width: 12px;
        height: 12px;
        background: url(../assets/home/search.png);
        background-size: 100% 100%;
        margin-right: 5px;
    }    
}
</style>
