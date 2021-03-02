<template>
    <div class="home-active home-mod">
        <ul class="active-content">
            <li v-for="(item,index) in activeData" :key="index" class="active-item">
                <router-link to="">
                    <div class="title">{{item.title}}</div>
                    <div class="desc">{{item.desc}}</div>
                    <div class="pic">
                        <li v-for=" (v,i) in item.picUrlList " :key="i">
                            <img v-lazy="v" alt="">
                        </li>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"home-active",
    props:{
        activeData:Array
    }
}
</script>

<style lang="scss" scoped>
.home-active{
    margin-top: 8px;
    padding-top: 4px;
    .active-content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .active-item{
            width: 50%;
            padding: 2px 0 0 2px;
            box-sizing: border-box;
            a{
                display: block;
                width: 100%;
                padding: 8px 0 0 8px;
                background: #f5f5f5;
                box-sizing: border-box;
                .title{
                    line-height: 20px;
                }
                .desc{
                    line-height: 15px;
                    color: #7f7f7f;
                    font-size: 10px;
                }
                .pic{
                    width: 100%;
                    display: flex;
                    li{
                        width: 50%;
                        padding-bottom: 50%;
                        position: relative;
                        img{
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }
                }
            }
            
        }
    }
}
</style>
