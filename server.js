let express = require('express');
let serverConfig = require("./config/server.config");
let expressApp = express();
const router = require("./routes/index");
expressApp.use(router);

expressApp.listen(serverConfig.PORT,() =>{
    console.log("server is running on port " + serverConfig.PORT);
});