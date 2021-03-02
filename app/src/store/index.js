import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './modules/home';
import category from './modules/category';
import topic from './modules/topic';
import cart from './modules/cart';
import user from './modules/user';

//全局状态
const state ={
    //搜索框的提示文字：商品数量  写的固定值
    quantity: 21549,
}

/**
 * 按页面划分的模块
 */

export default new Vuex.Store({
    state,
    modules:{
        home,
        category,
        topic,
        cart,
        user
    }
})