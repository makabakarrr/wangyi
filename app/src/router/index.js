import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

import home from './home'
import category from './category'
import topic from './topic'
import cart from './cart'
import mine from './user'

const routes = [
    
   ...home,
   ...category,
   ...topic,
   ...cart,
   ...mine
]

export default new Router({
    mode:'history',
    routes
})