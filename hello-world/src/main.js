import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/bootstrap-vue.js'  
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

import AddForm from "./components/AddForm.vue";
import ListTodo from "./components/ListTodo.vue";
import store from './store'

const routes = [
   { path: '/new', component: AddForm },
   { path: '/list', component: ListTodo, props: {whatToDisplay: "all"}},
   { path: '/done', component: ListTodo, props: {whatToDisplay: "done"}},
   { path: '/todo', component: ListTodo, props: {whatToDisplay: "todo"}}
]




Vue.config.productionTip = false
const router = new VueRouter({
  routes 
})

new Vue({
  store: store,
  render: h => h(App), router 
}).$mount('#app')
