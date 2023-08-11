<template>
  <form @submit.prevent> <!-- чтобы не было перезагрузки мы откл. действия по умолчанию -->
    <h4>Создание поста</h4>
    <!-- при помощи зарегитриваного слова $event мы обошлись без функции  -->
    <input :value="post.title" @input="post.title = $event.target.value" class="input" type="text" placeholder="Название">
    <input v-bind:value="post.body" v-on:input="post.body = $event.target.value" class="input" type="text"
      placeholder="Описание">
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
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

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>