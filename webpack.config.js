import path from'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (env) => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/umd/'),
      filename: 'index.js',
      library: {
        name: 'zhzl',
        type: 'umd'
      },
      clean: true,
    },
    // 外部化lodash
    // externals: {
    //   lodash: {
    //     commonjs: 'lodash',
    //     commonjs2: 'lodash',
    //     amd: 'lodash',
    //     root: '_',
    //   }
    // }
  }
}
