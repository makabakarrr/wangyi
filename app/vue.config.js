module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: "http://localhost:9000",
          changeOrigin: true,
          pathRewrite: {
            '/api':''
          }
        }
      }
    }
  }
//       // proxy: "https://iot.cn-shanghai.aliyuncs.com"
//       /* {
//           '/api': {//设置代理 当请求路径为/api开头的时候
//               target: "http://localhost:9000",
//               //target:"http://m.you.163.com",
//               changeOrigin: true
//           },
          
//           '/item': {//设置代理 当请求路径为/api开头的时候
//             target: "http://localhost:9000",
//             //target:"http://m.you.163.com",
//             changeOrigin: true
//         }
//       } */
//     }
  // };
// module.exports = {
//   // publicPath: './',//默认值为： /
  
//   devServer:{
//     port: 8080,
//     proxy: 'https://iot.cn-shanghai.aliyuncs.com'
//     // {
//     //   "/api": {
//     //      target:"https://iot.cn-shanghai.aliyuncs.com",
//     //      ws:true,
//     //      changOrigin:true,
//     //      pathRewrite:{
//     //         '^/api': '',
//     //      }
//     //    }
//     // }
    
//   }
// }