module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './formkit.config.{js,ts}'
  ],
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['light', 'dark']
  }
}
