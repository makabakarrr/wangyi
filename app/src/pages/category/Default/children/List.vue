<template>
    <div class="category-list">
        <div class="category-banner">
            <!-- 在只有一张banner图的时候使用img，多张图的时候使用swiper -->
            <img :src="bannerData[0].picUrl" alt="" v-if="isShow">
            <app-swiper :bannerData="bannerData" v-else>
                <swiper-item v-for="(item,index) in bannerData" :key="index">
                    <img :src="item.picUrl"/>
                </swiper-item>
            </app-swiper>
        </div>
        <div class="category-content">
            <div class="list-container" v-for=" (val,i) in listData" :key="i">
                <div class="list-title" v-if="val.name">
                    <h3>{{val.name}}</h3>
                </div>
                <ul class="list-con">
                    <li v-for=" (item,index) in val.categoryList " 
                    :key="index" class="list-item"
                    @click="handleClick(item.id,item.categoryType)">
                        <router-link to="/category/detail">
                            <div class="list-pic">
                                <img v-lazy="item.wapBannerUrl" alt="">
                            </div>
                            <div class="list-desc">
                                {{item.name}}
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from '../../../../components/Swiper';
import SwiperItem from '../../../../components/Swiper-item';
import {mapState,mapMutations} from 'vuex';
export default {
    name:"category-list",
    props:{
        listData:Array,
        bannerData:Array
    },
    components:{
        [Swiper.name]:Swiper,
        [SwiperItem.name]:SwiperItem
    },
    computed: {
        isShow(){
            return this.bannerData.length==1?true:false;
        }
    },
    methods: {
        ...mapMutations({
            modifyType:'category/modifyCategoryType',
            modifyId:'category/modifySubcategoryId'
        }),
        handleClick(a,b){
            this.modifyId(a);
            this.modifyType(b);
        }
    },
}
</script>

<style lang="scss">
.category-list{
   width: 100%;
   .category-banner{
       width: 100%;
       margin-bottom: 1rem;
       padding-top: 1rem;
       img{
           width: 100%;
       }
   }

    .category-content{
        width: 100%;
        .list-container{
            width: 100%;
            margin-bottom: 10px;
            .list-title{
                margin-bottom: 10px;
                padding-bottom: 3px;
                border-bottom: 1px solid #eee;
                h3{
                    font-size: 12px;
                    line-height: 17px;
                }
            }
            .list-con{
                display: flex;
                flex-wrap: wrap;
                .list-item{
                    width: 33%;
                    height: 90px;
                    padding-right: 1rem;
                    box-sizing: border-box;
                    .list-pic{
                        width: 100%;
                        img{
                            width: 100%;
                        }
                    }
                    .list-desc{
                        width: 100%;
                        height: 30px;
                        line-height: 1.2rem;
                        text-align: center;
                        font-size: 10px;
                    }
                }
            }
        }
    }
   
}

</style>
