<template>
  <div class="app">
    <post-form /> <!-- post-form - автоматически из PostForm -->
    <post-list :posts="posts" /> <!-- 'v-bind:' -> ':' -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm"  // "@" это элиас - папка 'src'
import PostList from "@/components/PostList"

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript 1', body: 'Описание поста 1' },
        { id: 2, title: 'JavaScript 2', body: 'Описание поста 2' },
        { id: 3, title: 'JavaScript 3', body: 'Описание поста 3' },
      ],
      title: '',
      body: ''
    }
  },

  methods: {
    createPost(event) {
      const newPost = {
        id: Date.now(), // id из текущей даты
        title: this.title, // получаем из модели
        body: this.body,
      }
      this.posts.push(newPost); // добавляем к массиву posts
      this.title = this.body = '';
    },
    /*inputTitle(event) { // при помощи зарегистрированого слова $event
      this.title = event.target.value;
    },*/
    inputBody(event) {
      this.body = event.target.value;
    },
  }
}
</script>

<style>
* {
  /* полное обнуление отступов */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>