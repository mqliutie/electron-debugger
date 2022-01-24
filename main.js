const { BrowserWindow, app } = require("electron");

app.whenReady().then(async () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  await mainWindow.loadFile("./index.html");
  let times = 0;
  setInterval(() => {
    BrowserWindow.fromId(1).webContents?.send("test-debugger", ++times);
  }, 1000);
});
