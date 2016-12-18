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
}
@font-face {
  font-family: 'iconfont';  /* project id 202033 */
  src: url('//at.alicdn.com/t/font_q0xjrfdb9lcv7vi.eot');
  src: url('//at.alicdn.com/t/font_q0xjrfdb9lcv7vi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_q0xjrfdb9lcv7vi.woff') format('woff'),
  url('//at.alicdn.com/t/font_q0xjrfdb9lcv7vi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_q0xjrfdb9lcv7vi.svg#iconfont') format('svg');
}
</style>
