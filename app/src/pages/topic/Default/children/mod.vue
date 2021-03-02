<template>
    
        <div class="sub-mod">
            <div class="mod-container">
                <div class="qixi-mod-top mod-top">
                    <img :src="img" alt="">
                </div>
                <div class="qixi-content mod-content">
                    <li v-for=" (val,i) in 3 " :key="i" class="qixi-item mod-item">
                        <router-link to="">
                            <div class="pro-pic">
                                <img v-lazy="data[i].primaryPicUrl" alt="">
                            </div>
                            <p class="pro-name">{{data[i].name}}</p>
                            <div class="mark-down" v-if="reduce(data[i].yxRetailPrice,data[i].retailPrice)">直降<br/>{{reduce(data[i].yxRetailPrice,data[i].retailPrice)}}</div>
                            <div class="pro-price ">
                                <span class="active-price">￥<i>{{data[i].retailPrice}}</i></span>
                                <span class="old-price" v-if="data[i].retailPrice !== data[i].yxRetailPrice">￥{{data[i].yxRetailPrice}}</span>
                            </div>
                            
                        </router-link>
                    </li>
                </div>
            </div>
            <div class="look-more">
                <a href="">查看更多</a>
            </div>
        </div>
</template>

<script>
export default {
    name:"topic-mod",
    props:{
        data:Array,
        img:String
    },
    computed: {
        reduce(){
            return function(a,b){
                 if((Number(a)-Number(b))%1){
                     return (Number(a)-Number(b)).toFixed(1);
                 }else{
                     return Number(a)-Number(b)
                 }
            }
           
        }
    },
}
</script>

<style lang="scss">
.sub-mod{
    width: 100%;
    .mod-container{
        width: 100%;
        background: #f5b376;
        border-radius: 4px;
        padding: 0 4px 4px;
        box-sizing: border-box;
        .mod-top{
            width: 100%;
            background: #f5b376;
            padding-top: 4px;
            padding-bottom: 4px;
            box-sizing: border-box;
            img{
                width: 100%;
                border-radius: 4px;
            }
        }
        .mod-content{
            width: 100%;
            display: flex;
            .mod-item{
                flex: 1;
                padding-right: 4px;
                &:last-child{
                    padding-right: 0;
                }
                box-sizing: border-box;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    background: #fff;
                    position: relative;
                    .pro-pic{
                        width: 100%;
                        padding-bottom: 100%;
                        position: relative;
                        img{
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            border-radius: 4px 4px 0 0;
                        }
                    }

                    .pro-name{
                        font-size: 12px;
                        line-height: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 80px;
                        margin: 0 auto;
                    }
                    .pro-price{
                        line-height: 18px;
                        text-align: center;
                        .active-price{
                            color: #d83535;
                            font-size: 10px;
                            i{
                                font-weight: 700;
                                font-size: 14px;
                                font-style: normal;
                            }
                        }
                        .old-price{
                            color: #9b9b9b;
                            font-size: 10px;
                            text-decoration: line-through;
                        }
                    }
                    .mark-down{
                        position: absolute;
                        width: 56px;
                        height: 56px;
                        border-radius: 50%;
                        background: #c03329;
                        color: #fff;
                        top: 5px;
                        right: -24px;
                        text-align: center;
                        font-size: 18px;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                        padding-top: 6px;
                        box-sizing: border-box;
                    }
                }

            }
        }
    }
    .look-more{
        width: 120px;
        height: 28px;
        line-height: 28px;
        margin: 11px auto 0;
        padding-bottom: 11px;
        a{
            display: block;
            height: 100%;
            background: url(../../../../assets/topic/lookMore.png) no-repeat;
            background-size: 100% 100%;
            color: #fff;
            text-align: center;
        }
    }
    
}
</style>
