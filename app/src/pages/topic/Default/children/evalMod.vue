<template>
    <div class="eval-submod">
        <div class="eval-top">
            <div class="top-pic">
                <img v-lazy="data.bannerInfo.picUrl" alt="">
            </div>
            <div class="top-desc">
                <h3 class="ell">{{data.itemName}}</h3>
                <div class="eval-tag" v-if="data.itemTag.length">
                    <span>{{data.itemTag[0]}}</span>
                </div>
                <div class="eval-price" :style="{marginTop: data.itemTag.length?'-20px':0}">
                    <span class="price">￥{{data.itemPrice?data.discountPrice:data.itemPrice}}</span>
                    <span class="car"></span>
                </div>
                <div class="small-img">
                    <img v-lazy="data.itemPic" alt="">
                </div>
            </div>
        </div>
        <div class="eval-bottom">
            <div class="avatar">
                <img v-lazy="data.avatar" alt="">
            </div>
            <div class="comment">
                <div class="comment-top">
                    <span class="uname">{{data.nickName}}</span>
                    <span class="date">{{data.commentTime}}</span>
                </div>
                <div class="comment-content">
                    {{data.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"eval-mod",
    props:{
        data:Object
    }
}
</script>

<style lang="scss" scoped>
.eval-submod{
    width: 100%;
    padding: 6px 7px;
    box-sizing: border-box;
    background: #fff;
    .eval-top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .top-pic{
            width: 148px;
            height: 148px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
            }
        }
        .top-desc{
            width: 135px;
            height: 100%;
            h3{
                width: 135px;
                font-weight: 700;
                color: #333;
            }
            .eval-tag{
                width: 200%;
                height: 34px;
                transform: scale(0.5);
                transform-origin: 0 0;
                margin-top: 5px;
                span{
                    padding: 6px;
                    color: #ab0923;
                    border: 1px solid #ab0923;
                    font-size: 18px;
                }
            }
            .eval-price{
                line-height: 27px;
                color: #ab0923;
                font-weight: 700;
                font-size: 16px;
                .car{
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    margin-left: 8px;
                    background: #ab0923 url(../../../../assets/home/catelist.png) no-repeat;
                    background-size:250% auto;
                    border-radius: 50%;
                    vertical-align: middle;
                }
            }
            .small-img{
                width: 78px;
                height: 78px;
                margin-top: 6px;
                img{
                    width: 100%;
                }
            }
        }
    }
    .eval-bottom{
        margin-top: 16px;
        background: #f8f6ef;
        border-radius: 4px;
        position: relative;
        display: flex;
        .avatar{
            width: 50px;
            height: 50px;
            margin: 9px 0 0 4px;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
        .comment{
            flex: 1;
            margin-left: 10px;
            margin-right: 10px;
            .comment-top{
                width: 200%;
                bottom: 1px solid #ddd;
                height: 35px;
                transform: scale(0.5);
                transform-origin: 0 100%;
                border-bottom: 1px solid #999;
                .uname,.date{
                    font-size: 16px;
                    color: #777;
                    margin-right: 20px;
                }
            }
            .comment-content{
                padding-top: 7px;
                font-size: 12px;
                line-height: 17px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }

    }
}
</style>
