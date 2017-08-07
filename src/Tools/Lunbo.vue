<template>
	<div class="temp">
	<!-- 图片轮播 -->
		 <mt-swipe :show-indicators="true">
      <mt-swipe-item class="slide1" v-for="item in homeData">
      <a :href="item.url">
      	<img :src="item.img" alt="" class="img">
      </a>
      	
      </mt-swipe-item>
     
    </mt-swipe>
    
</template>
<style>
/*图片轮播样式*/
	.mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }

      .slide2 {
        background-color: #ffd705;
        color: #000;
      }

      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
      .mint-swip {
      	margin-bottom: 0!important;
      	padding: 0;
      }
  /*九宫格*/
  .mui-grid-view.mui-grid-9 {
        background-color: white;
    }
  .mui-icon:before {
  	content: '';

  }
  .mui-icon {
  	width: 40px;
  	height: 40px;
  	background-repeat: round;
  	
  }
  .callme {
  	background-image: url(../images/callme.png);
  }
  /*  .demoB {
    	background-image: url(../images/demo.png);
    } */
 .feedback {
  	background-image: url(../images/feedback.png);
  }
  .goodShow {
  	background-image: url(../images/goodShow.png);
  }
  .news {
  	background-image: url(../images/news.png);
  }
  .picShare {
  	background-image: url(../images/search.png);
  } 
  /*图片大小*/
  .img {
	width: 100%;
	height: 100%;
  }
</style>