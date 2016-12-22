<template>
  <router-link class="so-link close-btn" to="/"><span class="iconfont icon-icon"></span></router-link>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='less' scoped>
	.close-btn{
		position: fixed;
		top: 10px;
		right: 10px;
		.iconfont{
			font-size: 30px;
		}
	}
</style>