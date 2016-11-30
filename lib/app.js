import express from "express";

const app = express();
app.attach = function(httpServer) {
    httpServer.on("request", app);//detach use httpServer.off
};
app.detach = function(httpServer) {
    httpServer.off("request", app);
};

app.use(express.static("public"));//记住：就是public，没有../等
export default app;//express的中间件是funciton，不是实例
