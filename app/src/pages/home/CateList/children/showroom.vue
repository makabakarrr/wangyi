<template>
    <div class="newCatelist-showroom catelist-mod">
        <!-- 标题 -->
        <div class="mod-title">
            <h2>{{showroomData.title}}</h2>
        </div>
        <!-- 内容 -->
        <div class="showroom-content">
            <ul class="showroom-list">
                <li class="showroom-item" 
                v-for=" (item,index) in  showroomData.screeningList" :key="index">
                    <router-link to="">
                        <div class="item-pic">
                            <img v-lazy="item.scenePicUrl" alt="">
                        </div>
                        <div class="item-desc" :style="{background:'#'+item.color}">
                            <p class="title">{{item.title}}</p>
                            <p class="subtitle">“{{item.subtitle}}”</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"catelist-showroom",
    props:{
        showroomData:Object
    },
    data() {
        return {
            config:{
                scrollX:true,
                scrollY:false
            }
        }
    },
    components:{
    },
    mounted() {
        let scroll = new BScroll('.showroom-content',{
            click:true,
            tap:true,
            scrollX:true,
            scrollY:false
        })
    },
    
}
</script>

<style lang="scss">
.newCatelist-showroom{
    .showroom-content{
        width: 100%;
        height: 231px;
        padding-bottom: 12px;
        .showroom-list{
            display:inline-block;
            white-space: nowrap;
            .showroom-item{
                width: 152px;
                display: inline-block;
                margin-left: 10px;
                vertical-align: top;
                .item-pic{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
                .item-desc{
                    padding: 8px 7px;
                    height: 77px;
                    width: 100%;
                    box-sizing: border-box;
                    color: #fff;
                    .title{
                        line-height: 17px;
                    }
                    .subtitle{
                        width: 200%;
                        font-size: 20px;
                        white-space: normal;
                        transform: scale(0.5);
                        transform-origin: 0 0;
                    }
                }
            }
        }
        
    }
}
</style>
