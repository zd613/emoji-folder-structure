import {ipcMain} from "electron"



export function registerIpcMain(){
    ipcMain.handle("test",()=>{
        console.log("test")
    })
}