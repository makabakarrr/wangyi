<template>
<div>
    <div class="home page">
        <home-head></home-head>
        <home-menu :navData="navData"></home-menu>

        <app-scroll class="home-content" :config="config">
            <home-banner :bannerData="bannerData"/>
            <home-policy :policyData="policyData"/>
            <home-cate :productCate="productCate"/>
            <home-freah :freshData="freshMan"/>
            <home-brand :brandData="brandData"/>
            <home-hot :hotSaleData="hotSaleData"/>
            <!-- 通过v-if来监听axios请求是否已完成 -->
            <home-popular :popularData="popularData" v-if="popularData.length"/>
            <home-limited :limitedData="limitedData" v-if="limitedData.length"/>
            <home-new :newData="newData" v-if="newData.length" />
            <home-active :activeData="activeData"/>
            <home-bottom v-if="cateData.length" :cateData="cateData"/>
        </app-scroll>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';

import Head from './children/head';
import Menu from './children/menu';
import Banner from './children/banner';
import Policy from './children/policy';
import Cate from './children/cate';
import FreshMan from './children/freshMan';
import Brand from './children/brand';
import Hot from './children/hotSale';
import Popular from './children/popular';
import Limited from './children/limited';
import NewItem from './children/newItem';
import Active from './children/active';
import Bottom from './children/bottom';

import Scroll from '../../../components/Scroll';

export default {
    data() {
        return {
            config:{scrollY:true}
        }
    },
    components:{
        [Head.name]:Head,
        [Menu.name]:Menu,
        [Banner.name]:Banner,
        [Scroll.name]:Scroll,
        [Policy.name]:Policy,
        [Cate.name]:Cate,
        [FreshMan.name]:FreshMan,
        [Brand.name]:Brand,
        [Hot.name]:Hot,
        [Popular.name]:Popular,
        [Limited.name]:Limited,
        [NewItem.name]:NewItem,
        [Active.name]:Active,
        [Bottom.name]:Bottom
    },
    computed: {
        ...mapState({
            navData:state=>state.home.navData,
            bannerData: state=>state.home.bannerData,
            policyData:state=>state.home.policyData,
            productCate:state=>state.home.productCate,
            freshMan:state=>state.home.freshMan,
            brandData:state=>state.home.brandData,
            hotSaleData:state=>state.home.hotSaleData,
            popularData:state=>state.home.popularData,
            limitedData:state=>state.home.limitedData,
            newData:state=>state.home.newData,
            activeData:state=>state.home.activeData,
            cateData:state=>state.home.cateData
        }),
    },
    methods: {
        getInitData(){
            //请求导航的数据
           this.$store.dispatch('home/requestNavData');
           this.$store.dispatch('home/requestBannerData');
           this.$store.dispatch('home/requestPolicyData');
           this.$store.dispatch('home/requestProductCate');
           this.$store.dispatch('home/requestFreshData');
           this.$store.dispatch('home/requestBrandData');
           this.$store.dispatch('home/requestHotSaleData');
           this.$store.dispatch('home/requestPopularData');
           this.$store.dispatch('home/requestLimitedData');
           this.$store.dispatch('home/requestNewData');
           this.$store.dispatch('home/requestActiveData');
           this.$store.dispatch('home/requestCateData');
        }
    },
    created() {
        //获得首页初始化数据
        this.getInitData();
    },
    updated() {
        
    },
    
}
</script>

<style lang="scss">
#app .home{
    background: #ededed;
    .home-content{
        width: 100%;
        position: absolute;
        top: 69px;
        bottom: 49px;
        left: 0;
        
        #small-content{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
        }
        .small-item{
                width: 31%;
                a{
                    display: block;
                    width: 100%;
                    .product-pic{
                        width: 100%;
                        padding-bottom: 100%;
                        margin-bottom: 5px;
                        position: relative;
                        /* 
                        容器的padding 比例值是相对于容器的宽度值来计算的，
                        在宽度不固定的情况下，要实现宽高相等或固定比例，
                        用padding-bottom:*%，即可实现。 */
                        img{
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: #f5f5f5;
                        }
                        .product-place{
                            white-space: normal;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            /* 缩放不会影响left和top的值 */
                            width: 26px;
                            font-size: 18px;
                            line-height: 18px;
                            transform: scale(0.5);
                            transform-origin: 0 0;
                            border: 1px solid #b4a078;
                            color: #b4a078;
                            text-align: center;
                            padding: 6px 0;
                        }
                    }
                    .product-desc{
                        line-height: 15px;
                        position: relative;
                        font-size: 10px;
                        white-space: normal;
                        .price{
                            color: #b4282d;
                        }
                    }
                    .product-active{
                        width: 150%;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                        span{
                            font-size: 18px;
                            color: #CE2424;
                            background: rgba(255,255,255,.9);
                            border: 1px solid #CE2424;
                            border-radius:6px;
                            padding: 0 6px;
                            margin-right: 8px;
                            &.coupon{
                                border: none;
                                background: url(../../../assets/home/bg-left.png),url(../../../assets/home/bg-right.png),url(../../../assets/home/bg-center.png);
                                background-repeat: no-repeat,no-repeat,repeat-x;
                                background-size: auto 100%,auto 100%,100% 100%;
                                background-position: left center,right center,center center;
                            }
                        }
                        
                    }
                }
            }
    }
}
</style>
