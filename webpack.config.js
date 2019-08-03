const path = require('path');

module.exports = (env) => {
    return{
        mode: env.NODE_ENV,
        entry: './client/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build/')
        },
        devServer: {
            publicPath: '/build',
            filename: 'bundle.js',
            proxy: {
                '/api': 'http://localhost:3000'
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        }
                    }
                },
                {
                    test: /\.css/,
                    use: ['style-loader', 'css-loader']
                },    
            ]
        }
    }    
}