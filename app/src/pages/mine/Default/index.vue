<template>
    <div class="app-login page subpage">
        <div class="login-header">
            <app-header>
                <router-link to="/home" class="logo"></router-link>
            </app-header>
        </div>
        <div class="login-content" v-if="isShow">
            <div class="logo-pic">
                <img src="../../../assets/mine/logo.png" alt="">
            </div>
            <div class="login-phone" @click="changeShow">
                <i></i>
                <span>手机号快捷登录</span>
            </div>
            <div class="login-email">
                <i></i>
                <span>邮箱账号登录</span>
            </div>
        </div>
        <div class="phone-content" v-if="!isShow">
            <div class="logo-pic">
                <img src="../../../assets/mine/logo.png" alt="">
            </div>
            <div class="ipt">
                <div class="ipt-phone">
                     <input type="text" name="phone" id="" placeholder="请输入手机号">
                </div>
                <div class="ipt-psd">
                    <input type="password" name="psd" placeholder="请输入短信验证码">
                    <span>获取验证码</span>
                </div>
                <div class="problem">
                    <p>遇到问题？</p>
                    <span>使用验证码登录</span>
                </div>
                <div class="submit">
                    <button>登录</button>
                </div>
                <div class="login-tips">
                    <input type="checkbox" name="agreement" id="">
                    <span>我同意<a href="##">《服务条款》</a>和<a href="##">《网易隐私政策》</a></span>
                </div>
                <div class="other">
                    <p @click="changeShow">其它登录方式<span class="more"></span></p>
                </div>
            </div>
        </div>
        <div class="email-content" v-if="false">
            <div class="logo-pic">
                <img src="../../../assets/mine/logo.png" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
import Header from '../../common/header';

export default {
    components:{
        [Header.name]:Header
    },
    data() {
        return {
            isShow:true,
        }
    },
    methods: {
        changeShow(){
            this.isShow = !this.isShow;
        }
    },

}
</script>

<style lang="scss">
#app .app-login.page{
     background: #f2f5f4;
     .login-header{
         width: 100%;
         height: 44px;
         padding: 0 8px;
         box-sizing: border-box;
         position: absolute;
         top: 0;
         left: 0;
         background: #fff;
     }
    .login-content,.phone-content,.email-content{
        width: 100%;
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
    }
    .login-content{
        .logo-pic{
             width: 100%;
             padding: 68px 0 98px;
             height: 40px;
             text-align: center;
             img{
                 height: 100%;
                 margin: 0 auto;
             }
        }
        .login-phone,.login-email{
            width: 90%;
            margin: 0 auto;
            color: #DD1A21;
            border: 1px solid #DD1A21;
            text-align: center;
            height: 40px;
            line-height: 40px;
            margin-bottom: 13px;
            border-radius: 2px;
            box-sizing: border-box;
        }
        .login-phone{
            background-color: #DD1A21;
            border: 0 solid #DD1A21;
            color: #fff;
        }
        .login-phone i,.login-email i{
                display: inline-block;
                width: 17px;
                height: 17px;
                background: url(../../../assets/mine/login-methods.png);
                background-size: 100% auto;
                vertical-align: middle;
                margin-right: 6px;
        }
        .login-phone i{
            background-position: 0 -22px;
        }
    }
    .phone-content,.email-content{
        background: #fff;
    }
    .phone-content{
        .logo-pic{
            margin-top: 24px;
            height: 28px;
            margin-bottom: 20px;
            img{
                height: 100%;
                margin: 0 auto;
            }
        }
        .ipt{
            width: 90%;
            margin: 0 auto;
            div{
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                font-size: 14px;
            }
            .other{
                display: block;
                margin-top: 20px;
                text-align: center;
                span{
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background: url(../../../assets/home/more.png) no-repeat;
                    background-size: 100% 100%;
                    background-size: 60% 100%;
                    margin-left: 5px;
                    vertical-align: middle;
                }
            }
        }
        .ipt-phone{
            border-bottom: 1px solid #eee;
            justify-content: flex-start;
            input{
                outline: 0;
                border: 0;
            }
        }
        .ipt-psd{
            border-bottom: 1px solid #eee;
            justify-content: space-between;
            input{
                outline: 0;
                border: 0;
                width: 170px;
            }
            span{
                width: 74px;
                height: 24px;
                line-height: 24px;
                border: 1px solid #999;
                border-radius: 2px;
                text-align: center;
                margin-right: 3px;
            }
        }
        .problem{
            justify-content: space-between;
            p{
                color: #7f7f7f;
            }
            span{
                color: #333
            }
        }
        .submit{
            button{
                display: block;
                width: 100%;
                text-align: center;
                line-height: 40px;
                background: #DD1A21;
                color: #fff;
                border: 0;
                border-radius: 2px;
            }
        }
        .login-tips{
            
            span{
                font-size: 12px;
                margin-left: 6px;
                color: #7f7f7f;
                a{
                    color: #007AFF;
                }
            }
        }
        
    }

}

</style>
