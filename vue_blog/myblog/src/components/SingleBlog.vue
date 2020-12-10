<!--
 * @Author: your name
 * @Date: 2020-12-07 18:18:10
 * @LastEditTime: 2020-12-07 19:06:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\src\components\SingleBlog.vue
-->
<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
    .then(function(data){
        // console.log(data);
        this.blog = data.body
    });
  },
};
</script>
<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px solid #aaa;
}
</style>