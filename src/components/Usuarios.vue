
<template>
  <div>
    <h1 class="red">Usuarios {{ total }}:</h1>
    <button @click="loadUsers">Cargar Usuarios</button>
    <ul v-for="user in users" :key="user.id">
      <usuario :user='user'></usuario>
    </ul>
    <button @click="next">Siguiente</button>
    <button @click="prev">Anterior</button>
  </div>
</template>

<script>
import axios from 'axios';
import Usuario from './Usuario';

function loadUsers() {
  axios.get(`https://reqres.in/api/users?page=${this.page}`)
    .then((response) => {
      const { data, page, total, totalPages } = response.data;
      this.users = data;
      this.page = page;
      this.total = total;
      this.totalPages = totalPages;
    });
}

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
      loadUsers.bind(this)();
    },
    next() {
      this.page += 1;
      loadUsers.bind(this)();
    },
    prev() {
      this.page -= 1;
      loadUsers.bind(this)();
    }
  },
};

</script>

<style scoped>
  .red {
    color: red
  }
</style>
