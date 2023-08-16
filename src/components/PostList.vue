<template>
  <div>
    <h3>Список пользователей</h3>
    <!-- posts получили сверху через пропс от родителя App -->
    <!-- post для удаление получили снизу при помощи $emit от дочернего PostItem и передали наверх к родителю App(в наш <post-list>) тоже при помощи $emit. Продолжаем цепочку (App <- "PostList" <- PostItem) передач родителям.  -->

    <!-- ":post="post" - ждет пропс дочерний PostItem -->
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
</template>
 
<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: { // пропс posts пришел от родителя App
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>