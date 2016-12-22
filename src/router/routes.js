import pageMain from '../components/pageMain'
import pageBaseinfo from '../components/pageBaseinfo'
import pageActivity from '../components/pageActivity'
import pageExperience from '../components/pageExperience'
import pageBusiness from '../components/pageBusiness'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
// 异步加载
const hello = resolve => require.ensure([], () => resolve(require('../components/Hello.vue')), 'group-foo') 
const Bar = { template: '<div>bar</div>' }
const User = { template: '<div> {{ $route.params.name }}</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/hello', component: hello },
  { path: '/', component: pageMain },
  { path: '/baseinfo', component: pageBaseinfo },
  { path: '/activity', component: pageActivity },
  { path: '/experience', component: pageExperience },
  { path: '/business', component: pageBusiness },
  { path: '/bar', component: Bar },
  // 动态路径参数 以冒号开头
  { path: '/user/:name', component: User },
]

export default routes