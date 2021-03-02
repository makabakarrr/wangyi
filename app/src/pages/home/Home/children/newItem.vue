<template>
    <div class="home-new home-mod">
        <div class="new-top mod-top">
            <h3>新品首发</h3>
            <a href="##">更多
            </a>
        </div>
        
        <div class="small-content" id="small-content">
            <div class="small-item" v-for="(item,index) in newData" :key="index">
                <router-link to="">
                    <div class="product-pic">
                        <img v-lazy="item.listPicUrl" alt="">
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
</template>

<script>
export default {
    name:"home-new",
    props:{
        newData:Array
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

<style>
.home-new{
    margin-top: 8px;
}
</style>
