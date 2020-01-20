import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import t1 from '@/components/t1'
import t2 from '@/components/t2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/t1',
      name: 't1',
      component: t1
    },
    {
      path: '/t2',
      name: 't2',
      component: t2
    }
  ]
})
