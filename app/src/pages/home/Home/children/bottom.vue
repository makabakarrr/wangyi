<template>
    <div class="home-bottom">
        <bottom-cate v-for=" (item,index) in cateData " :key="index" :data="item"/>
    </div>
</template>

<script>
import bottomCate from './bottomCate'
export default {
    name:"home-bottom",
    components:{
        [bottomCate.name]:bottomCate
    },
    props:{
        cateData:Array
    }
}
</script>

<style lang="scss">
.home-bottom{
    background: #fff;
}
</style>
