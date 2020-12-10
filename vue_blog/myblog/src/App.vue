<!--
 * @Author: your name
 * @Date: 2020-12-04 14:07:46
 * @LastEditTime: 2020-12-06 13:09:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\src\App.vue
-->
<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
          <router-link to="/add" exact>写博客</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import ShowBlogs from './components/ShowBlogs'

export default {
  name: "App",
  components:{
    ShowBlogs
  }
};
</script>

<style>
nav{
    background: crimson;
    padding: 30px 0;
    margin-bottom: 40px;
}
ul {
  list-style: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}

.router-link-active{
    background:rgba(255,255,255,0.8);
    color: #444;
}
</style>
