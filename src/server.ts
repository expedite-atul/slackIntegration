import App from "./app";

let server = App.instance.listen(3000);

server.on('listening', function () {
    console.log(`Server started listening on port 3000`);
});