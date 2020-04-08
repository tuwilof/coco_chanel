import Vue from 'vue'
import Router from 'vue-router'
import Actions from '@/components/Actions'
import Action from '@/components/Action'
import Responses from '@/components/Responses'
import CombinationRequired from '@/components/CombinationRequired'

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
    },
    {
      path: '/combination_required',
      name: 'CombinationRequired',
      component: CombinationRequired
    },
    {
      path: '/action',
      name: 'Action',
      component: Action
    },
  ]
})
