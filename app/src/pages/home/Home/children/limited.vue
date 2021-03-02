<template>
    <div class="home-limited home-mod">
        <div class="limited-top mod-top">
            <h3>限时购</h3>
            <a href="##">更多
            </a>
            <div class="timer">
                <span class="timer-h">{{hours}}</span> :
                <span class="timer-m">{{minutes}}</span> :
                <span class="timer-s">{{seconds}}</span>
            </div>
        </div>
        <ul class="limited-content">
            <li v-for="(item,index) in limitedData[0].itemList" :key="index" class="limited-item">
                <router-link to="">
                    <div class="product-pic">
                        <img v-lazy="item.picUrl" alt="">
                    </div>
                    <div class="product-price">
                        <span class="active-price">￥{{item.activityPrice}}</span>
                        <span class="origin-price">￥{{item.originPrice}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"home-limited",
    props:{
        limitedData:Array
    },
    data() {
        return {
            hours:0,
            minutes:0,
            seconds:0
        }
    },
    methods: {
        countDown(){
            var that = this;
            var resms = that.limitedData[0].remainTime;
            var timer = setInterval(function(){
                resms = resms - 1000;
                that.hours = parseInt(resms / 1000 / 60 / 60);
                that.minutes = parseInt(resms/1000/60%60);
                that.seconds = parseInt(resms/1000%60);
                that.hours = that.hours < 10 ? '0' + that.hours : that.hours;
                that.minutes = that.minutes < 10 ? '0' + that.minutes :that.minutes;
                that.seconds = that.seconds < 10 ? '0' + that.seconds :that.seconds;
            },1000)
        }
    },
    created() {
        
    },
    mounted() {
        //console.log(this.limitedData);
        this.countDown();
    },
}
</script>

<style lang="scss" scoped>
#app .home .home-limited{
    margin-top: 8px;
    padding-bottom: 0;
    padding-right: 4px;
    .limited-top{
        position: relative;
        .timer{
            position: absolute;
            top: 0px;
            left: 60px;
            span{
                line-height: 16px;
                background: #333;
                border-radius: 2px;
                color: #fff;
                padding: 0 2px;
            }
        }
    }
    .limited-content{
        display: flex;
        flex-wrap: wrap;
        .limited-item{
            width: 33%;
            padding: 0 8px 13px 0;
            box-sizing: border-box;
            a{
                display: block;
                width: 100%;
                .product-pic{
                    width: 100%;
                    padding-bottom: 100%;
                    position: relative;
                    margin-bottom: 5px;
                    img{
                        width: 100%;
                        position: absolute;
                        top:0;
                        left: 0;
                        border-radius: 4px;
                        background: #f5f5f5;
                    }
                }
                .product-price{
                    line-height: 18px;
                    height: 18px;
                    .active-price{
                        color:#b4282d;
                    }
                    .origin-price{
                        display: inline-block;
                        color: #7f7f7f;
                        font-size: 18px;
                        line-height: 18px;
                        text-decoration: line-through;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                        position: relative;
                        top: 7px;
                        left: 5px;
                    }
                }
            }
        }
    }
}
</style>
