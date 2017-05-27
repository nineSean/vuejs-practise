module.exports = {
  entry: {
    bundle: './app.js'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      }]
    }]
  }
}
