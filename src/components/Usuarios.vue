

<template>
  <div>
    <h1 class="red">Usuarios:</h1>
    <ul v-for="user in users" :key="user.id">
      <li>{{user}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  data() {
    return {
      users: ['Luis', 'Juan', 'Pepe'],
    };
  },
};
</script>

<style scoped>
  .red {
    color: red
  }
</style>
