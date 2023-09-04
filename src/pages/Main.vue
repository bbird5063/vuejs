<template>
  <div>
    <h1>Добро пожаловать на курс по Vue 3</h1>
    <h1>myURL = {{ myURL }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myURL: window.location.href,
    };
  },
};
</script>

<style scoped></style>
