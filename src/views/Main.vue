<template>
  <div class="main">
    <div class="content" v-for="item in 100" :key="item">
      <img src="@/assets/img.png" />
      <span class="time">3:10</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/scss/views/main.scss';
</style>
