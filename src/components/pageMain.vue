<template>
  <div class="page-main">
  	<header class="-header">
  		<div class="-box">
  			<div class="-img"></div>
	  		<h1 class="-name">彭朝阳</h1>
	  		<div class="-job-title">web前端工程师</div>
  		</div>
  		<div class="-bar">
  			<div class="-left">
  				攒着是因为想写成歌
  			</div>
  			<div class="-right iconfont icon-yinleiocn" @click="playmusic($event)">
  				<audio id="bgmusic" 
            src="../assets/bg.mp3">
      				你的浏览器不支持audio标签
				</audio>
				<!-- http://item.redream.cn/resumeapp/music/bg.mp3 -->
  			</div>
  		</div>
  	</header>
  	
  	<nav class="-nav">
  		<div class="block">
  			<router-link class="so-link" to="/baseinfo">
  				<div class="-icon iconfont icon-jibenxinxi" >
	  			</div>
	  			<div class="-title">
	  				basic info
	  			</div>
  			</router-link>
  		</div>
  		<!-- <div class="block">
  			<div class="-icon iconfont icon-xueli" >
  			</div>
  			<div class="-title">
  				Education
  			</div>
  		</div> -->
  		<div class="block">
  			<router-link class="so-link" to="/activity">
  				<div class="-icon iconfont icon-xuexiao" >
	  			</div>
	  			<div class="-title">
	  				activities
	  			</div>
  			</router-link>
  			
  		</div>
  		<!-- <div class="block">
  			<div class="-icon iconfont icon-jibenxinxi" >
  			</div>
  			<div class="-title">
  				Education
  			</div>
  		</div> -->
  		<div class="block">
  			<router-link class="so-link" to="/experience">
  				<div class="-icon iconfont icon-experience" >
	  			</div>
	  			<div class="-title">
	  				experience
	  			</div>
  			</router-link>
  		</div>
  		<div class="block">
  			<router-link class="so-link" to="/business">
  				<div class="-icon iconfont icon-chuangye" >
	  			</div>
	  			<div class="-title">
	  				Business
	  			</div>
  			</router-link>
  		</div>
  		<div class="block">
  			<div class="-icon iconfont icon-renqungouwuxingqu" >
  			</div>
  			<div class="-title">
  				Hobbies
  			</div>
  		</div>
  		<div class="block">
  			<div class="-icon iconfont icon-linkme" >
  			</div>
  			<div class="-title">
  				contact me
  			</div>
  		</div>
  		<div class="block"></div>
  		<div class="block"></div>
  	</nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods:{
  	playmusic(e){
  		let target=e.target
  		let music=document.getElementById('bgmusic')
  		if(music.paused){
  			target.style.animationPlayState='running'
			music.play()
			return
		}
		music.pause()
		target.style.animationPlayState='paused'
  	}
  }
}
</script>

<style lang='less' scoped>

	.page-main{
		.-header{
			height: 40vh;
			/*background-color: #999;*/
			
			position: relative;
			&::after{
				content:'';
				position: absolute;
			    left: 0;
			    top: 0;
			    display: block;
			    background: url(../assets/bg.jpg) no-repeat;
			    z-index: -1;
			    width: 100%;
			    height: 100%;
			    filter: blur(2px);
				background-size: cover;
			}
			.-box{
				height: 30vh;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.-img{
					width: 80px;
					height: 80px;
					/*background-color: #666;*/
					border-radius: 30%;
					transform: rotate(45deg);
					/*background: url(../assets/head.jpeg) no-repeat;
					-webkit-background-size: contain;
					background-size: contain;*/
					border:2px solid #fbc1a9;
					overflow: hidden;
				}
				.-img::after{
					content: '';
					display: block;
					/*background-color: #333;*/
					width: 100%;
					height: 100%;
					transform: rotate(-45deg) scale(1.3);
					background: url(../assets/head.jpeg) no-repeat;
					-webkit-background-size: contain;
					background-size: contain;
				}
				.-name{
					color: #333;
				}
				.-job-title{
					color: #333;
				}
			}
			.-bar{
				background-color: rgba(255,255,255,.4);
				height: 10vh;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.-left{
					height: 10vh;
					display: flex;
					align-items: center;
					padding-left: 10px;
					/*color: #6d7a82;*/
					color: #fff;
				}
				.-right{
					width: 10vh;
					height: 10vh;
					display: flex;
				    justify-content: center;
				    align-items: center;
				    animation:rotate 1.5s infinite linear;
				    animation-play-state: paused;
					&::before{
						font-size:50px;
						display: flex;
					    justify-content: center;
					    align-items: center;
					}
				}
			}
		}
		
		.-nav{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			
			.block{
				width: 33.33vw;
				height: 33.33vw;
				border-right: solid 1px #ddd;
				border-bottom:  solid 1px #ddd;
				/*margin-top: 10px;*/
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color:#999;
				.-icon{
					font-family: iconfont;
					width: 50%;
					height: 50%;
					font-size: 36px;
					&::before{
						display: flex;
					    justify-content: center;
					    align-items: center;
					}
				}
				.-title{
					text-transform: uppercase;
				}
			}
			.block:nth-last-of-type(1),
			.block:nth-last-of-type(2){
				height: 0px;
				border: none;
			}
		}
	}
	@keyframes rotate {
	  from {-webkit-transform:rotate(0deg);}
	  to {-webkit-transform:rotate(360deg);}
	}
	.so-link{
		text-decoration: none;
		color: #999;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
