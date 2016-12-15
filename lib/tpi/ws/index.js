import server from "../../ws/server";

const tpiNamespace = server.of("/tpi/rs");

tpiNamespace.on("connection", socket =>{
    console.log("connection in");
});

setTimeout(() => {
    tpiNamespace.emit("update");
}, 1000 * 10 * Math.random());

export default tpiNamespace;
