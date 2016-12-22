<template>
  <div class="page-business">
  	<closeButton></closeButton>
  	<timeline-block>
  		 <h1 slot="header">BUSINESS</h1>
  	</timeline-block>
  	<timeline-block v-for="bolckData in bolckDatas" :block-data="bolckData"></timeline-block>
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
      	timeEnd:'present',
        tiemStart:'2014.06',
        company:'redram官网及微信公众号开发',
        role:'个人站长、公众号开发运营',
        content:'大二上基于lamp环境搭建网上商城开始创业。大二下改版，提供校内试题下载、ipv6电视观看、树洞社交等服务，并同步所有功能到公众号。大三专注前端技术，开发众多H5，并在子域名下搭建个人博客、测试网站等。https：//node.redream.cn已完成https升级，并开启反向代理，提供node服务，不久将升级http2协议。官网：redream.cn ,公众号redream。',
        link:'http://redream.cn'
      },
      {
      	timeEnd:'2016.08',
        tiemStart:'2014.05',
        company:'inankai工作室',
        role:'技术部长',
        content:'inankai工作室是南开大学最具影响力的新媒体工作室。由技术、设计、运营三大部门组成，主要负责维护并运营南开大学官方微信微博，并开发、维护、运营inankai工作室自己的微信、微博、网站群、app等。期间inankai开发大小网站数十个，学校部门微信公众号数个，并推出了inankai app和ink media影音播放器app。',
        link:'http://inankai.cn'
      },
      {
      	timeEnd:'2016.05',
        tiemStart:'2016.03',
        company:'Ink media安卓APP开发',
        role:'项目负责人、安卓开发',
        content:'一款基于ipv6网络和校园内网开发的免流量APP，支持免流量在线看电视，下载电影、歌曲、动漫等功能。整个项目由一个设计师和两个程序猿完成。上线4小时下载量4000+。',
        link:'http://inankai.cn'
      },
      {
      	timeEnd:'2016.05',
    		tiemStart:'2016.05',
    		company:'inankai 新官网',
    		role:'前端工程师',
    		content:'由原来的资讯网站改版为纯静态展示性页面，运用媒体查询等技术适配了所有屏幕，通过对图片、js等资源的内嵌、压缩、缓存等技术进行了可观的前端优化。',
        link:'http://inankai.cn'
      },
      {
        timeEnd:'2015.11',
        tiemStart:'2015.11',
        company:'南开大学校友评教系统',
        role:'项目负责人、前端工程师',
        content:'工作室受教务处委托，基于微信搭建移动端校友评教系统，并实现后台数据可视化。整个项目的难点在于，数据量近100万，需要保证移动端数据回显的效率。最终采取了分表的思想，并对前端进行大量优化，保证用户体验。',
        link:'http://inankai.cn/pjweb/'
      },
      // {
      //   timeEnd:'',
      //   tiemStart:'',
      //   company:'',
      //   role:'',
      //   content:''
      // }
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
	.page-business{
		position: absolute;
    top:0;
    left:0;
	}
</style>