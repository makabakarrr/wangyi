<template>
    <div class="home-fresh home-mod">
        <div class="fresh-top">
            <h3>新人专享</h3>
        </div>
        <div class="fresh-content">
            <div class="fresh-left">
                <router-link to="">
                    <h2>新人专享礼包</h2>
                    <div class="pic">
                        <img src="../../../../assets/home/fresh.png" alt="新人专享礼包">
                    </div>
                </router-link>
            </div>
            <div class="fresh-right">
                <div class="right" v-for="(item,index) in freshData" :key="index">
                    <router-link to="">
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle" v-if="item.subtitle">{{item.subTitle}}</div>
                        <div class="tag" v-if="item.tag">{{item.tag}}</div>
                        <div class="recom">
                            <img v-lazy="item.showPicUrl" alt="">
                            <div class="price">
                                <div class="now">{{item.activityPrice}}</div>
                                <div class="origin">{{item.originPrice}}</div>
                            </div>
                        </div>
                        
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"home-freah",
    props:{
        freshData:Array
    }
}
</script>

<style lang="scss" scoped>
.home-fresh{
    margin: 9px 0;
    box-sizing: border-box;
    .fresh-top{
        height: 38px;
        h3{
            font-weight: normal;
            font-family: PingFangSC-Regular;
            line-height: 38px;
            text-align: center;
            position: relative;
            &::before{
                content: "";
                display: block;
                width: 12px;
                height: 3px;
                background: #333;
                position: absolute;
                left: 100px;
                top: 18px;
                transform: scaleY(0.5)
            }
            &::after{
                content: "";
                display: block;
                width: 12px;
                height: 3px;
                background: #333;
                position: absolute;
                right: 100px;
                top: 18px;
                transform: scaleY(0.5)
            }
        }
    }
    .fresh-content{
        width: 100%;
        height: 185px;
        display: flex;
        align-items: stretch;
        .fresh-left{
            flex: 1;
            background: #F9E9CF;
            border-radius: 4px;
            margin-right: 2px;
            h2{
                font-family: PingFangSC-Medium;
                font-size: 14px;
                padding: 13px 0 0 13px;
                color: #333;
                font-weight: normal;
            }
            .pic{
                width: 110px;
                height: 110px;
                margin: 15px auto;
                img{
                    width: 100%;
                }
            }
        }
        .fresh-right{
            flex: 1;
            display: flex;
            flex-direction: column;
            .right{
                border-radius: 4px;
                flex: 1;
                padding: 8px 0 0 13px;
                position: relative;
                background: #FBE2D3;
                margin-bottom: 2px;

                &:nth-child(2){
                    background: #FFECC2;
                }
                a{
                    display: block;
                    .title{
                        font-size: 14px;
                        line-height: 20px;
                    }
                    .subtitle{
                        color: #7F7F7F;
                        font-size: 10px;
                        line-height: 15px;
                    }
                    .tag{
                        width: 104px;
                        height: 28px;
                        line-height: 28px;
                        color: #fff;
                        background: #CBB693;
                        border-radius: 4px;
                        font-size: 18px;
                        text-align: center;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                    }
                    .recom{
                        width: 85px;
                        height: 85px;
                        position: absolute;
                        bottom: 0;
                        right: 0%;
                        img{
                            width: 100%;
                        }
                        .price{
                            width: 68px;
                            height: 60px;
                            padding-top: 8px;
                            position: absolute;
                            top: -15px;
                            right: -5px;
                            background: #F59524;
                            opacity: 0.8;
                            color: #fff;
                            border-radius: 50%;
                            text-align: center;
                            /* 使用缩放对字体进行调整 */
                            transform: scale(0.5);
                            .now{
                                font-size: 20px;
                                line-height: 30px;
                            }
                            .origin{
                                font-size: 18px;
                                line-height: 14px;
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
            
        }
    }
}
</style>
