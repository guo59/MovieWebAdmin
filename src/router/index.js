import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/Login')
const Home = () => import('../views/home/Home')
const Welcome = () => import('../views/welcome/Welcome')
const Profile = () => import('../views/profile/Profile')
const User = () => import('../views/user/User')
const Movie = () => import('../views/movie/Movie')
const MovieAdd = () => import('../views/movie/MovieAdd')
const MovieEdit = () => import('../views/movie/MovieEdit')
const Comment = () => import('../views/comment/Comment')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/welcome'
      },
      {
        path: '/home/welcome',
        component: Welcome
      },
      {
        path: '/home/profile',
        component: Profile
      },
      {
        path: '/home/user',
        component: User
      },
      {
        path: '/home/movie',
        component: Movie
      },
      {
        path: '/home/movieadd',
        component: MovieAdd
      },
      {
        path: '/home/movieedit/:id',
        component: MovieEdit
      },
      {
        path: '/home/comment',
        component: Comment
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
