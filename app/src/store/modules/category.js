/* 
*  分类页面的仓库
*/

import {get} from '../../request';
import api from '../../request/category/api';

const state = {
    //默认id 推荐专区：11
    categoryId:11,

    categoryData:null,

    //存放分类详情页url的参数
    subCategoryId:Number,
    categoryType:Number,
    //分类详情页的数据
    detailData:[],
}

const mutations = {
    modifyCategoryId(state,param){
        state.categoryId = param;
    },
    setCategoryData(state,param){
        state.categoryData = param;
    },
    modifyCategoryType(state,param){
        state.categoryType = param;
    },
    modifySubcategoryId(state,param){
        state.subCategoryId = param;
    },
    setDetailData(state,param){
        state.detailData = param
    }
    
}

const actions = {

    /* 这个请求路径不会以/api开头的，需要配置代理 找了好久没想到这个问题 */
    //请求页面的数据
    async requestCateData(context,param){
       // let path = api.CATEGORY_RECOMMAND + String(context.state.categoryId);
       // console.log(path)
        let res = await get(api.CATEGORY_RECOMMAND,{'categoryId':context.state.categoryId});
        let result = {}
        result.categoryL1List = res.data.categoryL1List;
        result.categoryGroupList = res.data.categoryGroupList;
        result.currentCategory = res.data.currentCategory.bannerList;
        context.commit('setCategoryData',result);
    },

    //请求分类详情页的数据
    async requestCateDetailData(context,param){
        let res = await get(api.CATEGORY_DETAIL,{
            'categoryId':context.state.categoryId,
            'subCategoryId':context.state.subCategoryId,
            'categoryType':context.state.categoryType
        });
        let result = {};
        result.categoryL2List = res.data.categoryL2List;
        result.categoryItems = res.data.categoryItems;
        console.log(result);
        context.commit('setDetailData',result);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}