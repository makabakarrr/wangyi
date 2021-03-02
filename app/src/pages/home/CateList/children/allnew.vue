<template>
    <div class="newCatelist-allnew catelist-mod">
        <!-- 标题 -->
        <div class="mod-title">
            <h2>全部新品</h2>
        </div>
        <!-- 导航 -->
        <div class="allnew-nav">
            <ul class="nav-list">
                <li v-for=" item in navArr " :key="item.id" class="nav-item">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <!-- 内容 -->
        <div class="content-tips">
            <p>本期新品</p>
        </div>
        <goods-list :goodsData="allnewData.itemList" class="allnew-content"></goods-list>
    </div>
</template>

<script>
import List from './goodList';
export default {
    name:"catelist-allnew",
    props:{
        allnewData:Object
    },
    components:{
        [List.name]:List
    },
    data() {
        return {
            navArr:[
                {id:1,name:"综合"},
                {id:2,name:"价格"},
                {id:3,name:"分类"},
                {id:4,name:"制造商"}
            ]
        }
    },
    
}
</script>

<style lang="scss">
.newCatelist-allnew{
    
    .allnew-nav{
        width: 100%;
        height: 34px;
        line-height: 34px;
        background-color: #fafafa;
        border-bottom: 1px solid #d9d9d9;
        .nav-list{
            display: flex;
            .nav-item{
                flex: 1;
                text-align: center;
            }
        }

    }
    .content-tips{
        width: 100%;
        box-sizing: border-box;
        padding-left: 13px;
        height: 38px;
        display: flex;
        align-items: center;
        border-top: 1px solid #d9d9d9;
        p{
            line-height: 14px;
            position: relative;
            border-left: 4px solid #b4282d;
            padding-left: 5px;
        }
    }
    .allnew-content{
        padding: 0 8px;
        box-sizing: border-box;
    }
}
</style>
