class WebpackPublicPathPlugin {
  constructor(publicPath){
    this.publicPath = publicPath || ''
  }

  apply(compiler) {
    compiler.options.output.publicPath = this.publicPath
  }
}

module.exports = WebpackPublicPathPlugin