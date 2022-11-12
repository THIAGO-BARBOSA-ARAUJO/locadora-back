import express from 'express';
import dotenv from "dotenv";
import routertasks from "./routes/routerTasks.js";
dotenv.config();
var server = express();
server.use(express.json());
server.use(routertasks);
server.get('/health', function (req, res) {
    res.send('ok');
});
server.listen(process.env.PORT, function () {
    console.log('Ta executando...');
});
