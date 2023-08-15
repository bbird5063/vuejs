<template>
  <div class="app">
    <!-- Закрывающий слеш обязятелен даже для инпутов -->
    <post-form @create="createPost" /> <!-- наше событие create и функция "createPost", которая запустится -->
    <post-list :posts="posts" /><!-- 'v-bind:' -> ':' -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";  // "@" это элиас - папка 'src'
import PostList from "@/components/PostList";

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
      ]
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    }
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