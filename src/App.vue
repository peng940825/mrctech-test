<script>
import Header from '@/views/Header.vue';
import Menu from '@/views/Menu.vue';
import Footer from '@/views/Footer.vue';

export default {
  components: { Header, Menu, Footer },
};
</script>

<template>
  <Header />
  <Menu />
  <Footer />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  height: 3000px;
  background-color: cadetblue;
}
</style>
