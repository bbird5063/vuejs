<template>
  <form @submit.prevent> <!-- чтобы не было перезагрузки мы откл. действия по умолчанию -->
    <h4>Создание поста</h4>
    <!-- при помощи зарегитриваного слова $event мы обошлись без функции   -->
    <my-input
      v-model="post.title"
      type="text"
      placeholder="Название"
    /> <!-- обязательно закрывать тег "/>" -->
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    /> <!-- обязательно закрывать тег "/>" -->
    <my-button
      style="align-self: flex-end; margin-top: 15px;"
      @click="createPost"
    >
      Создать
    </my-button>

  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: null, // BBR
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(event) { // новый пост создавать не надо, он уже есть, нет id
      this.post.id = Date.now(); // BBR: было this.post.id = Date.now()
      //this.posts.push(newPost); // добавляем к массиву posts, не подходит - мы в дочернем компоненте
      this.$emit('create', this.post); // 1-имя события, 2,3,...-то, что хотим передать
      this.post = { // после передачи - очищаем
        id: null, // BBR
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>