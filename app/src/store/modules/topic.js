import {get} from '../../request';
import api from '../../request/topic/api';

const state = {
    tabList:[],
    //严选用户夏日高光时刻的数据
    evalData:[],
}


const mutations = {
    setTabData(state,param){
        state.tabList = param;
    },
    setEvalData(state,param){
        state.evalData = param;
    }
}

const actions = {
    async requestEvalData(context,param){
        let res = await get(api.TOPIC_EVAL,{topLooks:decodeURIComponent('13170%2C13265%2C12843%2C12852%2C12597%2C12603%2C12487%2C12505%2C12398%2C12432%2C12263%2C11649%2C11601%2C11490%2C11465%2C10957'),_:1564653140014 });
        context.commit('setEvalData',res.data);
    },
    async requestTabData(context,param){
        let res = await get(api.TOPIC_NAV);
        context.commit('setTabData',res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}