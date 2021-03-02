<template>
<div id="app">
    <transition enter-active-class="slideInRight" leave-active-class="slideOutLeft">
        <router-view></router-view>
    </transition>
    <tab-bar></tab-bar>
</div>
</template>

<script>

import TabBar from './components/TabBar'
export default {
    components:{
        [TabBar.name]:TabBar
    },
    
}
</script>

<style lang="scss">



</style>
