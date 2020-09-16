module.exports = {
    productionSourceMap: false,
    publicPath:
        process.env.NODE_ENV === 'production' ? process.env.PUBLIC_SUB_PATH : '/',
    devServer: {
        port: 30080,
        proxy: {
            '^/api': {
                // target: 'http://localhost:30081',
                target: 'https://reqres.in/api/users/2',
                pathRewrite: { '.*': '' },
                ws: true,
                changeOrigin: true
            },
        }
    }
}
// const { gitDescribeSync } = require('git-describe');
// process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash