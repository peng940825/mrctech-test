<script>
import { ref, onMounted } from '@vue/runtime-core';

export default {
  setup() {
    let contentNum = ref(20);

    const getDocumentTop = () => document.documentElement.offsetHeight;

    const getWindowHeight = () => document.documentElement.clientHeight;

    const getScrollHeight = () =>
      Math.max(document.documentElement.scrollTop, window.pageYOffset || 0);

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (getScrollHeight() + getWindowHeight() >= getDocumentTop() - 120) contentNum.value += 20;
      });
    });

    return { contentNum };
  },
};
</script>

<template>
  <div class="main">
    <div class="content" v-for="item in contentNum" :key="item">
      <img src="@/assets/img.png" />
      <span class="time">3:10</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/scss/views/main.scss';
</style>
