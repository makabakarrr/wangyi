<template>
    <div class="newCatelist-raise catelist-mod">
        <!-- 标题 -->
        <div class="mod-title">
            <h2>众筹上新</h2>
        </div>
        <!-- 内容 -->
        <div class="raise-content">
            <div v-for=" (item,index) in raiseData " :key="index" class="raise-item">
                <div class="raise-left">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="raise-right">
                    <p class="raise-name">{{item.name}}</p>
                    <p class="raise-price">￥<span>{{item.minPrice}}</span>起</p>
                    <div class="raise-progress">
                        <p class="progress-bar"></p>
                        <p class="progress-num">{{item.actualAmountPercent}}%</p>
                    </div>
                    <div class="raise-info">
                        <div class="info-left">
                            <i></i>
                            {{item.actualNum}}人已支持
                        </div>
                        <div class="info-right">支持项目</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"catelist-raise",
    props:{
        raiseData:Array
    }
}
</script>

<style lang="scss" scoped>  
.newCatelist-raise{
    .raise-content{
        .raise-item{
            width: 100%;
            padding: 11px 13px;
            box-sizing: border-box;
            display: flex;
            .raise-left{
                width: 90px;
                margin-right: 20px;
                img{
                    width: 100%;
                }
            }
            .raise-right{
                flex: 1;
                .raise-name{
                    line-height: 20px;
                }
                .raise-price{
                    margin-top: 5px;
                    line-height: 15px;
                    font-size: 10px;
                    color: #F48F18;
                    span{
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
                .raise-progress{
                    height: 17px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .progress-bar{
                        width: 140px;
                        height: 8px;
                        border-radius: 4px;
                        background: #F48F18;
                    }
                    .progress-num{
                        line-height: 17px;
                        color: #F48F18;
                    }
                }
                .raise-info{
                    height: 20px;
                    line-height: 20px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 6px;
                    font-size: 10px;
                    .info-left{
                        i{
                            display: inline-block;
                            width: 9px;
                            height: 9px;
                            background: url(../../../../assets/home/zc.png);
                            background-size: 100% 100%;
                        }
                    }
                    .info-right{
                        line-height: 20px;
                        padding: 0 8px;
                        color: #F48F18;
                        border: .01333rem solid #f48f18;
                    }
                }
            }
        }
    }
}
</style>
