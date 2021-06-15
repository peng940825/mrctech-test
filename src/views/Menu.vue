<template>
  <div class="menu">
    <div class="label" v-for="item in 30" :key="item">
      <span>Label</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/scss/views/menu.scss';
</style>
