/*
 * @Author: your name
 * @Date: 2020-12-04 14:07:46
 * @LastEditTime: 2020-12-07 18:17:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/add',
      name: 'AddBlog',
      component:AddBlog
    },
    {
      path:'/blog/:id',
      name: 'AddBlog',
      component:SingleBlog
    },
    {
      path:'/',
      name: 'ShowBlogs',
      component:ShowBlogs
    }
  ]
})
