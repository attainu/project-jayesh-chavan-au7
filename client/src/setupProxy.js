const { createProxyMiddleware }= require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/volunteer/signup', createProxyMiddleware({ target : "http://localhost:4000/", changeOrigin:true }))
    app.use('/volunteer/login', createProxyMiddleware({ target : "http://localhost:4000/", changeOrigin:true }))
    app.use('/volunteer/getuser', createProxyMiddleware({ target : "http://localhost:4000/", changeOrigin:true }))
}