
<template>
  <div v-if="profile" class="user">
    <img :src="profile.avatar" alt="">
    <div>{{profile.first_name}} {{profile.last_name}}</div>
    <div>{{ profile.email }}</div>
  </div>
</template>

<script>
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
function loadUser(userId) {
  axios.get(`https://reqres.in/api/users/${this.userId}`)
    .then((response) => {
      this.me = response.data.data;
    });
}

export default {
  name: 'Usuario',
  props: {
    user: {
      type: Object,
    },
    userId: {
      type: Number,
    },
  },
  data() {
    return {
      me: this.user,
    };
  },
  watch: {
    userId(val) {
      loadUser.bind(this)(val);
    },
  },
  computed: {
    profile() {
      return this.user || this.me;
    },
  },
  mounted() {
    if (this.userId) {
      loadUser.bind(this)(this.userId);
    }
    // eslint-disable-next-line no-console
    console.log('MONTADO');
  },
};
</script>

<style scoped>
.user{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
