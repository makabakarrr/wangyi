<template>
    <div class="home-menu">
        <!--横向滚动 -->
        <div id="nav" class="home-nav">
            <ul class="nav-content" ref="nav">
                <li v-for="(item,index) in navData" :key="index"
                    class="nav-item"
                    ref="navItem"
                    @click="changeActive(index)"
                 >
                    <router-link :class="{active:selectedIndex===index}" to="/home">
                    {{item.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 点击箭头的遮罩层 -->
        <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
            <div class="cover" v-show="isShow">
                <div class="cover-content">
                    <h4>全部频道</h4>
                    <div class="cover-list">
                        <li v-for="(item,index) in navData"
                        :key="index" to=""
                        class="cover-item"
                        :class="{active: selectedIndex === index}"
                        @click="changeActive(index)"
                        >
                            <router-link to="">{{item.name}}</router-link>
                        </li>
                    </div>
                </div>
            </div>
        </transition>
        <!-- 箭头 -->
        <div class="unfold">
            <span @click="changeIsShow">
                <img src="../../../../assets/home/unfold.png" :class="{active:isShow}">
            </span>
        </div>
    </div>
</template>

<script>
import Nav from '../../../../components/Nav';
import BScroll from 'better-scroll';
export default {
    name:"home-menu",
    props:{
        navData:Array
    },
    data() {
        return {
            isShow:false,
            selectedIndex:0,
            li_list:[],
            distance:0,
            scroll:null,
            oldIndex:0
        }
    },
    components:{
        [Nav.name]:Nav
    },
    methods: {
        changeIsShow(){
            this.isShow = !this.isShow;
        },
        changeActive(index){
            this.selectedIndex = index;
            this.li_list = this.$refs.navItem;
            //将距离清零
           
            if(index-this.oldIndex >= 0){
                for(var i=this.oldIndex; i<index;i++){
                    this.distance += this.li_list[i].offsetWidth;

                }
                this.scroll.scrollBy(-this.distance,0,200);
            }else{
                for(var i=index-1; i>=0;i--){
                    this.distance += this.li_list[i].offsetWidth;
                }
                this.scroll.scrollTo(-this.distance,0,200);
            }
        
            
            this.oldIndex = index;
            this.distance = 0;
        }
    },
     mounted() {
         this.scroll = new BScroll('#nav',{
            scrollX:true,
            scrollY:false,
            click:true,
            tap:true
        });
        
    },
}
</script>

<style lang="scss" scoped>
.home-menu{
    width: 100%;
    height: 25px;
    position: absolute;
    top: 44px;
    left: 0;
    padding-right: 42px;
    box-sizing: border-box;
    .home-nav{
        width: 100%;
        background: #fff;
        overflow: hidden;
        .nav-content{
            white-space: nowrap;
            display: inline-block;
            .nav-item{
                display: inline-block;
                padding: 0 6px;
                margin-right: -4px;
                a{
                   color: #333; 
                   padding: 0 6px;
                   line-height: 23px;
                   display: block;
                   height: 23px;
                   &.active{
                        border-bottom: 2px solid #9e0a20;
                        color: #9e0a20;
                    }
                }
            }
            
        }
    }
    .cover{
        position: fixed;/*父级元素使用了绝对定位，cover使用绝对定位不能盖住整个页面*/
        left: 0;
        right: 0;
        top: 44px;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 10;
        .cover-content{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            background: #fff;
            padding: 0 13px;
            box-sizing: border-box;
            h4{
                color: #333;
                line-height: 26px;
                font-weight: normal;
            }
            .cover-list{
                display: flex;
                padding-top: 11px;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: flex-start;
                .cover-item{
                    display: block;
                    width: 64px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    border:1px solid #eee;
                    margin-bottom: 17px;
                    &.active{
                        border-color: #9e0a20;
                        a{
                            color: #9e0a20;
                        }
                    }
                    a{
                        display: block;
                    }
                }
            }
        }
    }
    .unfold{
        width: 42px;
        height: 25px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 30;
        background: #fff;
        span{
            display: block;
            width: 12px;
            height: 12px;
            margin: 6px auto;
            img{
                width: 100%;
                transition: all 200ms;
                &.active{
                    transform: rotate(180deg)
                }
            }
        }
    }
}
</style>
