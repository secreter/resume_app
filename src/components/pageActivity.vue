<template>
  <div class="page-activity">
  	<closeButton></closeButton>
  	<timeline-block>
  		 <h1 slot="header">ACTIVITIES</h1>
  	</timeline-block>
  	<timeline-block v-for="bolckData in bolckDatas" :block-data="bolckData">
  	</timeline-block>
  	<timeline-block>
  		 <h1 slot="footer"></h1>
  	</timeline-block>
  </div>
</template>

<script>
import timelineBlock from './timelineBlock.vue'
import closeButton from './closeButton.vue'
export default {
  data () {
    return {
      bolckDatas:[
      {
      	timeEnd:'2016.01',
		tiemStart:'2016.03',
		company:'口音汉语在线系统开发',
		role:'全栈工程师',
		content:'个人协助汉院老师，搭建国外留学生中文发音资源研究平台，典型lamp架构，前端基于bootsrap框架，后台php原生开发，实现了前端所有模块的自由增删改查。',
		link:'http://www.globalaccentchinese.com'
      },
      {
      	timeEnd:'2015.03',
		tiemStart:'2015.04',
		company:'简单的路由器程序开发',
		role:'个人开发',
		content:'尝试开发过一个简单的路由器程序，主要内容包括获取本机的MAC地址和IP地址，维护路由器的静态路由表。在winpcap的混杂模式下，抓取MAC地址是本机但目的IP地址不是本机的IP数据报，提取IP地址后利用路由表选择路由，再利用ARP协议获取下一个路由器器接口MAC地址。最后封装IP数据报，进行转发。'
      },
      {
      	timeEnd:'2015.09',
		tiemStart:'2015.11',
		company:'基于lucene的简单内网搜索引擎',
		role:'个人开发',
		content:'尝试写过一个简单的信息检索系统。开始时自己写爬虫，分词，建立倒排索引，再建立向量空间模型，搜索《莎士比亚全集》还行，搜索内网就不行了，主要瓶颈在分词和存储上。最后采用开源的lucene，用java搭建了一个简单的搜索引擎，也第一次尝试了java web开发。'
      },
  //     {
  //     	timeEnd:'',
		// tiemStart:'',
		// company:'',
		// role:'',
		// content:''
  //     }
      ]
    }
  },
  components:{
	timelineBlock,
	closeButton
  }
}
</script>

<style lang='less' scoped>
	.page-activity{
		position: absolute;
		top:0;
    	left:0;
	}
</style>