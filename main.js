const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600});
    mainWindow.loadURL('https://chat.openai.com/chat');
}

app.on('ready', createWindow);