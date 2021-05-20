module.exports = {
    productionSourceMap: false,
    publicPath:
        process.env.NODE_ENV === 'production' ? process.env.PUBLIC_SUB_PATH : '/',
    pages: {
        index: {
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: process.env.VUE_APP_TITLE,
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },    
    devServer: {
        port: 8080,
        proxy: {
            '^/api': {
                target: 'http://localhost:8081',
                // target: 'https://reqres.in/api/users/2',
                // pathRewrite: { '.*': '' },
                ws: true,
                changeOrigin: true
            },
        }
    }
}
// const { gitDescribeSync } = require('git-describe');
// process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash