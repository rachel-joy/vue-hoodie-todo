import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')
const Signup: AsyncComponent = (): any => import('@/components/Signup.vue')
const Login: AsyncComponent = (): any => import('@/components/Login.vue')
const Todo: AsyncComponent = (): any => import('@/components/Todo.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
