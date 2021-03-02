<template>
    <div class="scroll-wrap" ref="scroll">
        <div class="scroll-content">
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'app-scroll',
    props:{
        config:Object
    },
    //挂载后，确保能操作dom
    //保证操作的是当前页面的wrap
    mounted() {
        let scroll = new BScroll(this.$refs.scroll,{
            ...this.config,
            click:true,
            tap:true
        })
    },
}
</script>

<style>
.scroll-wrap{
    overflow: hidden;
}
</style>
