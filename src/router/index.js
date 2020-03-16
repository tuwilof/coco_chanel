import Vue from 'vue'
import Router from 'vue-router'
import Actions from '@/components/Actions'
import Responses from '@/components/Responses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Actions',
      component: Actions
    },
    {
      path: '/responses',
      name: 'Responses',
      component: Responses
    }
  ]
})
