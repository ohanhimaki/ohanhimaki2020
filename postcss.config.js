const tailwindcss = require("tailwindcss")

module.exports = {
  plugins: [
    tailwindcss("./tailwindcss/tailwind.src.css"),
    require("postcss-import"),
    require("autoprefixer"),
  ],
}
