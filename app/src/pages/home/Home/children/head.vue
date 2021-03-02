<template>
    <div class="home-head header">
        <a href="/home" class="logo"></a>
        <router-link to="/home/search" class="search">
            <app-search class="home-search" :showTxt="showTxt"/>
        </router-link>
        <span to="" class="signUp" @click="handleClick">登录</span>
    </div>
</template>

<script>
// import { Search } from 'vant';
import {mapState} from 'vuex';
import Search from '../../../../components/Search';
import { post } from '../../../../request'
import axios from 'axios'
import CryptoJS from 'crypto-js'
export default {
    name:'home-head',
    components:{
         [Search.name]:Search
    },
    computed: {
        ...mapState({
            count: 'quantity'
        }),
        showTxt(){
            return "搜索商品 共有"+this.count+"款好物"
        }
    },
    methods: {
        formatDate(date) {
            var date = new Date(date);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours()) + ':';
            var mm = (date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()) + ':';
            var ss = (date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds());
            return YY + MM + DD +"T"+hh + mm + ss + 'Z';
        },
        handleClick() {
            // console.log(CryptoJS)
                // 'accessKeySecret': 'h0eNXFH3jdYAxLngheZzpJlSApLGcL',
                var d = new Date()
                console.log(d.getTime()+2*60*100)
            var obj = {
                'AccessKeyId': 'LTAI4FgiWcQbuj1VPAiadgvE',
                'Action': 'QueryProductList',
                'CurrentPage': 1,
                'PageSize': 10,
                'RegionId': 'cn-shanghai',
                'SignatureMethod': 'HMAC-SHA1',
                'SignatureNonce': String(Math.random()),
                'SignatureVersion':'1.0',
                'Timestamp': this.formatDate(d.getTime()+2*60*100),
                'Version': '2018-01-20'
            }
            var arr = []
            for (const k in obj) {
                if (obj.hasOwnProperty(k)) {
                    arr.push(k)
                }
            }
            arr.sort()
            console.log(arr)
            var newObj = {}
            for (const index of arr) {
                newObj[index] = obj[index]
            }
            console.log(newObj)
            var str = ''
            for (const key in newObj) {
                if (newObj.hasOwnProperty(key)) {
                    str += encodeURIComponent(key) + '=' + encodeURIComponent(newObj[key]) + '&'
                }
            }
            str = str.substr(0, str.length-1)
            console.log(str)
            
            var StringToSign = 'POST' + '&' + encodeURIComponent('/')+'&'+ encodeURIComponent(str)
            // var StringToSign = 'GET&%2F&AccessKeyId%3DLTAI4FgiWcQbuj1VPAiadgvE%26Action%3DQueryProductList%26CurrentPage%3D1%26PageSize%3D10%26RegionId%3Dcn-shanghai%26SignatureMethod%3DHMAC-SHA1%26SignatureNonce%3D0.22624427500004263%26SignatureVersion%3D1.0%26Timestamp%3D2020-03-28T06%253A43%253A31Z%26Version%3D2018-01-20'
            console.log(StringToSign)
        //    var StringToSign = 'GET&%2F&AccessKeyId%3Dtestid&Action%3DDescribeRegions&Format%3Djson&SignatureMethod%3DHmac-SHA1&SignatureNonce%3Dd48e931b-90c9-49c7-ac86-a70dd3607c88&SignatureVersion%3D1.0&Timestamp%3D2016-09-27T09%253A08%253A30Z&Version%3D2016-07-14'
            var hash = CryptoJS.HmacSHA1(StringToSign, 'VOoCoSTmQAHxvOQagmbVOeWeF1gbLe&');
            var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
            console.log(hashInBase64)
            newObj['Signature'] = hashInBase64
            
        // var wordArray = CryptoJS.lib.WordArray.create()
        // console.log(wordArray)
        // var i = ''
        // for (const it in newObj) {
        //     if (newObj.hasOwnProperty(it)) {
        //         i += encodeURIComponent(it) + '=' + encodeURIComponent(newObj[it]) + '&'
        //     }
        // }
        // i = i.substr(0, i.length-1)
        // console.log('https://iot.cn-shanghai.aliyuncs.com/?' + i)
        var HTTP = axios.create({
            baseURL:'https://iot.cn-shanghai.aliyuncs.com', //这是基础url
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: [function (data) {
                // Do whatever you want to transform the data
                let ret = ''
                for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                ret = ret.substr(0, ret.length-1)
                return ret
            }]
        })
        
            HTTP.post('',newObj)
            .then(function(response){
                console.log(response.data);
            })

            // console.log('点击')
            // axios.defaults.headers.post['Content-Type'] = 'text/plain'
            // axios.post('https://iot.cn-shanghai.aliyuncs.com', obj, {emulateJSON:true})
            // .then(res =>{
            //     // 注册成功
            //     alert('注册成功!')
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
        }
        /* handleClick() {
            const Core = require('@alicloud/pop-core')
            console.log(Core)
            var client = new Core({
                accessKeyId: 'LTAI4Fd1yvrdKRGR3KGNVkCG',
                accessKeySecret: 'h0eNXFH3jdYAxLngheZzpJlSApLGcL',
                endpoint: 'https://iot.cn-shanghai.aliyuncs.com',
                apiVersion: '2018-01-20'
            });

            var params = {
                "RegionId": "cn-shanghai",
                "PageSize": 1,
                "CurrentPage": 1
            }

            var requestOption = {
            method: 'POST'
            };

            client.request('QueryProductList', params, requestOption).then((result) => {
            console.log(JSON.stringify(result));
            }, (ex) => {
            console.log(ex);
            })
        } */
    },
}
</script>

<style lang="scss" scoped>
.home-head{
    padding: 6px 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    top: 0;left: 0;
    .logo{
        width: 58px;
        height: 17px;
        display: block;
        background: url(../../../../assets/home/logo.png);
        margin-right: 8px;
        background-size: 100% 100%;
    }
    .home-search{
         width: 189px;
    }
    .signUp{
            display: block;
            width: 34px;
            height: 17px;
            line-height: 17px;
            border: 1px solid #c42838;
            border-radius: 4px;
            text-align: center;
            margin-left: 8px;
            font-size: 10px;
            color: #c42838; 
        }
}
</style>
