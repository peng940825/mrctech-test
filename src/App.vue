<script>
import Header from '@/views/Header.vue';
import Menu from '@/views/Menu.vue';
import Main from '@/views/Main.vue';
import Footer from '@/views/Footer.vue';

export default {
  components: { Header, Menu, Main, Footer },
};
</script>

<template>
  <Header />
  <Menu />
  <Main />
  <Footer />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
