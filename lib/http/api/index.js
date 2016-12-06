import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
    // console.log(`Client request to "api/**" has been intercept.`);
    // res.status(403).end("Forbidden");
    next();
});//拦截所有的请求，记得next,在use第一个参数加"/api"就是对api进行拦截

router.use("/tpi", require("../../tpi/api").default);

export default router;
