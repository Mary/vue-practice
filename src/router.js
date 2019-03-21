import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import HelloWorld from './components/HelloWorld'

Vue.use(Router);
export default new Router({
    linkActiveClass: 'active', //used to highlight different classes to our active components
    mode: 'history',
    routers: [
        { path: '/', component: HelloWorld, 
         }
    ]
})