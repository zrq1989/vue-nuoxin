module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/Home/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        port: 8080,
        host: 'localhost',
        https: false,
        open: true,

        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }

        },
    }
    // pluginOptions: {
    //     'style-resources-loader': {
    //         preProcessor: 'less',
    //         patterns: [
    //             // 下面这段是自己加的，根据自己文件的位置来修改
    //             path.resolve(__dirname, "src/assets/css/global.less")
    //         ]
    //     }
    // }
}

