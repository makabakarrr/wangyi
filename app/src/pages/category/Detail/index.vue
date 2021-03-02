<template>
    <div class="category-detail page subpage">
         <!-- 头部 -->
        <div class="category-top border-bottom">
            <app-header class="header-content">
                <router-link to="/home" class="logo"></router-link>
            </app-header>
        </div>
        <div class="category-detail-nav border-bottom">
            <ul class="nav-list">
                <li v-for=" (item,index) in navData " :key="index"
                 class="nav-item" @click="changeSelect(index)">
                    <!-- <router-link to="/topic/cate" :class="{active:selectedIndex===index}">  -->
                        <a href="##" :class="{active:selectedIndex===index}">{{item.name}}</a>
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>
        <app-scroll class="category-detail-content" v-if="listData.length">
            <div class="title"><p>{{title.frontName}}</p></div>
            <div class="content">
                <li v-for=" (item,index) in listData " :key="index" class="content-item">
                    <router-link to="">
                        <div class="item-pic">
                            <img v-lazy="item.listPicUrl" alt="">
                            <div class="item-place" v-if="item.productPlace">{{item.productPlace}}</div>
                        </div>
                        <div class="item-active ell">{{item.simpleDesc}}</div>
                        <p class="item-name ell">{{item.name}}</p>
                        <div class="item-price">
                            <span class="price-now">￥{{item.retailPrice}}</span>
                            <span class="price-old">￥{{item.counterPrice}}</span>
                        </div>
                        <div class="item-tag" v-if="item.itemTagList.length">
                            <span v-for=" (val,i) in item.itemTagList " :key="i">
                                {{val.name}}
                            </span>
                        </div>
                    </router-link>
                </li>
            </div> 
        </app-scroll>
    </div>
</template>

<script>

import BScroll from 'better-scroll';


import Header from '../../common/header';
import Scroll from '../../../components/Scroll';


import { mapState } from 'vuex';
export default {
    data() {
        return {
            selectedIndex:0,
            navData:[],
            listData:[],
            title:null
        }
    },
    components:{
        [Header.name]:Header,
        [Scroll.name]:Scroll
    },
    computed: {
        ...mapState({
            detailData:state=>state.category.detailData
        }),
        
    },
    created() {
        this.$store.dispatch('category/requestCateDetailData');
        this.navData = this.detailData.categoryL2List;
        this.title = this.detailData.categoryItems.category;
        this.listData = this.detailData.categoryItems.itemList;
    },
    mounted() {
        let scroll1 = new BScroll('.category-detail-nav',{
            scrollX:true,
            scrollY:false,
            click:true,
            tap:true,
        });
    },
    
    methods: {
        changeSelect(i){
            this.selectedIndex = i;
        },
    },
    destroyed() {
    },
}
</script>

<style scoped lang="scss" scoped>
#app .category-detail.page{
    background: #ededed;
    .category-top{
        position: absolute;
        top: 0;
        left: 0;
        height: 44px;
        width: 100%;
        background: #fafafa;
        .header-content{
            width: 90%;
            margin: 0 auto;
        }
    }
    .category-detail-nav{
        width: 100%;
        height: 28px;
        background: #fff;
        position: absolute;
        top: 44px;
        left: 0;
        overflow: hidden;
        .nav-list{
            display: inline-block;
            white-space: nowrap;
            .nav-item{
                margin: 0 5px;
                display: inline-block;
                a{
                    display: block;
                    height: 26px;
                    padding:  0 2px;
                    font-size: 12px;
                    line-height: 26px;
                    color: #333;
                    &.active{
                        color: #b4282d;
                        border-bottom: 2px solid #b4282d;
                    }
                }
            }
        }
    }
    .category-detail-content{
        width: 100%;
        position: absolute;
        top: 72px;
        left: 0;
        bottom: 0;
        .title{
            line-height: 50px;
            width: 100%;
            padding-top: 8px;
            p{
                text-align: center;
                background: #fff;
                width: 100%;
            }
            
        }
        .content{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            background: #fff;
            .content-item{
                width: 50%;
                box-sizing: border-box;
                &:nth-child(2n+1){
                    padding: 0 4px 0 8px;
                }
                &:nth-child(2n){
                    padding: 0 8px 0 4px;
                }
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    .item-pic{
                        width: 100%;
                        position: relative;
                        img{
                            width: 100%;
                        }
                        .item-place{
                            width: 30px;
                            padding: 6px 0;
                            text-align: center;
                            font-size: 20px;
                            line-height: 17px;
                            color: #b4a078;
                            border: 1px solid #b4a078;
                            background: #f4f4f4;
                            transform: scale(0.5);
                            transform-origin: 0 0;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                        }
                    }
                    .item-active{
                        background: #F1ECE2;
                        color: #9F8A60;
                        line-height: 20px;
                        font-size: 10px;
                        padding-left: 5px;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .item-name{
                        width: 100%;
                        font-size: 12px;
                        line-height: 15px;
                        margin-top: 8px;
                    }
                    .item-price{
                        line-height: 20px;
                        margin: 2px 0;
                        .price-now{
                            color: #b4282d;
                            font-size: 16px;
                        }
                        .price-old{
                            color: #999;
                            font-size: 12px;
                            text-decoration: line-through;
                        }
                    }
                    .item-tag{
                        width: 200%;
                        height: 29px;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                        span{
                            color: #CE2424;
                            background: rgba(255,255,255,.9);
                            border: 1px solid #CE2424;
                            padding: 4px 8px ;
                            border: 1px solid #CE2424;
                            border-radius: 7px;
                            font-size: 18px;
                            margin: 0 6px;
                        }
                    }
                }
            }
        }
    }
}
</style>
