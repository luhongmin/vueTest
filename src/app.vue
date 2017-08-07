
<template>
    <div>
        <!--头部的导航条-->
        <!--从mint-ui中获取的代码-->
        <mt-header fixed title="传智*vue项目"></mt-header>

        <!--中间的内容部分-->
        <router-view>
          
            <mt-swipe :show-indicators="false">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
        </router-view>

        <!--最底部的tab-->
        <!--从mui框架中获取的代码-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">成员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopping">
                <span class="mui-icon mui-icon-contact">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<style>

</style>

<script>
    export default {

    }
</script>