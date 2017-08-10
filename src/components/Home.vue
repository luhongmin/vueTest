<template>
	<div class="temp">
    <Lunbo :lunboData="homeData"></Lunbo>   
	<!-- 图片轮播
    
      九宫格 -->
      <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/newsList">
                        <span class="mui-icon callme"></span>
                        <div class="mui-media-body">新闻资讯</div></router-link>
                        </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon demoB"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">newsLIist</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photoList">
                        <span class="mui-icon feedback"></span>
                        <div class="mui-media-body">图片新闻</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon goodShow"></span>
                        <div class="mui-media-body">location</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon news"></span>
                        <div class="mui-media-body">Search</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon picShare"></span>
                        <div class="mui-media-body">Phone</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon searchA"></span>
                        <div class="mui-media-body">Setting</div></a></li>
                
            </ul> 
    </div>

	</div>
</template>

<script type=text/ecmascript-6>
import Lunbo from '../Tools/Lunbo.vue';
import URL from '../Tools/URL.js';
	export default {
		data() {
			return {
				homeData:[],
				title:'lulu'
			}
		},
		created(){

			this.getHomeData();
		},
		methods: {
			getHomeData () {
				var url = `${URL.HTTP}://${URL.SERVER_PATH}:${URL.PORT}/api/getlunbo`;
        console.log(url)
				this.$http.get(url).then(
				
					
					res=>{
						this.homeData = res.body.message;
					}
				,
					msg=>{
						console.log(msg)
					}
				
				)
			}
		},
		components:{
			Lunbo
		}


	}
</script>