<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
      @click="showDialog"
      style="margin: 15px 0;"
    >
      Создать пользователя
    </my-button>
    <my-dialog v-model:show="dialodVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <!-- #3 -->
    <post-list
      :posts="posts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialodVisible: false, // создали директиву
      isPostsLoading: false // #2 модель для индикации загрузки
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialodVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id); // filter создает новый массив
    },
    showDialog() {
      this.dialodVisible = true;
    },

    async fetchPost() {
      try {
        this.isPostsLoading = true; // перед отправкой запроса
        setTimeout(async () => { // #1
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
          this.isPostsLoading = false; // пока используем setTimeout (пока тестовый режим)
        }, 2000);
      } catch (e) {
        alert('Ошибка');
      } finally {
        //this.isPostsLoading = false; // При работе здесь (пока тестовый режим)
      }
    }
  },

  mounted() {
    this.fetchPost()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
