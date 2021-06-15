<script>
import Header from '@/views/Header.vue';
import Menu from '@/views/Menu.vue';

export default {
  components: { Header, Menu },
};
</script>

<template>
  <Header />
  <Menu />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  height: 3000px;
}
</style>
