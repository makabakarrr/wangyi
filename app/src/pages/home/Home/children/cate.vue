<template>
    <div class="home-cate home-mod">

        <ul class="cate-list">
            <li v-for=" (item,index) in productCate " :key="index"
             class="list-item"
             @click="changeUrl(item.schemeUrl)">
             <!-- 使用两个组件分别处理 新品首发和其它类 -->
                <router-link :to=" index==0 ? '/home/catelistNew' :'/home/catelist' ">
                    <img v-lazy="item.picUrl" alt="">
                    <span>{{item.text}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    name:"home-cate",
    props:{
        productCate:Array
    },
    methods: {
        ...mapMutations({
            modifyUrl:'home/modifyCatelistUrl'
        }),
        changeUrl(id){
            let path = id.split('com')[1];
            this.modifyUrl(path);
            console.log(path)
        }
    },

}
</script>

<style lang="scss" scoped>
.home-cate{
    .cate-list{
        display: flex;
        flex-flow: row wrap;
        .list-item{
            width: 20%;
            height: 66px;
            text-align: center;
            margin: 4px 0;
            a{
                display: block;
                img{
                    width: 47px;
                    margin: 0 auto 5px;
                }
                span{
                    margin-top: 4px;
                    font-size: 10px;
                }
            }
            
        }
    }
}
</style>

