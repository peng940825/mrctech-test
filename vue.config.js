module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/scss/mixin.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/mrctech-test/dist' : '/',
};
