import Home from './components/Home.vue'
import Header from './components/Header.vue'
import UserHeader from './components/UserHeader.vue'

// webpack lazy loading
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  }, 'user') // if you want everything in its own bundle the last argument, ( , 'user' ) in this case, can just be ommitted
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  }, 'user')
}

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  }, 'user')
}

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'))
  }, 'user')
}

export const routes = [
  { path: '', components: {
    default: Home,
    'header-default': Header
  }},
  { path: '/user', components: {
    default: User,
    'header-user': UserHeader
  }, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) =>{
      console.log('inside route beforeEnter');
      next()
    }},
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
  ]},
  { path: '*', redirect: '/'}
]
