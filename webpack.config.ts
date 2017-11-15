import * as webpack from 'webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'

const config: webpack.Configuration = {
  context: __dirname, // to automatically find tsconfig.json
  devtool: 'inline-source-map',
  entry: './src/frontend/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}

export default config
