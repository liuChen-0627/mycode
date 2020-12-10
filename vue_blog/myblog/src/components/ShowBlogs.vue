<!--
 * @Author: your name
 * @Date: 2020-12-05 12:25:24
 * @LastEditTime: 2020-12-08 12:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\src\components\ShowBlogs.vue
-->

<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div v-for="blog in filteredBlogs" class="single-bolg">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | uppercase }}</h2>
      </router-link>
      <article>{{ blog.body | sinppet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: "",
      
    };
  },
  
  created() {
    // ./../../static/posts.json http://jsonplaceholder.typicode.com/posts
    this.$http
      .get("./../../static/posts.json")
      .then(function (data) {
        this.blogs = data.body.slice(0, 10);
        console.log(this.blogs);
      });
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>


<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-bolg {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
input[type="text"]{
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>