<template>
    <div class="home-policy">
        <li v-for="(item,index) in policyData" :key="index" class="policy-item">
            <span class="pic"><img v-lazy="item.icon" alt=""></span>
            <span class="desc">{{item.desc}}</span>
        </li>
    </div>
</template>

<script>
export default {
    name:'home-policy',
    props:{
        policyData:Array
    }
}
</script>

<style lang="scss">
.home-policy{
    height: 32px;
    width: 100%;
    padding: 0 13px;
    box-sizing: border-box;
    display: flex;
    background: #fff;
    .policy-item{
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .pic{
            display: block;
            width: 14px;
            height: 14px;
            margin-right: 5px;
            img{
                width: 100%;
            }
        }
        .desc{
            font-size: 10px;
        }
    }
}
</style>
