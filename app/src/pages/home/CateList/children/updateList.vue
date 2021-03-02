<template>
    <div class="newCatelist-update catelist-mod">
        <!-- 标题 -->
        <div class="mod-title">
            <h2>新品预告</h2>
        </div>
        <!-- 内容 -->
        <goods-list :goodsData="UpdateList" class="update-content"></goods-list>
    </div>
</template>

<script>
import List from './goodList';
export default {
    name:"catelist-updatelist",
    props:{
        UpdateList:Array
    },
    components:{
        [List.name]:List
    }
}
</script>

<style lang="scss">
.newCatelist-update{
    .update-content{
        padding: 0 8px;
        box-sizing: border-box;
    }
}
</style>
