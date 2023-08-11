<template>
  <div class="app">
    <form @submit.prevent> <!-- чтобы не было перезагрузки мы откл. действия по умолчанию -->
      <h4>Создание поста</h4>
      <!-- при помощи зарегитриваного слова $event мы обошлись без функции  -->
      <input v-bind:value="title" v-on:input="title = $event.target.value" class="input" type="text"
        placeholder="Название">
      <input v-bind:value="body" @input="inputBody" class="input" type="text" placeholder="Описание">
      <button class="btn" @click="createPost">Создать</button>
    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
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
      //event.stopPropagation()
      //event.preventDefault()
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

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

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