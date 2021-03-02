/**
 * 首页的数据和方法 
 */
import {get, post} from '../../request';
import api from '../../request/home/api';

const state ={
    //导航条的数据
    navData:[],
    //轮播图的数据
    bannerData:[],
    //policy数据
    policyData:[],
    //产品分类列表
    productCate:[],
    //新人专享数据
    freshMan:[],
    //品牌直供数据
    brandData:[],
    //类目热销
    hotSaleData:[],
    //人气推荐
    popularData:[],
    //限时购
    limitedData:[],
    //新品首发
    newData:[],
    //活动专区
    activeData:[],
    //底部
    cateData:[],


    //首页请求catelist数据的url
    catelistUrl:"/item/newItem",
    catelistData:null,//数据
    cateupdateList:[],//新品首发页面新品预告数据
}

const mutations = {
    setNavData(state,param){
        state.navData = param;
    },
    setBannerData(state,param){
        state.bannerData = param;
    },
    setPolicyData(state,param){
        state.policyData = param;
    },
    setProductCate(state,param){
        state.productCate = param;
    },
    setFreshData(state,param){
        state.freshMan = param;
    },
    setBrandData(state,param){
        state.brandData = param;
    },
    setHotSaleData(state,param){
        state.hotSaleData = param;
    },
    setPopularData(state,param){
        state.popularData = param;
    },
    setlimitedData(state,param){
        state.limitedData.push(param);
    },
    setNewData(state,param){
        state.newData = param;
    },
    setActiveData(state,param){
        state.activeData = param;
    },
    setCateData(state,param){
        state.cateData = param;
    },

    //修改请求catelist的URL
    modifyCatelistUrl(state,param){
        state.catelistUrl = param;
    },
    //设置catelistData
    setCatelistData(state,param){
        state.catelistData = param;
    },
    //设置新品首发新品预告数据
    setCateUpdateList(state,param){
        state.cateupdateList = param;
    }
}

//异步请求数据
const actions = {
    //请求导航的数据
    async requestNavData(context,param){
        //请求数据
        let res = await get(api.HOME_NAV_CATE);
        //对数据进行过滤，取出需要用的数据
        let result = res.data.map(({id,name})=>({id,name}));
        //数组头部添加 推荐
        result.unshift({id:-1,name:"推荐"})
        //把数据给navData
        context.commit('setNavData',result);
        //console.log('请求到了')
    },
    //请求轮播图数据
    async requestBannerData(context,param){
        let res = await get(api.HOME_BANNER);
        let result = res.data.map(({id,picUrl})=>({id,picUrl}));
        context.commit('setBannerData',result);
    },
    //请求policy数据
    async requestPolicyData(context,param){
        let res = await get(api.HOME_POLICY);
        let result = res.data.map(({icon,desc})=>({icon,desc}));
        context.commit('setPolicyData',result);
    },
    //请求分类列表数据
    async requestProductCate(context,param){
        let res = await get(api.HOME_PRODUCT_CATE);
        let result = res.data.map(({text,picUrl,schemeUrl})=>({text,picUrl,schemeUrl}));
        context.commit('setProductCate',result);
    },
    //请求新人专享数据
    async requestFreshData(context,param){
        let res = await get(api.HOME_FRESHMAN);//返回的是response.data
        // let result = res.data.map(({text,picUrl})=>({text,picUrl}));
        context.commit('setFreshData',res.data);
    },
    //请求品牌直供数据
    async requestBrandData(context,param){
        let res = await get(api.HOME_BRAND_DIRECT);//返回的是response.data
         let result = res.data.map(({floorPrice,name,picUrl})=>({floorPrice,name,picUrl}));
        context.commit('setBrandData',result);
    },
    //请求类目热销数据
    async requestHotSaleData(context,param){
        let res = await get(api.HOME_HOT_SALE);//返回的是response.data
         let result = res.data.map(({categoryName,picUrl})=>({categoryName,picUrl}));
        context.commit('setHotSaleData',result);
    },
    //请求人气推荐数据
    async requestPopularData(context,param){
        let res = await get(api.HOME_POPULAR);//返回的是response.data
         let result = res.data.map(({promTag,showPicUrl,name,simpleDesc,retailPrice,id,itemTagList,productPlace})=>({promTag,showPicUrl,name,simpleDesc,retailPrice,id,itemTagList,productPlace}));
        context.commit('setPopularData',result);
    },
    //请求限时购数据
    async requestLimitedData(context,param){
        let res = await get(api.HOME_LIMITED);//返回的是response.data
        let obj = {};
        obj.remainTime = res.data.remainTime;
        obj.itemList = res.data.itemList;
        //console.log(obj);
        context.commit('setlimitedData',obj);
        
    },
    //请求新品首发数据
    async requestNewData(context,param){
        let res = await get(api.HOME_NEW_ITEM);//返回的是response.data
        let result = res.data.map(({productPlace,promTag,name,itemTagList,listPicUrl,id,retailPrice})=>({productPlace,promTag,name,itemTagList,listPicUrl,id,retailPrice}));
        result.splice(6,2);
        context.commit('setNewData',result);
        
    },
    //请求活动专区数据
    async requestActiveData(context,param){
        let res = await get(api.HOME_ACTIVE_AREA);//返回的是response.data
       //过滤数据
        let newRes = res.data.map(
            ({styleItem})=>{
                var obj= {
                    title:styleItem.title,
                    desc:styleItem.desc,
                    picUrlList:styleItem.picUrlList,
                };
                return obj;
            }
        )
        context.commit('setActiveData',newRes);
    },

    //请求底部分类数据
    async requestCateData(context,param){
        let res = await get(api.HOME_CATE);//返回的是response.data
         let result = res.data.map(({itemList,titlePicUrl})=>({itemList,titlePicUrl}));
        context.commit('setCateData',result);
    },



    //请求首页catelist详情页的数据
    async requestCatelistData(context,param){
        let res = await get(context.state.catelistUrl);
        console.log(res.data);
        context.commit('setCatelistData',res.data);
    },
    //请求新品首发页面底部新品预告数据
    async requestUpdateData(context,param){
        let res = await get(api.CATEGORY_UPDATE_LIST);//返回的是response.data
         let result = res.data;
        context.commit('setCateUpdateList',result);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}