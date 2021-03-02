<template>
    <div class="newCatelist-recommend catelist-mod">
        <div class="mod-title">
            <h2>推荐关注</h2>
        </div>
        <div class="recommend-content mod-content">
            <div class="mod-content-item"
                v-for=" (item,index) in recommendData " :key="index"
                :class="{bigItem: index === 0}"
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
                        </div>
                    </div>
                    
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "catelist-recommend",
    props:{
        recommendData:Array
    },
    computed: {
        /* computed内部的函数不能传参，通过闭包来实现传参 */
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

</style>
