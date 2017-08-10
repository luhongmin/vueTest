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
import NewsList from "./components/NewsList.vue";
import NewsDetail from './components/NewsDetail.vue';
import PhotoList from './components/PhotoList.vue';

//引入自定义过滤器
import Moment from 'moment';
// Vue.use(Moment);
Vue.filter('dateFilter',function(input,dateStyle){
	return Moment(input).format(dateStyle);
})

//引入vue-resource
import vueResource from 'vue-resource';
Vue.use(vueResource);
var router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{name:'root',path:'/',redirect:'/home'},
		{name:"home",path:'/home',component:Home},
		{name:"member",path:'/member',component:Member},
		{name:"shopping",path:'/shopping',component:Shopping},
		{name:"search",path:'/search',component:Search},
		 {name:"newslist",path:'/newsList',component:NewsList},
		 {name:"newsdetail",path:'/newsDetail/:ids',component:NewsDetail},
		 {name:"photolist",path:'/photoList',component:PhotoList},


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
