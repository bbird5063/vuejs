<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app_btns">
      <my-button @click="showDialog">
        Создать пост
      </my-button>
      <!-- 
        1. v-model="selectedSort".  v-model:value = selectedSort - через $emit
        2. :options="sortOption". байдим options - пропс массив, который ждет MySelect (по нему будет v-for). sortOption - массив, который определяем здесь
       -->
      <my-select v-model="selectedSort" :options="sortOption" />

    </div>

    <my-dialog v-model:show="dialodVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="sortedPosts" @remove="removePost" v-if="!isPostsLoading" />
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
      dialodVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOption: [ // массив option для нашего select
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' },
      ]
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialodVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialodVisible = true;
    },

    async fetchPost() {
      try {
        this.isPostsLoading = true;
        //setTimeout(async () => { // #1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
        //this.isPostsLoading = false; // пока используем setTimeout (пока тестовый режим)
        //}, 2000);
      } catch (e) {
        alert('Ошибка');
      } finally {
        this.isPostsLoading = false; // При работе здесь (пока тестовый режим)
      }
    }
  },

  mounted() {
    this.fetchPost()
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        post1[this.selectedSort.value]?.localeCompare(post2[this.selectedSort.value])
      })
    },
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

.app_btns {
  display: flex;
  /* кнопка и список напротив друга  */
  justify-content: space-between;
  margin: 15px 0;
}
</style>
