<template>
	 <div class="temp">
        <div class="category">
            <ul>
                <li><router-link to="/photoList">全部</router-link></li>
                <li v-for="item in categoryData">
                    <a @click="getImageData(item.id)">
                        {{item.title}}
                    </a>
                </li>
            </ul>
        </div>
        <div v-for="item in imgData" class="imagebooks">
           <img :src="item.img_url" class="img">
           <div class="zhaiyao">
               <p>{{item.zhaiyao}}</p>
           </div>
       </div>
    </div>

</template>
<style scoped>
    .imagebooks{
        position: relative;
    }
    .zhaiyao {
        position: absolute;
        bottom: 0px;
    }
    .zhaiyao p {
        color: white;
        background-color: rgba(1,1,1,0.2);
    }
    .img{
        width: 100%;
    }
    .category ul {
        display: flex;
        padding: 0px;
    }
    .category li {
        list-style: none;
        padding-left: 6px;
    }
    .category {
        /*强制不换行*/
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }
</style>
<script type="text/ecmascript-6">
import URL from '../Tools/URL.js'
	export default {
		data(){
			return {
				categoryData:[],
				imgData:[]
			}
		},
		created(){
			this.getCategoryList();
			this.getImageData(0);
		},
		methods:{
			getCategoryList(){

				var url = `${URL.HTTP}://${URL.SERVER_PATH}:${URL.PORT}/api/getimgcategory`;
				this.$http.get(url).then(
						res=>{
								this.categoryData = res.body.message;
								console.log(this.categoryData)
						},
						msg=>{
							console.log(msg)
						}
					)
			},
			getImageData(cateid){
			console.log(8)
				
				var url = `${URL.HTTP}://${URL.SERVER_PATH}:${URL.PORT}/api/getimages/${cateid}`;
				this.$http.get(url).then(
						res=>{
						console.log(res)
								 this.imgData = res.body.message
						},
						msg=>{
							console.log(msg)
						}
					)
			}
		}
	}

</script>