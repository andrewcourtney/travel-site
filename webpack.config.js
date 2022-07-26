const path = require('path')
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        static:'./app',
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    //watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: { plugins: postCSSPlugins }
                    }
                }]
            }
        ]
    }
}