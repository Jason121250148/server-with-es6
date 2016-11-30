import express from "express";

const app = express();
app.attach = function(httpServer) {
    httpServer.on("request", app);
};
app.detach = function(httpServer) {
    httpServer.off("request", app);//detach use httpServer.off
};

app.use(express.static("public"));//记住：就是public，没有../等
app.use("/api", require("./http/api").default);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status);
    res.send(`HTTP-${status}`);
});//this is generic error handling

export default app;//express的中间件是funciton，不是实例
