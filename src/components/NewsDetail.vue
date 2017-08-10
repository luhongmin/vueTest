<template>
	<div class="temp">
	
		<h4>{{newsDetailData.title}}</h4>
		<div class="other">
			<span>{{newsDetailData.add_time | dateFilter('YYYY-MM-DD')}}</span>
			<span>{{newsDetailData.click}}次点击</span>
		</div>
		<div class="content" v-html="newsDetailData.content">
			
		</div>
		<!-- {{newsDetailData}} -->
		
	</div>
</template>
<style>
	h4 {
		text-align: center;
		margin-top: 20px;
	}
	.other {
		display: flex;
		justify-content: space-around;
		font-size: 12px;
		color: #ccc;
	}
	.content {
		padding:5px;
	}
</style>
<script type="text/ecmascript-6">

import URL from '../Tools/URL';

	export default {
		data() {
			return {
				newsDetailData:{}
			}
		},
		created () {
			this.getNewsDetailData();
		},
		methods: {
			getNewsDetailData(){
			var ids = this.$route.params.ids;
				var url = `${URL.HTTP}://${URL.SERVER_PATH}:${URL.PORT}/api/getnew/${ids}`;
				this.$http.get(url).then(

					res=>{
					console.log(res);
						this.newsDetailData = res.body.message[0];
						
						
					},
					msg=>{
						console.log(msg);
					}
				)
			}
		},
		props:['ids']
	}
</script>