<template>
  <div class="timeline-block">
	<!-- <slot> -->
		<div class="left">
			<!-- <p class="-time-end">2016.11</p>
			<p class="-time-start">2016.09</p> -->
			<p v-if="blockData.timeEnd" class="-time-end">{{blockData.timeEnd}}</p>
			<p class="-time-start">{{blockData.tiemStart}}</p>
		</div>
	  	<div class="right">
	  		<slot name="header"></slot>
	  		<slot name="footer"></slot>
	  		<!-- <h3 class="-company">南开大学校友评教系统</h3>
	  		<h4 class="-role">前端工程师</h4>
	  		<p>工作室受教务处委托，基于微信搭建移动端校友评教系统，并实现后台数据可视化。整个项目的难点在于，数据量近100万，需要保证移动端数据回显的效率。最终采取了分表的思想，并对前端进行大量优化，保证用户体验。网址：http://inankai.cn/pjweb/</p> -->
	  		<h3 v-if="blockData.company" class="-company">{{blockData.company}}</h3>
	  		<h4 v-if="blockData.role" class="-role">{{blockData.role}}</h4>
	  		<p v-if="blockData.content" class="-content">{{blockData.content}}</p>
	  		<a v-if="blockData.link" :href="blockData.link" class="-link"><span class="iconfont icon-lianjie"></span>查看</a>
	  	</div>
	<!-- </slot> -->
  	
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
  	blockData:{
  		type:Object,
  		default(){
  			return {
  				timeEnd:'',
	  			tiemStart:'',
	  			company:'',
	  			role:'',
	  			content:'',
	  			link:''
  			}
  		}
  	}
  }
}
</script>

<style lang='less' scoped>
@import "../main.less";
	.timeline-block{
		display: flex;
		.left{
			background-color: @bg_color_gray;
			width: 24vw;
			text-align: right;
			border-right: solid 2px @bg_color_orange;
			position: relative;
			flex-shrink: 0;
			padding: 10px;
			.-time-end::after{
				content:'';
				display: flex;
				width: 16px;
				height: 16px;
				border-radius: 100%;
				background-color: @bg_color_orange;
				position: absolute;
				top: 12px;
				right: -9px;
			}
		}
		.right{
			background-color: #fff;
			padding: 10px 15px;
			width: 76vw;
			.-company{
				padding: 5px 0;
			}
			.-role{
				padding: 5px 0 25px 0;
				color: @bg_color_orange;
			}
			.-content{
				word-break: break-all;
				text-align: justify;
			}
			.-link{
				background-color: #ccc;
				display: inline-block;
				padding: 3px 10px;
				border-radius: 15px;
				text-decoration: none;
			}

		}
	}
</style>