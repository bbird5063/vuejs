<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <!-- post получили сверху через пропс от родителя PostList -->
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <!-- при помощки $emit отправляем наверх post для удаление в родитель PostList(в наш <post-item>), который получили родителя PostList через пропс. Т.е. начинаем цепочку (App <- PostList <- "PostItem") передач родителям -->
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      // пропс post пришел от родителя PostList
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
