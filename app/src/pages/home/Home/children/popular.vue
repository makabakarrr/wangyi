<template>
    <div class="home-popular home-mod">
        <div class="popular-top mod-top">
            <h3>人气推荐</h3>
            <a href="##">更多
            </a>
        </div>
        <div class="popular-content">
            <div class="big-item">
                <router-link to="">
                    <div class="big-item-left">
                        <img :src="item1.showPicUrl" alt="">
                    </div>
                    <div class="big-item-right">
                        <div class="big-item-right-content">
                            <div class="right-content-top">
                                {{item1.promTag}}
                            </div>
                            <p class="product-name ell">{{item1.name}}</p>
                            <p class="product-desc">{{item1.simpleDesc}}</p>
                            <p class="product-price">￥{{item1.retailPrice}}</p>
                        </div>
                        <em></em>
                    </div>
                </router-link>
            </div>

            <!-- <div v-for="(item,index) in popularData"></div> -->
            <div class="small-content" id="small-content">
                <div class="small-item" v-for="(item,index) in popularData" :key="index">
                    <router-link to="">
                        <div class="product-pic">
                            <img v-lazy="item.showPicUrl" alt="">
                            <div class="product-place" v-if="item.productPlace">
                                {{item.productPlace}}
                            </div>
                        </div>
                        <div class="product-desc">
                            <span class="desc">{{item.name}}</span>
                            <span class="price">￥{{item.retailPrice}}</span>
                        </div>
                        <div class="product-active">
                            <span v-for=" (val,i) in item.itemTagList" :key="i" 
                            :class="{coupon: val.type == 5}"
                            v-if="isShow(val)">
                                {{val.name}}
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"home-popular",
    props:{
        popularData:Array
    },
    computed: {
         item1(){
             return this.popularData.shift();
         },
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
    mounted() {
       
    },
    
}
</script>

<style lang="scss">
.home-popular{
    margin-top: 8px;
    .popular-content{
        .big-item{
            width: 100%;
            height: 119px;
            margin-bottom: 8px;
            background: #FEF0DF;
            a{
                display: flex;
                align-items: center;
                widows: 100%;
                height:100%;
                .big-item-left{
                    width: 40%;
                    height: 100%;
                    background: url(../../../../assets/home/bg.png);
                    background-size: 100% 100%;
                    img{
                        width: 100%;
                    }
                }
                .big-item-right{
                    flex: 1;
                    .big-item-right-content{
                        width: 150px;
                        height: 68px;
                        margin: 0 auto;
                        .right-content-top{
                                display: inline-block;
                                font-size: 18px;
                                padding: 0 10px;
                                color: #B4282D;
                                background: rgba(255,255,255,.9);
                                border: 1px solid #B4282D;
                                transform: scale(0.5);
                                transform-origin: 0 0;
                                /* 使用transform缩放后原本的位置依然属于自身，可以通过margin来调整
                                    问题：transform缩放和zoom缩放的不同点
                                */
                        }
                        .product-name{
                            line-height: 18px;
                            margin-top: -8px;
                        }
                        .product-desc{
                            line-height: 15px;
                            color: #7f7f7f;
                            font-size: 10px;
                        }
                        .product-price{
                            color: #b4282d;
                            line-height: 18px;
                        }
                    }
                }
            }
        }
        
    }
}
</style>
