<!--
 * @Author: your name
 * @Date: 2020-12-04 22:56:39
 * @LastEditTime: 2020-12-08 19:44:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\src\components\AddBlog.vue
-->

<template>
  <div id="add-blog" style="height: 1000px">
    <form action="" v-if="submmited">
      <h2>添加博客</h2>
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label for="">博客内容</label>
      <textarea v-model="blog.content" ></textarea>

      <div id="checkboxs">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label for="">Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories" />
      </div>
      <label for="">作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{ author }}
        </option>
      </select>
      <button @click.prevent="post">添加博客</button>
    </form>

    <div v-if="!submmited">
      <h3>您的博客发布成功！</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{ blog.title }}</p>
      <p>博客内容:</p>
      <p>{{ blog.content }}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">
          {{ category }}
        </li>
      </ul>
      <p>作者:{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Tom", "Jery", "Lucky"],
      submmited: true,
    };
  },
  methods: {
    post: function () {
      // http://jsonplaceholder.typicode.com/posts
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          cont: this.blog.content,
          userId: 1,
        })
        .then(function (data) {
          console.log(data);
          this.submmited = false;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
  resize:none;
}
#checkboxs{
  margin-top: 10px;
}
#checkboxs label{
  display: inline-block;
  margin-top: 0;
}
#checkboxs input {
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background-color: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>
