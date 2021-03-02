<template>
    <div class="hot-sale home-mod">
        <div class="hot-top mod-top">
            <h3>类目热销</h3>
        </div>
        <div class="hot-content">
            <div v-for="(item,index) in hotSaleData" :key="index"
                class="hot-item"
                :class="'item'+index"
            >
                <router-link to="">
                    <div class="hot-item-name">{{item.categoryName}}</div>
                    <div class="hot-item-pic">
                        <img v-lazy="item.picUrl" alt="">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"home-hot",
    props:{
        hotSaleData:Array
    }
}
</script>

<style lang="scss">
.hot-sale{
    padding-bottom: 8px !important;
.hot-content{
    width: 100%;
    height: 251px;
    display: flex;
    flex-wrap: wrap;
    .hot-item{
        width: 25%;
        height: 33%;
        padding: 0 4px 4px 0;
        box-sizing: border-box;
        a{
            display: block;
            width: 100%;
            height: 100%;
            padding-top: 4px;
            box-sizing: border-box;
            text-align: center;
            background: #f5f5f5;
            border-radius: 2px;
            .hot-item-name{
                font-size: 10px;
                line-height: 15px;
            }
            .hot-item-pic{
                width: 51px;
                height: 51px;
                margin: 0 auto;
                img{
                    width: 100%
                }
            }
        }
        &.item0,&.item1{
            width: 50%;
            a{
                position: relative;
               .hot-item-name{
                   font-size: 12px;
                    line-height: 4;
                    padding-left: 10px;
                    text-align: left;
                    position: relative;
                    &::after{
                        content: '';
                        display: block;
                        width: 20px;
                        height: 3px;
                        background: #000;
                        transform: scaleY(0.5);
                        position: absolute;
                        top: 36px;
                        left: 10px;
                    }
               } 
               .hot-item-pic{
                   width: 55%;
                   height: 100%;
                   position: absolute;
                   right: 0;
                   top:0;
               }
            }
        }
        &.item0{
            a{
                 background: #F9F3E4;
            }
           
        }
        &.item1{
            a{  
                background: #EBEFF6;
            }
            
        }
    }
}
}
</style>
