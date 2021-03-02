<template>
    <div class="search page subpage">
        <!-- 搜索框 -->
        <header class="header">
            <div class="top-search">
                <i class="icon"></i>
                <input type="text" placeholder="人字拖 限时9.9元" v-model="value" @input="showClose" >
                <i class="close" v-show="isShow" @click="closeAction"></i>
            </div>
            <a href="/home" class="goBack">取消</a>
        </header>
        <!-- 热门搜索 -->
        <div class="search-tips" v-show="tipsShow">
            <h5>热门搜索</h5>
            <ul class="tips">
                <li class="tips-item">
                    <router-link to="/home/searchResult">9.9超值专区</router-link>
                </li>
            </ul>
        </div>
        <!-- 输入内容后显示的搜索提示 -->
        <ul class="result">
            <li class="result-item"></li>
        </ul>
    </div>
</template>

<script>
// import Search from '../../../components/Search'
import {Search} from 'vant';
import {mapState} from 'vuex';
export default {
    data() {
        return {
            value:'',
            isShow:false
        }
    },
    components:{
        [Search.name]:Search
    },
    methods: {
        showClose(){
            this.isShow = true;
        },
        closeAction(){
            this.isShow = false;
            this.value = '';
        }
    },
    computed: {
        tipsShow(){
            return !this.isShow;
        }
    },
}
</script>

<style lang="scss" scoped>
#app .search{
    background: #ededed;
    .header{
        padding: 0 8px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .goBack{
            margin-left: 8px;
        }
        .top-search{
            width: 258px;
            height: 24px;
            background: #ededed;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:  0 8px;
            box-sizing: border-box;
            .icon{
                display: block;
                width: 12px;
                height: 12px;
                background: url(../../../assets/home/search.png);
                background-size: 100% 100%;
                margin-right: 8px;
            }
            input{
                outline: 0;
                border: none;
                background: #ededed;
                flex: 1;
                height: 17px;
            }
            .close{
                display: block;
                width: 20px;
                height: 20px;
                background: url(../../../assets/home/close.png) center center;
                background-size: 100% 100%
            }
        }
    }
    .search-tips{
        width: 100%;
        background: #fff;
        min-height: 200px;
        padding:  0 13px 13px;
        box-sizing: border-box;
        h5{
            height: 38px;
            line-height: 38px;
            color: #999;
            font-size: 12px;
            font-weight: normal;
        }
        .tips{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            .tips-item{
                padding: 0 6px;
                line-height: 18px;
                border: 1px solid #666;
                border-radius: 4px;
                color: #333;
            }
        }
    }
    .result-item{
        line-height: 38px;
        color: #333;
        font-size: 14px;
    }
}
</style>
