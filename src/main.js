const {app, BrowserWindow} = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 370,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    
    mainWindow.loadFile('src/pages/index.html');
});