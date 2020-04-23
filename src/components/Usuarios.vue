
<template>
  <div class="users">
    <h1>Usuarios {{ total }}:</h1>
    <button @click="loadUsers">Cargar Usuarios</button>
    <ul v-for="user in users" :key="user.id" @click="loadUser(user)">
      <usuario :user='user'></usuario>
    </ul>
    <button v-if="ifNext" @click="next">Siguiente</button>
    <button v-if="ifPrev" @click="prev">Anterior</button>
    <div v-if="userSelect">
      <usuario :userId="userSelect"></usuario>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Usuario from './Usuario';

function loadUsers() {
  axios.get(`https://reqres.in/api/users?page=${this.page}`)
    .then((response) => {
      // eslint-disable-next-line camelcase
      const { data, page, total, total_pages } = response.data;
      this.users = data;
      this.page = page;
      this.total = total;
      // eslint-disable-next-line camelcase
      this.totalPages = total_pages;
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
      userSelect: null,
    };
  },
  methods: {
    loadUser(user) {
      // eslint-disable-next-line no-console
      console.log('load user');
      this.userSelect = user.id;
    },
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
    },
  },
  computed: {
    ifNext() {
      return this.totalPages > this.page;
    },
    ifPrev() {
      return this.page > 1;
    },
  },
};

</script>

<style scoped>
.users {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
