const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 200,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: false,
    webPreferences: {
    webviewTag: true, // Corregido: "v" minúscula
    nodeIntegration: true,
    contextIsolation: false
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

function abrir(url) {
    // Si estás en Android, este protocolo intenta abrir Chrome directamente
    const urlChrome = "intent://" + url.replace("https://", "") + "#Intent;scheme=https;package=com.android.chrome;end";
    
    // Intentamos abrir Chrome
    window.location.href = urlChrome;

    // Si en 500ms no pasó nada (porque no es Android o falló), lo abre normal
    setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }, 500);
}

