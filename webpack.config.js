const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true,
                        minimize: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true,
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },

    plugins: [
        /*css files*/
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        /* Home page*/
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'index.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8'),
            content: fs.readFileSync('./src/content/home-content.html')
        }),
        /* Camping page*/
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'camping.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8')
        }),
        /* Omgeving page */
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'omgeving.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8')
        }),
        /* Contact page */
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'contact.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8')
        }),
        /* Prijzen page */
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'prijzen.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8')
        }),
        /* Apartement page */
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'apartement.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8')
        }),
        /* Foto page */
        new HtmlWebpackPlugin({
            template: './src/templates/page.html',
            filename: 'fotos.html',
            menu: fs.readFileSync('./src/templates/menu.html', 'utf8')
        }),
    ]
};
