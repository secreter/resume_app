<template>
  <div class="page-experience">
  	<closeButton></closeButton>
  	<timeline-block>
  		 <h1 slot="header">EXPERIENCE</h1>
  	</timeline-block>
  	<timeline-block v-for="bolckData in bolckDatas" :block-data="bolckData"></timeline-block>
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
      	timeEnd:'2017.02',
        tiemStart:'2016.11',
        company:'奇虎360—奇舞团前端特训',
        role:'学员',
        content:'系统的重新学习前端知识',
        link:''
      },
      {
      	timeEnd:'2016.09',
        tiemStart:'2016.06',
        company:'阿里巴巴—聚划算',
        role:'web前端工程师',
        content:'参与聚划算建站平台重构项目。采用flex布局还原了视觉稿，基于vue框架和ES6语法开发可复用组件，并参与了整个业务流程的讨论与开发。项目采用ESlint约束代码规范，webpack模块打包，vuex约束数据单向流动，router异步加载js文件，遵循简洁可扩展，组件化，统一化的开发原则。'
      },
      {
      	timeEnd:'2015.10',
        tiemStart:'2014.09',
        company:'腾讯公司——微校部门',
        role:'南开大学负责人',
        content:'负责微校在南开大学的推广与公测，邀请大号接入平台尝试新功能，收集bug反馈信息，并定期举办线下交流活动。曾承办“腾讯微校公众号运营者交流会——天津站”活动。'
      },
     
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
	.page-experience{
		position: absolute;
    top:0;
    left:0;
	}
</style>