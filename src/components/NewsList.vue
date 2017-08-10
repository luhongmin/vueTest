<template>
<div class="temp">
		 
			<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media" v-for="item in newsListData">
							<router-link :to='"/newsDetail/"+item.id'>
								<img class="mui-media-object mui-pull-left" :src="item.img_url">
								<div class="mui-media-body">
									{{item.title}}
									<p class='mui-ellipsis'>
										<span>发布时间:{{item.add_time | dateFilter('YYYY-MM-DD')}}</span><span>{{item.click}}次点击</span>
									</p>
									
								</div>
							</router-link>
						</li>
						
				</ul>
		
</div>
	
</template>
<style>
	.mui-ellipsis{
		
		display: flex;
		justify-content: space-between;
	}
	.mui-ellipsis span {
		
		display: block;
		
	}
</style>
<script type="text/ecmascript-6">
	import URL from '../Tools/URL'
	export default {
		data(){
			return {
				newsListData:[]
			}
		},
		created(){
			this.getNewsListData();
		},
		methods:{
			getNewsListData (){
				var url = `${URL.HTTP}://${URL.SERVER_PATH}:${URL.PORT}/api/getnewslist`;

				this.$http.get(url).then(
					res=>{
						this.newsListData = res.body.message;
					},
					msg=>{
						console.log(msg)
					}
				)

			}


		},
		props:['ids',13]

		

	}
</script>
