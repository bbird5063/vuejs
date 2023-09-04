<template>
  <div>
    <button @click="update">Обновить - {{ id }}...</button>
    <span v-if="is_refresh">Обновляем...</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*name: 'AjaxComponent',*/

      urldata: [],
      is_refresh: false,
      id: 0, // для итерации нажатия клавиш
    };
  },
  methods: {
    update() {
      //console.log(this.update);
      /*window.$.post(
        '/ajax',
        'test=Ok',
        function (data) {
          if (data.error) {
            alert(data.error);
          } else {
            if (data.info) {
              urldata = data;
              alert(data.info);
            }
          }
        },
        'json'
      );*/
    },
  },
};
</script>

<style scoped></style>
