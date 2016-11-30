import app from "./lib/app";
import httpServer from "./lib/http/server";

const PORT = 8000;
app.attach(httpServer);
httpServer.listen(PORT, () => {
    console.log(`The server is now listening at port ${PORT}...`);
});
