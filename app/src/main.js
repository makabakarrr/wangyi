import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'


import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.use(VueLazyLoad,{
    scrollDistance: 50,
    error:'/img/timg.jpg',
    loading:'/img/loading.gif'
});

new Vue({
    el:"#app",
    router,
    store,
    render: h=>h(App)
})

