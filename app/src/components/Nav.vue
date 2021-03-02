<template>
    <div id="nav">
        <ul class="nav-content">
            <li v-for="(item,index) in navData" :key="index" >
                <router-link to="" class="nav-item">{{item.Tagname}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:"app-nav",
    props:{
        navData:Array,
       /*  selectIndex:Number */
    },
    mounted() {
        let scroll = new BScroll('#nav',{
            scrollX:true,
            scrollY:false,
            click:true,
            tap:true
        })
    },
    methods: {
        /* isActive(index){
            return this.$refs.nav.selectIndex == index
        } */
    },
    computed: {
        
    },
}
</script>

<style>
#nav{
    background: #fff;
    overflow: hidden;
}
.nav-content{
    white-space: nowrap;
    display: inline-block;
    /* 元素的宽度由内容撑开：
    display:inline/inline-block
    position:absolute/fixed
    float:left/right  */
}
.nav-content li{
    display: inline-block;
}
.nav-content li.active{
    border-bottom: 2px solid #b4282d;
    color: #b4282d;
}
.nav-item{
    /* line-height: 23px; */
    padding: 0 12px;
    margin-right: -4px;
    color: #333
}

</style>
