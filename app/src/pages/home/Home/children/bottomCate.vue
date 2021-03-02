<template>
    <div class="bottom-item" >
        <div class="cate-banner">
            <img :src="data.titlePicUrl" alt="">
        </div>
        <div class="cate-content-wrap" id="cate-content-wrap" ref="cate">
            <ul class="cate-content" id="cate-content">
                <li  v-for=" (v,i) in data.itemList " :key="i" class="cate-item small-item">
                    <router-link to="">
                        <div class="product-pic">
                            <img v-lazy="v.listPicUrl" alt="">
                            <div class="product-place" v-if="v.productPlace">
                                {{v.productPlace}}
                            </div>
                        </div>
                        <div class="product-desc">
                            <p class="desc">{{v.name}}</p>
                            <p class="price">￥{{v.retailPrice}}</p>
                        </div>
                        <div class="product-active">
                            <!-- type为2或5才会显示出name值，为2标志有活动（样式为span的样式），为5标志优惠券（样式为.coupon的样式） -->
                            <span v-for=" (val,i) in v.itemTagList" :key="i" 
                            :class="{coupon: val.type == 5}"
                            v-if="isShow(val)">
                                {{val.name}}
                            </span>
                        </div>
                    </router-link>
                </li>
                <li class="cate-item-more cate-item small-item">
                    <router-link to="">
                        <div class="product-pic" style="margin-bottom:0px">
                            <p>查看更多
                                <i class="item-more"></i>
                            </p>
                        </div>
                        <div class="product-desc">
                            <p class="desc"></p>
                            <p class="price"></p>
                        </div>
                        <div class="product-active">
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"bottom-cate",
    props:{
        data:Object
    },
    mounted() {
        let scroll = new BScroll(this.$refs.cate,{
            scrollX:true,
            scrollY:false,
            click:true,
            tap:true
        })
    },
    computed: {
        isShow(){
            return function(item){
                if(item.type==5||item.type==2){
                    return true;
                }else{
                    return false;
                }
            }
        }
    },
}
</script>

<style lang="scss">
.bottom-item{
        margin-top: 8px;
        .cate-banner{
            width: 100%;
            margin-bottom: 8px;
            img{
                width: 100%;
            }
        }
        #cate-content-wrap{
            #cate-content{
                display: inline-block;
                padding: 0 13px;
                white-space: nowrap;
                .cate-item{
                    width: 85px;
                    display: inline-block;
                    margin-right: 8px;
                    vertical-align: top;
                    a{
                        .product-active{
                            .coupon{
                                border: none;
                                background: url(../../../../assets/home/bg-left.png),url(../../../../assets/home/bg-right.png),url(../../../../assets/home/bg-center.png);
                                background-repeat: no-repeat,no-repeat,repeat-x;
                                background-size: auto 100%,auto 100%,100% 100%;
                                background-position: left center,right center,center center;
                            }
                            
                        }
                    }
                }
                .cate-item-more{
                    background: #f5f5f5;
                    p{
                        position: absolute;
                        top: 40%;
                        left: 15%;
                        .item-more{
                            display: inline-block;
                            width: 6px;
                            height: 10px;
                            background: url(../../../../assets/home/more.png);
                            background-size: 100% 100%;
                        }
                    }
                }
            }
        }
    }
</style>
