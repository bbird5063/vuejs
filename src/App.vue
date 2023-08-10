<template>
  <div>
    <!-- повесим слушатель события. Атрибуты в Vue (v-...) называются директивами. 
    Директиву 'v-on:' можно заменить на '@' -->
    <button @click="addLike">Like</button>
    <button v-on:click="addDisLike">Dislike</button>
    <div>Количество лайков: <strong>{{ likes }}</strong></div>
    <div>Количество дизлайков: <strong>{{ dislikes }}</strong></div>
  </div>
</template>

<script>
export default {
  data() { // изначальные данные
    return {
      likes: 0,
      dislikes: 0,
    }
  },

  methods: {
    addLike() {
      this.likes++ // привязка к переменной this.likes, а не к тегу через атрибуты
    },
    addDisLike() {
      this.dislikes += 1
    },
  }
}
</script>

<style></style>