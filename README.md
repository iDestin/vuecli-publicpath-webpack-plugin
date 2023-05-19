If your project is using `vue-cli` and you want to modify the `output.publicPath` option of webpack, you can use this plugin, otherwise you don't need to use it.

> Because vue-cli does not allow direct modification of output.publicPath. see [docs](https://cli.vuejs.org/zh/config/#publicpath)

# Install

```shell
npm install vuecli-publicpath-webpack-plugin -D
```

# Usage

in `vue.config.js` You can use this plugin through the `configureWebpack` method

```js
const WebpackPublicPathPlugin = require('vuecli-publicpath-webpack-plugin')

module.exports = {
  ...
  configureWebpack:(config)=>{
    config.plugins = [
      ...config.plugins,
      new WebpackPublicPathPlugin('your cdn path')
    ]
  }
}
```