

<template>
  <div>
    <h1 class="red">Usuarios {{ total }}:</h1>
    <button @click="loadUsers">Cargar Usuarios</button>
    <ul v-for="user in users" :key="user.id">
      <usuario :user='user'></usuario>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Usuario from './Usuario';

export default {
  name: 'Usuarios',
  components: {
    Usuario,
  },
  data() {
    return {
      users: [],
      page: 1,
      total: 0,
      totalPages: 0,
    };
  },
  methods: {
    loadUsers() {
      axios.get('https://reqres.in/api/users')
        .then((response) => {
          const { data, page, total, totalPages } = response.data;
          this.users = data;
          this.page = page;
          this.total = total;
          this.totalPages = totalPages;
        });
    },
  },
};
</script>

<style scoped>
  .red {
    color: red
  }
</style>
