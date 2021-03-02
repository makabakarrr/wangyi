<template>
    <div class=" mod-content">
        <div class="mod-content-item"
            v-for=" (item,index) in goodsData " :key="index"
        >
            <router-link to="">
                <div class="item-pic">
                    <img v-lazy="item.listPicUrl" alt="">
                </div>
                <div class="item-info">
                    <div class="item-desc ell">
                        {{item.simpleDesc}}
                    </div>
                    <div class="item-place"></div>
                    <p class="item-name ell">{{item.name}}</p>
                    <p class="item-price">￥{{item.retailPrice}}</p>
                    <div class="item-tag">
                        <span v-for=" (val,i) in item.itemTagList "
                        :class="{coupon: val.type==5}"
                            :key="i"
                        v-if="isShow(val)">{{val.name}}</span>
                        <span v-if="item.status==4">即将上架</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"goods-list",
    props:{
        goodsData:Array
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

</style>
