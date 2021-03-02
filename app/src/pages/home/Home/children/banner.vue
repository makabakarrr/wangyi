<template>
    <div class="home-banner">
        <app-swiper ref="homeSwiper">
            <swiper-item v-for="(item,index) in bannerData" :key="index">
                <img v-lazy="item.picUrl"/>
            </swiper-item>
        </app-swiper>
    </div>
</template>

<script>
import Swiper from '../../../../components/Swiper';
import SwiperItem from '../../../../components/Swiper-item';
export default {
    name:"home-banner",
    props:{
        bannerData:Array
    },
    components:{
        [Swiper.name]:Swiper,
        [SwiperItem.name]:SwiperItem
    },
    updated() {
       // console.log(this.bannerData);
        this.$refs.homeSwiper.update()
    },
}
</script>

<style lang="scss">
.home-banner{
    img{
        width:100%;
        height: 157px;
    }
}
</style>
