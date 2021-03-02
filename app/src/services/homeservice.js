import axios from 'axios';
import HOME from '../request/home/api';

/* function requestHomeNavData(){
    return new Promise((resolve,reject)=>{
        axios.get(HOME.HOME_NAV_CATE).then(response=>{
            //axios会拦截响应信息response
            if(response.status==200 && response.data.code==0){
                //过滤数据
                let result = response.data;
                resolve(result);
            }else{
                reject('业务逻辑错误')
            }
        }).catch(err=>{
            console.log(err,"请求失败")
        })
    })
} */
/* 使用async await简化代码 */


requestHomeNavData = async()=>{
   //async修饰函数，会把返回值封装成promise对象的结果，所以返回的是一个promise对象，这里就可以不用new promise对象了
   //调用函数可以直接.then().catch()处理结果,
   //在函数内的代码没有报错的情况，promise对象的状态为resolved,参数为函数的返回值

   /*   await修饰的函数：会等待这个函数执行完毕再继续往下执行，但是不会阻塞主线程
    *   修饰的axios请求是一个promise对象，promise的结果是axios请求的结果，
    *   可以直接对结果做处理，
   *  */
   let res = await axios.get(HOME.HOME_NAV_CATE)
        
    if(res.status==200 && res.data.code==0){
        //过滤数据
        let result = res.data;
        //resolve(result);//外部没有promise
        return result;//async会把这个匿名函数的返回值封装在promise对象上，并且作为resolve状态的参数
        //如果返回值为普通值，封装在promise对象上。。。。。
        //如果返回值是一个promise对象，那么这个被async修饰的函数的结果就是这个promise对象，
        //这个promise是什么状态返回的promise也是什么状态
    }else{
        console.log('业务逻辑错误')
    }

}
export default {requestHomeNavData};