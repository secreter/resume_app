<template>
  <div id="app">
    <page-cover></page-cover>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition 
      name="custom-classes-transition"
      enter-active-class="animated flipInY"
      leave-active-class="animated flipOutY"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import pageCover from './components/pageCover'

export default {
  name: 'app',
  components: {
    pageCover
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:#333;
}
.so-link{
  text-decoration: none;
  color: #999;
  display: flex;
  flex-direction: column;
}
</style>
