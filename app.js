const express=require("express")
const app=express()
const config=require("./config")
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use("/login",createProxyMiddleware({
    target:config.login_URL,
    changeOrigin:true,
    
}))

app.use("/signup",createProxyMiddleware({
    target:config.login_URL,
    changeOrigin:true,
   
}))
app.use("/get-task",createProxyMiddleware({
    target:config.todo_URL,
    changeOrigin:true,
}))
app.use("/create",createProxyMiddleware({
    target:config.todo_URL,
    changeOrigin:true,
}))
app.use("/done-task",createProxyMiddleware({
    target:config.todo_URL,
    changeOrigin:true,
}))
app.use("/delete-task",createProxyMiddleware({
    target:config.todo_URL,
    changeOrigin:true,
}))//npm install dotenv

module.exports=app