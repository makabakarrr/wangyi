<template>
    <div class="tab-bar border-top">
        <li class="tab-item" v-for="item in tabs" :key="item.id">
            <router-link :to="item.path" class="item-router">
                <span class="pic"></span>
                <span class="name">{{item.name}}</span>
            </router-link>
        </li>
    </div>
</template>

<script>
import { Icon } from 'vant';
import 'vant/lib/icon/local.css';
export default {
    name:"tab-bar",
    data() {
        return {
            tabs:[
                {id:1,name:'首页',iconName:'wap-home',path:'/home'},
                {id:2,name:'分类',iconName:'cluster-o',path:'/category'},
                {id:3,name:'识物',iconName:'photo-o',path:'/topic'},
                {id:4,name:'购物车',iconName:'shopping-cart-o',path:'/cart'},
                {id:5,name:'个人',iconName:'contact',path:'/mine'}
            ]
        }
    },
}
</script>

<style lang="scss">
.tab-bar{
    height: 49px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    .tab-item{
        flex: 1;
        text-align: center;
        line-height: 14px;
        font-size: 12px;
        .item-router{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            .pic{
                width: 20px;
                height: 20px;
                margin: 8px auto 0;
                font-size: 20px;
                background-image: url('../assets/tab/tab.png');
                background-size:  100% auto;
            }
            .name{
                flex: 1;
                
            }
        }
        .item-router.router-link-active{
            color: #ba032d;
        }
        &:nth-of-type(1){
                .pic{
                    background-position: 0 -125px;
                }
            }
            &:nth-of-type(2){
                .pic{
                    background-position: 0 -75px;
                }
            }
            &:nth-of-type(3){
                .pic{
                    background-position: 0 -175px;
                }
            }
            &:nth-of-type(4){
                .pic{
                    background-position: 0 -25px;
                }
            }
            &:nth-of-type(5){
                .pic{
                    background-position: 0 -225px;
                }
            }


        .item-router.router-link-active{
            &:nth-of-type(1){
                .pic{
                    background-position: 0 -100px;
                }
            }
            &:nth-of-type(2){
                .pic{
                    background-position: 0 -75px;
                }
            }
            &:nth-of-type(3){
                .pic{
                    background-position: 0 -175px;
                }
            }
            &:nth-of-type(4){
                .pic{
                    background-position: 0 -25px;
                }
            }
            &:nth-of-type(5){
                .pic{
                    background-position: 0 -225px;
                }
            }
        }
        
    }
}
</style>
