<template>
    <div class="catelist page subpage">
        <div class="newCatelist-top border-bottom">
            <app-header>
                <router-link to="/home" class="logo"></router-link>
            </app-header>
        </div>
        <!-- 获取到数据后再渲染 -->
        <app-scroll class="catelist-content" v-if="cateData">
            <!-- 轮播图 START! -->
            <app-swiper class="catelist-banner">
                <swiper-item v-for=" (item,index) in bannerData " :key="index">
                    <router-link to="" class="pic-link">
                        <img :src="item.picUrl" alt="">
                    </router-link>
                </swiper-item>
            </app-swiper>
            <!-- 轮播图 END！ -->

            <!-- 推荐关注 -->
            <catelist-recommend :recommendData="recommendData"></catelist-recommend>
            
            <!-- 全部新品 -->
            <catelist-allnew :allnewData="allnewData"></catelist-allnew>

            <!-- 众筹上新 -->
            <catelist-raise :raiseData="raiseData"></catelist-raise>

            <!-- 新品放映室 -->
            <catelist-showroom :showroomData="showroomData"></catelist-showroom>

            <!-- 新品上新 -->
            <catelist-updatelist :UpdateList="UpdateList"></catelist-updatelist>
        </app-scroll>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import Scroll from '../../../components/Scroll';
import Swiper from '../../../components/Swiper';
import SwiperItem from '../../../components/Swiper-item';

import Header from '../../common/header';
import Recommend from './children/recommend';
import Allnew from './children/allnew';
import Raise from './children/raise';
import Showroom from './children/showroom';
import Update from './children/updateList';
export default {
    components:{
        [Header.name]:Header,
        [Scroll.name]:Scroll,
        [Swiper.name]:Swiper,
        [SwiperItem.name]:SwiperItem,
        [Recommend.name]:Recommend,
        [Allnew.name]:Allnew,
        [Raise.name]:Raise,
        [Showroom.name]:Showroom,
        [Update.name]:Update
    },
    methods: {
        getInitData(){
            this.$store.dispatch('home/requestCatelistData');
            this.$store.dispatch('home/requestUpdateData');
        }
    },
    created() {
        this.getInitData();
    },
    computed: {
        ...mapState({
            cateData:state=>state.home.catelistData,
            UpdateList:state=>state.home.cateupdateList,
        }),
        bannerData(){
            return this.cateData.newItemAds;
        },
        recommendData(){
            return this.cateData.editorRecommendItems;
        },
        allnewData(){
            return this.cateData.newItems;
        },
        raiseData(){
            return this.cateData.zcItems
        },
        showroomData(){
            return this.cateData.screeningRoom;
        }
    },
}
</script>

<style lang="scss">

#app .page.catelist{
    width: 100%;
    background: #ededed;
}

.newCatelist-top{
        width: 100%;
        height: 44px;
        margin: 0 auto;
        padding: 0 .5333rem;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
    }
    .catelist-content{
        width: 100%;
        position: absolute;
        top: 44px;
        bottom: 0;
        .catelist-banner{
            width: 100%;
            .pic-link{
                display: block;
                background: #ededed;
                height: 170px;
                img{
                    width: 100%;
                }
            }
            
        }
        .swiper-container-horizontal>.swiper-pagination-bullets{
            position: absolute;
            bottom: 20px;
            right: 0;
            left: auto;
            width: 60px;
        }
        .swiper-container .swiper-pagination .swiper-pagination-bullet{
            width: 5px;
            height: 5px;
            border-radius: 50%;
            border: 1px solid #fff;
        }
        .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
            margin: 0 3px 0 0;
        }
        .swiper-container .swiper-pagination .swiper-pagination-bullet-active{
            background: url(../../../assets/home/banner-bg.png);
            background-size: 100% 100%;
            opacity: 1;
            border:none;
            height: 7px;
        }
    }

.catelist-mod{
    margin-top: 8px;
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    background: #fff;
    &.newCatelist-recommend{
        margin-top: 0;
    }
    &.newCatelist-allnew,&.newCatelist-raise,&.newCatelist-showroom{
        padding: 0;
    }
    .mod-title{
        line-height: 46px;
        text-align: center;
        h2{
            font-weight: normal;
            font-size: 14px;
        }
    }
    .mod-content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .mod-content-item{
            width: 50%;
            &:nth-child(2n+1){
                padding-right: 4px;
            }
            &:nth-child(2n){
                padding-left: 4px;
            }
            margin-bottom: 14px;
            box-sizing: border-box;
            position: relative; 
            a{
                display: block;
                width: 100%;
                .item-pic{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
                .item-desc{
                    width: 100%;
                    background: #F1ECE2;
                    padding: 0 4px;
                    box-sizing:border-box;
                    font-size: 10px;
                    color: #9F8A60;
                    line-height: 20px;
                }
                .item-name{
                    margin-top: 6px;
                    font-size: 12px;
                    line-height: 17px;
                }
                .item-price{
                    line-height: 18px;
                    color: #b4282d;
                    font-size: 14px;
                }
                .item-tag{
                        width: 150%;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                    span{
                        font-size: 18px;
                        color: #CE2424;
                        background: rgba(255, 255, 255, 0.9);
                        border: 1px solid #CE2424;
                        border-radius: 6px;
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
            &.bigItem{
                width: 100%;
                height: 122px;
                border: 1px solid #d9d9d9;
                padding: 0;
                a{
                    display: flex;
                    justify-content: space-between;
                    height: 100%;
                    .item-pic{
                        height: 100%;
                        width: 120px;
                        position: relative;
                        img{
                            position: absolute;
                            width: 100%;
                            top: 0;
                            left: 0;
                        }
                    }
                    .item-info{
                        flex: 1;
                        padding-left: 7px;
                        display: flex;
                        flex-direction: column;
                        justify-content:center;
                        
                        .item-desc{
                            height: 26px;
                            padding: 0;
                            margin-bottom: 7px;
                            color: #7f7f7f;
                            font-size: 10px;
                            background-color: #fff;
                            width: 129px;
                            line-height: 35px;
                        }
                        .item-name{
                            margin-top: 0;
                            margin-bottom: 3px;
                        }
                    }
                }
            }
        }
        &.recommend-content{
            .mod-content-item{
                &:nth-child(2n){
                    padding-right: 4px;
                    padding-left: 0;
                }
                &:nth-child(2n+1){
                    padding-left: 4px;
                    padding-right: 0;
                }
                &.bigItem{
                    padding:0;
                }
            }
            
        }
        
    }
}





</style>

