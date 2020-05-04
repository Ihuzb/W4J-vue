module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://w4j.ihuzb.cn",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
                logLevel: 'debug',
            }
        },
    },
    publicPath:'./',
    productionSourceMap: false, // 是否生成map文件
};