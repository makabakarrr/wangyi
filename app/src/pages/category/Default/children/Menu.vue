<template>
    <div class="category-menu">
        <li v-for="(item,index) in menuData" :key="index" @click="handleClick(item.id)" class="menu-item">
            <router-link 
            to="/category" 
            :class="{active:value === item.id}">
                {{item.name}}
            </router-link>
        </li>
    </div>
</template>

<script>
export default {
    name:"category-menu",
    props:{
        menuData:Array,
        value:Number
    },
    methods: {
        handleClick(id){
            this.$emit('input',id);
        }
    },
}
</script>

<style lang="scss">
.category-menu{
    width: 100%;
    padding-top: 17px;
    .menu-item{
        width: 100%;
        line-height: 21px;
        text-align: center;
        font-size: 12px;
        margin-bottom: 17px;
        a{
            display: block;
            &.active{
                color: #ab2b2b;
                position: relative;
                &::before{
                    content: '';
                    display:block;
                    width: 4px;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: #ab2b2b;
                }
            }
        }
        

    }
    
}
</style>
