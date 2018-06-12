import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import {loginStatus} from '../utils/util'
const Index = () => import('@/views/index/index');
const Login = () => import('@/views/login/login');
const Register = () => import('@/views/login/register');
const Home = () => import('@/views/home/home');
const Account = () => import('@/views/account/account');
const Forging = () => import('@/views/forging/forging');
const Listing = () => import('@/views/listing/listing');
const Vote = () => import('@/views/vote/vote');
const Transfer = () => import('@/views/transfer/transfer');
const Peers = () => import('@/views/peers/peers');
const Error = () => import('@/views/error/error');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path: 'forging',
          name: 'forging',
          component: Forging
        },
        {
          path: 'listing',
          name: 'listing',
          component: Listing
        },
        {
          path: 'vote',
          name: 'vote',
          component: Vote
        },
        {
          path: 'transfer',
          name: 'transfer',
          component: Transfer
        },
        {
          path: 'peers',
          name: 'peers',
          component: Peers
        }
      ],
      beforeEnter:(to,from,next)=>{
        if(loginStatus()){
          next();
        }else{
          next({path: '/login'})
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
