const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: { /* Options for `pug-plain-loader` */ },
        pugLoader: { /* Options for `pug-loader` */ }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      }
    }
  }
}
