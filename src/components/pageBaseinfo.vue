<template>
  <div class="page-baseinfo">
  	<div class="box">1</div>
  	<div class="box">2

  	<router-link class="-close" to="/">X</router-link>
  	</div>
  	<div class="box">3</div>
  	<div class="box">4</div>
  	<div class="box">5</div>
  	<div class="box">6</div>


  </div>
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
		}
		.box:nth-of-type(1),
		.box:nth-of-type(4),
		.box:nth-of-type(5){
			background-color: @bg_color_gray;
		}

		.-close{
			position: absolute;
			top: 0;
			right: 10px;
		}
	}
</style>
