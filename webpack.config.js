const path = require("path");
   
module.exports = {
    mode: "development",
    entry: "./src/app.tsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
     historyApiFallback: true,
     static: {
      directory: path.join(__dirname, "/"),
    },
     port: 8082,
     open: true
   },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    }
}