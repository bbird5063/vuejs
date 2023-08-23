<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/users')">Пользователи</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >О сайте</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray; /* тень */
  box-shadow: 2px 2px 4px gray; /* для выравнивания */
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
