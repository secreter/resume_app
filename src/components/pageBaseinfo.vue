<template>
  <div class="page-baseinfo">
  	<closeButton></closeButton>
  	<div class="box">
  		<span class="iconfont icon-xiyangwushi"></span>
  		<p class="info-title">me</p>
  	</div>
  	<div class="box">
		<ul class="info-ul">
			<li class="info-li">彭朝阳</li>
			<li class="info-li">peng chao yang</li>
			<li class="info-li">新世纪独立青年</li>
			<li class="info-li">爱代码 爱生活</li>
			<li class="info-li">要洒脱 要果敢</li>
		</ul>
  		
  	</div>
  	<div class="box">
  		<ul class="info-ul">
			<li class="info-li">南开大学本科</li>
			<li class="info-li">2013-2017</li>
			<li class="info-li">计算机科学与技术</li>
			<li class="info-li">前端|数据|语义网</li>
			<li class="info-li">学无止境</li>
			<li class="info-li">待续···</li>
		</ul>
  	</div>
  	<div class="box">
  		<span class="iconfont icon-zhandou"></span>
  		<p class="info-title">battle</p>
  	</div>
  	<div class="box">
  		<span class="iconfont icon-diqu"></span>
  		<p class="info-title">footmark</p>
  	</div>
  	<div class="box">
  		<ul class="info-ul">
			<li class="info-li">天津南开<span class="iconfont icon-44xuexi"></span></li>
			<li class="info-li">杭州阿里<span class="iconfont icon-34"></span></li>
			<li class="info-li">北京360<span class="iconfont icon-44xuexi"></span></li>
			<li class="info-li">北京搜狗<span class="iconfont icon-34"></span></li>
			<li class="info-li">云南</li>
			<li class="info-li">···</li>
		</ul>
  	</div>


  </div>
</template>


<script>
import closeButton from './closeButton.vue'
export default {
  data () {
    return {
    }
  },
  components:{
  	closeButton,
  }
}
</script>

<style lang='less' scoped>
	@import "../main.less";
	.page-baseinfo{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: #888;
		display: flex;

		align-content: stretch;
		flex-wrap: wrap;
		.box{
			width: 50vw;
			background-color: @bg_color_orange;
			flex-flow: 0;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.info-ul{

			}
			.info-li{
				color: #333;
			}
		}
		.box:nth-of-type(1),
		.box:nth-of-type(4),
		.box:nth-of-type(5){
			background-color: @bg_color_gray;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #333;
			.iconfont{
				font-size: 80px;
				margin-bottom: 10px;

			}
			.info-title{
				font-size: 22px;
				text-transform: uppercase;
			}

			.-icon-study{

			}
		}
		
	}
</style>
