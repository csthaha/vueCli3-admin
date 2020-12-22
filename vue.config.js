const { configs } = require('eslint-plugin-prettier');
const { resolve } = require('path');
const path = require('path');

function resolvePath(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_PUBLIC_PATH : process.env.VUE_APP_BASE_URL,
    assetsDir: "static",
    productionSourceMap: false,     // 不需要生产环境的 source map，false 以加速生产环境构建
    // outputDir: process.env.OUT_PUT_DIR,
    outputDir: 'docs',  // 部署到 github

    lintOnSave: false,  // 保存时不使用 eslint 
    configureWebpack: (config) => {
        // 改写路径
        config.resolve.alias = {
            '@': resolvePath('src'),
            images: '@/assets/iamges',
            components: '@/components',
            views: '@/views'
        }
    },
    devServer: {
        disableHostCheck: true,
        port: 8090
    }
}