<template>
    <div class="home-brand home-mod">
        <div class="brand-top mod-top">
            <h3>品牌制造商直供</h3>
            <a href="##">更多
            </a>
        </div>
        <div class="brand-content">
            <div class="brand-item" v-for="(item,index) in brandData" :key="index">
                <router-link to=""
               :style="{backgroundImage: 'url(' + item.picUrl + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}"
                >
                <div class="brand-name">{{item.name}}</div>
                <div class="floor-price">{{item.floorPrice}}元起</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"home-brand",
    props:{
        brandData:Array
    }
}
</script>

<style lang="scss">
.home-brand{
    margin-bottom: 8px;
    .brand-content{
        width: 100%;
        height: 225px;
        display: flex;
        flex-flow: row wrap;
        .brand-item{
            width: 50%;
            height: 50%;
            padding: 0 2px 2px 0;
            box-sizing: border-box;
            a{
                display: block;
                /* 父级元素不是块元素不会继承宽高 */
                width: 100%;
                height: 100%;
                padding-top: 10px;
                box-sizing: border-box;
                text-align: center;
                .floor-price{
                    line-height: 20px;
                    font-size: 10px;
                    color: #7f7f7f;
                }
            }
        }
    }
}
</style>
