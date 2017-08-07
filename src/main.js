import Vue from 'vue';
import App from './app.vue';

//导入mintUI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

//导入mui

import './statics/css/mui.min.css';

//导入全局样式
import './styles/root.css';

//vue路由
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入自定义的组件
import Home from "./components/Home.vue";
import Member from "./components/Member.vue";
import Shopping from "./components/Shopping.vue";
import Search from "./components/Search.vue";

//引入vue-resource
import vueResource from 'vue-resource';
Vue.use(vueResource);
var router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{name:"home",path:'/home',component:Home},
		{name:"member",path:'/member',component:Member},
		{name:"shopping",path:'/shopping',component:Shopping},
		{name:"search",path:'/search',component:Search}

	]
})

new Vue({
	el:"#app",
	router:router,
	render:create=>create(App)
	/*render:create=>{
		return create(App)
	}*/


})
