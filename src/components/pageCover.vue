<template>
  <div class="page-cover" v-if="isshow">
  	<div class="-top">
  		<div class="-text">
  			<p>岁月你别催</p>
  			<p>该来的我不推</p>
  			<p>该还的还</p>
  			<p>该给的给</p>
  		</div>
  		<div class="-img">
  			
  		</div>
  	</div>
  	<div class="-bottom">
  		<div class="-img">
  			<h2>chaoyang peng</h2>
  			<p>redream</p>
  		</div>
  		<div class="-text">
  			<p>code</p>
  			<p>design</p>
  			<p>poetry</p>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: true
    }
  },
  created(){
  	setTimeout(() => {
  		this.isshow = false
  	},5000)
  }
}
</script>

<style lang='less' scoped>
	.page-cover{
		position: absolute;
		z-index: 2;
		width: 100vw;
		height: 100vh;
		p{
			padding: 5px 10px;
			font-size: 14px;
		}
		.-top{
			height: 50vh;
			width: 100%;
			background-color: #6d7a82;
			display: flex;
			align-items: center;
			flex-direction: column;
			.-text{
				height: 35vh;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.-img{
				width: 16vh;
				height: 16vh;
				background: url(../assets/head.jpeg) no-repeat;
				-webkit-background-size: cover;
				background-size: cover;
				border: 5px solid #fbc1a9;
			}
		}
		.-bottom{
			display: flex;
			align-items: center;
			flex-direction: column;
			background-color: #fff;
			.-img{
				width: 16vh;
				height: 16vh;
				background:#fbc1a9;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color: #6d7a82;
				h2{
					width: 100vw;
					text-align: center;
					text-transform: uppercase;
					word-break: keep-all;
				}
				p{
					width: 100vw;
					text-align: center;
				}
			}
			.-text{
				height: 35vh;
				display: flex;
				/*flex-direction: column;*/
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
