<template>
    <div class="category page">
        <div class="category-top border-bottom">
            <app-search class="cate-search" :showTxt="showTxt"/><em></em>
        </div>
         <div class="category-content" v-if="categoryData">
            <app-scroll class="content-left">
                <category-menu :menuData="menuData" v-model="selected"/>
            </app-scroll>
            <app-scroll class="content-right">
                <category-list :listData="listData" :bannerData="bannerData"/>
            </app-scroll>     
        </div>
    </div>
</template>

<script>
import Scroll from '../../../components/Scroll.vue'
import Search from '../../../components/Search.vue';
import Menu from './children/Menu';
import List from './children/List';

import {mapState} from 'vuex';
export default {
    data() {
        return {
            selected:11
        }
    },
    components:{
        [Search.name]:Search,
        [Scroll.name]:Scroll,
        [Menu.name]:Menu,
        [List.name]:List
    },
    methods: {
        getInitData(){
            this.$store.dispatch('category/requestCateData');
        }
    },
    computed: {
        ...mapState({
            count: state=>state.quantity,
            categoryData:state=>state.category.categoryData
        }),
        //输入框的数据
        showTxt(){
            return "搜索商品 共有"+this.count+"款好物"
        },
        //左侧菜单的数据
        menuData(){
            return this.categoryData.categoryL1List;
        },
        //右侧列表数据
        listData(){
            return this.categoryData.categoryGroupList;
        },
        bannerData(){
            return this.categoryData.currentCategory;
        }

    },
    created() {
        //获取页面初始化数据
        this.getInitData();
    },
    //监听selected的变化，然后改变仓库内部的categoryId
    watch: {
        selected(val,oldVal){
            this.$store.commit('category/modifyCategoryId',val);
            this.getInitData();
            console.log(val);
            console.log(this.$store.state.category.categoryId);
        }
    }
}
</script>

<style lang="scss" scoped>
.category{
    width: 100%;
    background: #fff;
    .category-top{
        padding: 0 .875rem;
        height:3.2rem;
        display: flex;
        align-items: center;
        .cate-search{
            width: 95%;
            margin: 0 auto;
        }
    }
    .category-content{
        width: 100%;
        .content-left{
            width: 22%;
            position: absolute;
            top: 3.2rem;
            left: 0;
            bottom: 49px;
        }
        .content-right{
            position: absolute;
            top: 3.2rem;
            right: 0;
            bottom: 49px;
            width: 78%;
            padding: 0 1rem 0;
            box-sizing: border-box;
        }
    }
    
}
</style>
