<template>
    <div class="catelist-header">
        <slot/>
        <div class="header-icon">
            <router-link to="/home" class="header-left"></router-link>
            <span class="header-right">
                <router-link to="/home/search" class="hader-search"></router-link>
                <router-link to="/cart" class="header-cart"></router-link>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:"app-header"
}
</script>

<style lang="scss">
.catelist-header{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .logo{
        display: block;
        width: 73px;
        height: 23px;
        background: url(../../assets/home/logo.png);
        background-size: 100% 100%;
    }
    .header-icon{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            background: url(../../assets/home/catelist.png);
            background-size: 350% auto;
        }
        .header-left{
            display: block;
            width: 20px;
            height: 19px;
            background-position: 0 -30px;
        }
        .header-right{
            display: block;
            width: 64px;
            height: 27px;
            display: flex;
            justify-content: space-between;
            a{
                display: block;
                width: 27px;
                height: 27px;
                background-size: 280% auto;
                background-position: 0px 28px;
                &.header-cart{
                    background-position: 0 0;
                }
            }
        }
    }
}
</style>
