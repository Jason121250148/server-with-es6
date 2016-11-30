import httpServer from "./lib/http/server";

const PORT = 8000;
httpServer.listen(PORT, () => {
    console.log(`The server is now listening at port ${PORT}...`);
});
