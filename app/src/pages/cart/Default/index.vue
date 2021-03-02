<template>
    <div class="cart page">
        <div class="cart-header">
            <div class="cart-header-content">
                <p>购物车</p>
                <router-link to="">
                    领券
                </router-link>
            </div>
        </div>

        <div class="cart-policy">
            <ul class="policy-list">
                <li class="policy-item">
                    <i></i>
                    <span>30天无忧退货</span>
                </li>
                <li class="policy-item">
                    <i></i>
                    <span>48小时快速退款</span>
                </li>
                <li class="policy-item">
                    <i></i>
                    <span>满88元免邮费</span>
                </li>
            </ul>
        </div>

        <div class="cart-cover">
            <div class="cover-txt">去添加点什么吧</div>
            <div class="cover-btn">
                <router-link to="/mine">
                    登录
                </router-link>
            </div>
        </div>


        <div class="content">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app .cart.page{
    background: #f4f4f4;
    height: 100%;
    .cart-header{
        width: 100%;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        .cart-header-content{
            height: 44px;
            line-height: 44px;
            width: 95%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            p{
                font-size: 18px;
            }
            a{
                font-size: 12px;
                color: #B4282D;
            }
        }
    }
    .cart-policy{
        height: 30px;
        width: 100%;
        background: #eee;
        color: #333;
        position: absolute;
        top: 44px;
        left: 0;
        z-index: 50;
        .policy-list{
            width: 95%;
            margin:  0 auto;
            display: flex;
            justify-content: space-between;
            .policy-item{
                i{
                    display: inline-block;
                    width: 5px;
                    height: 5PX;
                    background: url(../../../assets/cart/policy-bg.png);
                    margin-right: 3px;
                    vertical-align: middle;
                    background-size: 100% 100%;
                }
                font-size: 10px;
                line-height: 30px;
            }
        }
    }
    
    .cart-cover{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 49px;
        background: transparent url(../../../assets/cart/car.png) center center no-repeat;
        z-index: 30;
        background-size: 33% auto;
        .cover-txt{
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 155px;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .cover-btn{
            position: absolute;
            left: 0;
            bottom: 100px;
            width: 100%;
            a{
                display: block;
                width: 60%;
                height: 40px;
                background: #B4282D;
                color: #fff;
                line-height: 40px;
                margin:  0 auto;
                text-align: center;
            }
        }
    }

}
</style>
