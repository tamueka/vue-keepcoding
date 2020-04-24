
<template>
  <div v-if="user" class="user">
    <img :src="user.avatar" alt="">
    <div>{{user.first_name}} {{user.last_name}}</div>
    <div>{{ user.email }}</div>
  </div>
</template>

<script>

export default {
  name: 'Usuario',
  props: {
    user: {
      type: Object,
      required: true,
    },
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
