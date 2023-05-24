import vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/home'
import Search from '../components/pages/search'
import SingleMusic from '../components/pages/singleMusic'
vue.use(Router)

const routes = [
  {
    name:'home',
    path:'/',
    component:Home,
    
  },
  { 
    name:'/buscar',
    path:'/buscar',
    component:Search
  },
  {
    name:'single-music',
    path:'/single-music/:id',
    component: SingleMusic,
  },
  {
    path:'/albums',
    component:{template:"<h1>Albums</h1>"}
  },
  {
    path:'*',
    component:{template:"<h1>No Page</h1>"}
  }
]

export default new Router({ routes })