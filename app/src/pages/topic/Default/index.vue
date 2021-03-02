<template>
    <div class="topic page">
        <div class="topic-header border-bottom">
            <div class="header-content">
                <app-header>
                    <div class="changeTab">
                        <span :class="{active:selected == 0}" @click="handleChange(0)">发现</span>
                        <span :class="{active:selected == 1}" @click="handleChange(1)">甄选家</span>
                    </div>
                </app-header>
            </div>
        </div>
        <div class="topic-nav border-bottom">
            <ul class="nav-list">
                <li v-for=" (item,index) in tabData " :key="index"
                 class="nav-item" @click="changeSelect(index)">
                    <!-- <router-link to="/topic/cate" :class="{active:selectedIndex===index}">  -->
                        <a href="##" :class="{active:selectedIndex===index}">{{item.tabName}}</a>
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>

        <app-scroll class="topic-scroll">
            <!-- banner图 -->
            <div class="topic-pic">
                <img src="../../../assets/topic/shiwushengxia.jpeg" alt="">
                <img src="../../../assets/topic/shoufa.jpg" alt="">
            </div>
            <!-- 网易员工精选 -->
            <div class="topic-staff topic-mod" v-if="staffData">
                <div class="mod-pic">
                    <img src="../../../assets/topic/staff.jpeg" alt="">
                </div>
                <div class="staff-banner">
                    <div class="big-pic">
                        
                    </div>
                    <div class="small-pic">
                        <ul class="pic-list">
                            <li v-for=" (item,index) in staffData " :key="index" class="pic-item"> 
                                <img :src="item.primaryPicUrl" alt="" :class="{active:showIndex===index}">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--夏日生活幸福感 -->
            <div class="topic-hapiness topic-mod">
                <div class="hapness-top mod-pic">
                    <img src="../../../assets/topic/hapiness.jpeg" alt="">
                </div>
                <div class="hapiness-mod" v-for=" (item,index) in hapiness " :key="index">
                    <div class="hapiness-mod-top">
                        <img :src="imgArr[index]" alt="">
                    </div>
                    <div class="hapiness-content" :style="{background:colorArr[index]}">
                        <li v-for=" (val,i) in 3 " :key="i" class="hapiness-item mod-item">
                            <router-link to="">
                                <div class="pro-pic">
                                    <img v-lazy="item.goodsList[i].primaryPicUrl" alt="">
                                </div>
                                <p class="pro-name">{{item.goodsList[i].name}}</p>
                                <div class="pro-tag">
                                    <span v-for=" (tagItem,index) in item.goodsList[i].itemTagList " 
                                    :key="index" :class="{off:tagItem.type==2,fresh:tagItem.type===3,over:tagItem.type===0}">
                                        {{tagItem.name}}
                                    </span>
                                </div>
                                <div class="pro-price ">
                                    <span class="active-price">￥<i>{{item.goodsList[i].retailPrice}}</i></span>
                                    <span class="old-price" v-if="item.goodsList[i].retailPrice !== item.goodsList[i].yxRetailPrice">￥{{item.goodsList[i].yxRetailPrice}}</span>
                                </div>
                                <div class="buy">
                                    <a href="">立即购买</a>
                                </div>
                            </router-link>
                        </li>
                        <li class="mod-content-more" :style="{background:index===0?'rgb(71, 121, 83)':index===1?'#d95022':index===2?'#b23d74':'#0f79a1'}">
                            <router-link to="">
                                <p>查看更多<i class="pro-more">></i></p>
                            </router-link>
                        </li>
                    </div>
                </div>
            </div>

            <!-- 七夕浪漫恋爱攻略 -->
            <div class="topic-mod qixi-mod" v-if="girlData.length">
                <div class="qixi-top mod-pic">
                    <img src="../../../assets/topic/qixi.jpeg" alt="">
                </div>
                <topic-mod :data="girlData" :img="girlImg"></topic-mod>
                <topic-mod :data="manData" :img="manImg"></topic-mod>
            </div>
            <!-- 夏季日用品更新 -->
            <div class="topic-mod daily-mod" v-if="dailyData.length">
                <div class="daily-top mod-pic">
                    <img src="../../../assets/topic/kushu.jpeg" alt="">
                </div>
                <topic-mod :data="dailyData" :img="dailyImg"></topic-mod>
                <topic-mod :data="swimData" :img="swimImg"></topic-mod>
            </div>
            <!--美味厨房 -->
            <div class="topic-mod kitchen-mod" v-if="kitchenData.length">
                <div class="kitchen-top mod-pic">
                    <img src="../../../assets/topic/kitchen.jpeg" alt="">
                </div>
                <topic-mod :data="kitchenData" :img="kitchImg"></topic-mod>
                <topic-mod :data="foodData" :img="foodImg"></topic-mod>
            </div>
            <!-- 夏日出游 -->
            <div class="topic-mod travel-mod" v-if="travelData.length">
                <div class="travel-top mod-pic">
                    <img src="../../../assets/topic/travel.jpeg" alt="">
                </div>
                <topic-mod :data="travelData" :img="travelImg"></topic-mod>
            </div>
            <!-- 宅 -->
            <div class="topic-mod bed-mod" v-if="bedData.length">
                <div class="bed-top mod-pic">
                    <img src="../../../assets/topic/bed.jpeg" alt="">
                </div>
                <topic-mod :data="bedData" :img="bedImg"></topic-mod>
                <topic-mod :data="catData" :img="catImg"></topic-mod>
            </div>
            <!-- 严选用户的高光瞬间 -->
            <div class="topic-mod eval-mod" v-if="evalData.length">
                <div class="eval-top mod-pic">
                    <img src="../../../assets/topic/eval.jpeg" alt="">
                </div>
                <eval-mod v-for=" (item,index) in evalData " :key="index" :data="item" class="eval"></eval-mod>
            </div>
        </app-scroll>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import Header from '../../common/header';
import Scroll from '../../../components/Scroll'; 
import Nav from '../../../components/Nav'; 
import {mapState} from 'vuex'

import Mod from './children/mod.vue';
import Eval from './children/evalMod';
export default {
    data() {
        return {
            //存放所有jsonp数据
            arr:[],
            selected:0,
            selectedIndex:0,
            showIndex:0,
            staffData:[],//网易员工精选模块的数据
            hapiness:[],//夏日生活幸福感
            manData:[],//男士礼物精选
            girlData:[],//七夕女士礼物大赏
            looksData:[],/* 恋爱季穿搭圣经 */
            dailyData:[],/* 夏季日用品更换时间表 */
            swimData:[],/* 夏日游泳攻略 */
            kitchenData:[],/* 夏日无汗厨房 */
            foodData:[],/* 打开冰箱就是美食街 */
            travelData:[],/* 旅行中派大用场 */
            bedData:[],/* 床品购置指南 */
            catData:[],/* 铲屎官的省心夏日 */
            imgArr:[
                "/img/topic/50.png",
                "/img/topic/duanhuowang.png",
                "/img/topic/huigou.png",
                "/img/topic/180.png"
            ],
            colorArr:[
                "#95d0a2","#ff9d7d","#ed8ab9","#7ac7e3"
            ],
            girlImg:"/img/topic/girl.jpg",
            manImg:"/img/topic/man.jpg",
            dailyImg:"/img/topic/daily.jpg",
            swimImg:"/img/topic/swim.jpg",
            kitchImg:"/img/topic/wuhan.jpg",
            foodImg:"/img/topic/food.jpg",
            travelImg:"/img/topic/lvxing.jpg",
            bedImg:"/img/topic/chuang.jpg",
            catImg:"/img/topic/cat.jpg"
        }
    },
    components:{
        [Header.name]:Header,
        [Scroll.name]:Scroll,
        [Nav.name]:Nav,
        [Scroll.name]:Scroll,
        [Mod.name]:Mod,
        [Eval.name]:Eval
    },
    computed: {
        //严选用户评价 tab数据
        ...mapState({
            evalData:state=>state.topic.evalData,
            tabData:state=>state.topic.tabList
        }),
    },
    methods: {
        //jsonp回调
        jsonp(json){
            console.log(1);
        },
        //获取初始化数据
        getInitData(){
            this.$store.dispatch('topic/requestTabData');
            this.$store.dispatch('topic/requestEvalData')
        },
        //改变 发现甄选家的状态
        handleChange(i){
            this.selected = i;
            console.log(this.staffData,this.hapiness,this.girlData);
        },
        //点击切换导航条的样式
        changeSelect(i){
            this.selectedIndex = i;
        },
        benner(){
            this.showIndex++;
            if(this.showIndex==8){
                this.showIndex = 0;
            }
            if(this.showIndex>3&&this.showIndex<6){
                this.scroll2.scrollTo(20,0);
            }
        }
        
    },
    created() {
        //请求jsonp数据
        /*jsonp获取了12个数据，存入arr数组，不能根据arr的下标类提取对应的值，下标跟objArr的顺序不一致
        * 提取数据的方法：等待arr存放好所有数据，这样效率很慢，性能差
        * 监听arr,当他的长度等于12时，遍历arr,
        * 如果子元素的长度为4,说明是夏日生活幸福感的数据
        * 如果长度不为4，那么长度肯定为1，再遍历这个子元素，根据groupId来判断是哪个的数据 groupId是唯一的 
        */
        let objArr = [
            {   //员工精选
                groupIds:15909,
                _actid_stat:21815,
                _:1564653139987,
                callback:this.jsonp
            },
            {   //夏日生活幸福感
                groupIds:decodeURIComponent('16146%2C10959%2C11078%2C15399'),
                unduplicate:false,
                _:1564653140020,
                callback:this.jsonp
            },
            {/* 男士礼物精选 */
                groupIds:16136,
                unduplicate:false,
                _:1564653141008,
                callback:this.jsonp
            },
            {  //七夕女士礼物大赏
                groupIds:16135,
                unduplicate:false,
                _:1564653141005,
                callback:this.jsonp
            },

            {    /* 恋爱季穿搭圣经 */
                groupIds:15879,
                unduplicate:false,
                _:1564653141010,
                callback:this.jsonp
            },
            {    /* 夏季日用品更换时间表 */
                groupIds:15904,
                unduplicate:false,
                _:1564653141012,
                callback:this.jsonp
            },
            {    /* 夏日游泳攻略 */
                groupIds:15907,
                unduplicate:false,
                _:1564653141015,
                callback:this.jsonp
            },
            {    /* 夏日无汗厨房 */
                groupIds:15898,
                unduplicate:false,
                _:1564653141019,
                callback:this.jsonp
            },
            {    /* 打开冰箱就是美食街 */
                groupIds:15905,
                unduplicate:false,
                _:1564653141027,
                callback:this.jsonp
            },
            {    /* 旅行中派大用场 */
                groupIds:15538,
                unduplicate:false,
                _:1564653141029,
                callback:this.jsonp
            },
            {    /* 床品购置指南 */
                groupIds:15935,
                unduplicate:false,
                _:1564653141032,
                callback:this.jsonp
            },
            {    /* 铲屎官的省心夏日 */
                groupIds:15908,
                unduplicate:false,
                _:1564653141036,
                callback:this.jsonp
            }
        ]

        for(var i=0,len=objArr.length;i<len;i++){
            this.$jsonp('https://goods.you.163.com/web/getGroups.do',objArr[i]).then(res => {
            　　this.arr.push(res.result);
            }).catch(err => {
            　　console.log(err)
            })
        }
        //Ajax数据
        this.getInitData();
    },
    mounted() {
        let scroll1 = new BScroll('.topic-nav',{
            scrollX:true,
            scrollY:false,
            click:true,
            tap:true,
        });
    },
    watch: {
        arr:function(val,oldVal){
            if(val.length === 12){
                console.log(val);
                val.forEach((item,index)=>{
                    if(item.length === 4){
                        this.hapiness = item.map(({goodsList})=>({goodsList}));
                    }else{
                        item.forEach((val,i)=>{
                            switch(val.groupId){
                                case 15909:
                                    this.staffData = val.goodsList;
                                    break;
                                case 16135:
                                    this.girlData = val.goodsList;
                                    break;
                                case 16136:
                                    this.manData = val.goodsList;
                                    break;
                                case 15904:
                                    this.dailyData = val.goodsList;
                                    break;
                                case 15907:
                                    this.swimData = val.goodsList;
                                    break;
                                case 15898:
                                    this.kitchenData = val.goodsList;
                                    break;
                                case 15905:
                                    this.foodData = val.goodsList;
                                    break;
                                case 15538:
                                    this.travelData = val.goodsList;
                                    break;
                                case 15935:
                                    this.bedData = val.goodsList;
                                    break;
                                case 15908:
                                    this.catData = val.goodsList;
                                    break;
                                default:
                                    break;
                            }
                        })
                    }
                })
            }
        },
        staffData:function(val,oldVal){
            if(val.length){
                let scroll2 = new BScroll('.small-pic',{
                    scrollX:true,
                    scrollY:false,
                    click:true,
                    tap:true,
                });
                setInterval(this.banner,1000);
            }
        }
    },
    updated() {
    },
}
</script>

<style lang="scss">
.border-top::before, .border-topbottom::before, .border-topleft::before, .border-topright::before{
    border: 1px solid #eee;
}
#app .topic.page{
    background: #ededed;
    overflow: hidden;
    .topic-header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        background: #fff;
        .header-content{
            width: 95%;
            height: 44px;
            margin: 0 auto;
            .changeTab{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: transparent;
                z-index: 50;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    color: #7f7f7f;
                    font-weight: bold;
                    font-size: 14px;
                    padding: 0 8px;
                    &.active{
                        color: #b4282d;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    .topic-nav{
        width: 100%;
        height: 32px;
        background: #fff;
        position: absolute;
        top: 44px;
        left: 0;
        overflow: hidden;
        .nav-list{
            display: inline-block;
            white-space: nowrap;
            .nav-item{
                margin: 0 5px;
                display: inline-block;
                a{
                    display: block;
                    height: 30px;
                    padding:  0 2px;
                    font-size: 14px;
                    line-height: 32px;
                    color: #7f7f7f;
                    &.active{
                        color: #b4282d;
                        border-bottom: 2px solid #b4282d;
                    }
                }
            }
        }
    }
    .topic-scroll{
        position: absolute;
        top: 76px;
        bottom: 49px;
        left:0;
        width: 100%;
        .topic-pic{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .topic-mod{
            width: 100%;
            background: #f4feff;
            .mod-pic{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            &.eval-mod{
                background: #fff0e5;
            }
        }
        .staff-banner{
            padding: 9px 0 0 2px;
            width: 100%;
            box-sizing: border-box;
            background: #fff;
            .small-pic{
                width: 100%;
                height: 57px;
                .pic-list{
                    display: inline-block;
                    white-space: nowrap;
                    .pic-item{
                        height: 100%;
                        width: 57px;
                        display: inline-block;
                        margin-right: 5px;
                        img{
                            width: 100%;
                            &.active{
                                background: #dc6c58;
                            }
                        }
                    }
                }
            }
        }
        .hapiness-mod{
            margin-left: 2px;
            padding-top: 7px;
            .hapiness-mod-top{
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
        .hapiness-content{
            width: 100%;
            display: flex;
            padding: 6px 4px;
            box-sizing: border-box;
            height: 188px;
            border-radius: 0 0 8px 8px;
            .hapiness-item{
                flex: 1;
                padding-right: 4px;
                height: 100%;
                a{
                    background: #fff;
                    display: block;
                    width: 100%;
                    height: 100%;

                    .pro-pic{
                        width: 100%;
                        padding-bottom: 100%;
                        position: relative;
                        img{
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }

                    .pro-name{
                        font-size: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 80px;
                        margin: 7px auto 0;
                    }
                    .pro-tag{
                        width:200%;
                        height: 26px;
                        transform: scale(0.5);
                        transform-origin: 0 0 ;
                        text-align: center;
                        span{
                            font-size: 16px;
                            padding: 2px 2px;
                            margin-right: 7px;
                            &.off{
                                color: #e36843;
                                border: 1px solid #e36843; 
                            }
                            &.fresh{
                                color: #e98c29;
                                border:1px solid #f8bc59;
                            }
                            &.over{
                                color: #f28f2d;
                                border: 1px solid #f28f2d;
                            }
                        }
                    }
                    .pro-price{
                        margin-top: -14px;
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
                    .buy{
                        width: 100%;
                        a{
                            display: block;
                            width: 88%;
                            margin:0 auto;
                            color: #fff;
                            text-align: center;
                            line-height: 20px;
                            height: 20px;
                            background-color: #dc4516;
                            border-radius: 10px;
                        }
                    }
                }
               
                
            }
            .mod-content-more{
                width: 40px;
                height: 100%;
                border-radius: 2px;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    p{
                        width: 28px;
                        color: #fff;
                        text-align: center;
                        i{
                            display: block;
                            width: 25px;
                            height: 25px;
                            margin: 4px auto 0;
                            border: 1px solid #fff;
                            text-align: center;
                            line-height: 25px;
                            border-radius: 50%;
                        }
                    }
                }
                
            }
        }
        .eval-mod{
            .eval{
                margin-top: 6px;
                &:first-child{
                    margin-top: 0;
                }
            }
        }
    }

}


</style>
