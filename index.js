import config from "config";//不能加./，不然就是找config下的index

import app from "./lib/app";
import httpServer from "./lib/http/server";


(function main()
{
    checkEnvironment();
    startHttpServer();
})();


function checkEnvironment()
{
    const env = app.get("env");
    if (env === "development")
    {
        console.log("Server is now running at [DEVELOPMENT] mode.");
    }
    else if (env === "production")
    {
        console.log("Server is now running at [PRODUCTON] mode.");
    }
    else
    {
        throw new Error("Unsupported mode.");
    }
}

function startHttpServer()
{
    // const port = parseInt(config.get("http.port")) + parseInt(process.env.NODE_APP_INSTANCE);
    const port = parseInt(config.get("http.port"));
    if (isNaN(port))
    {
        throw new Error(`"http.port" must be number.`);
    }
    app.attach(httpServer);
    httpServer.listen(port, () => {
        console.log(`The server is now listening at port ${port}...`);
    });
}
