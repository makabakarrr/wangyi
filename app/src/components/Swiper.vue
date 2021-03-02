<template>
    <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper">
            <slot/>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    name:"app-swiper",
    methods: {
        update(){
            this.swiper && this.swiper.update();
        }
        
    },
    mounted() {
        this.swiper = new Swiper(this.$refs.banner,{
            pagination:  '.swiper-pagination',
           /*  autoplay:1000 */
        })
    },
    computed: {
        
    },

}
</script>

<style lang="scss">
.swiper-container{
    position: relative;
    .swiper-pagination{
        position: absolute;
        bottom: 5px;
        .swiper-pagination-bullet {
            width: 22px;
            height: 2px;
            border-radius: 1px;
            display: inline-block;
            background: #000;
            opacity: .2;
        }
        .swiper-pagination-bullet-active {
            opacity: .5;
            background: #fff;
        }
    }
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 3px;
}
</style>
