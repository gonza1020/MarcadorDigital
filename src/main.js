const {BrowserWindow,ipcMain} = require("electron")
const {getConnection} = require("./database")


ipcMain.on("async-msg", (e,arg)=>{
    console.log(arg);
    e.reply("async-reply","Pong")
})

let window

function createWindow (){
   window =  new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            nodeIntegrationInWorker: true 
        }
    })
    
    window.loadFile("src/ui/index.html");
}

module.exports = {
    createWindow,
}