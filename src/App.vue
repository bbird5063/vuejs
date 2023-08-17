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

    <post-list
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
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
      ],
      dialodVisible: false // создали директиву
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
    }
  },

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