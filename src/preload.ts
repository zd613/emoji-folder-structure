
import {contextBridge, ipcRenderer} from "electron"



contextBridge.exposeInMainWorld("electron",{
    openFolderDialog:()=>{
        return ipcRenderer.invoke("openFolderDialog")
    },
    parseFolderStructure:(dirPath:string)=>{
        return ipcRenderer.invoke("parseFolderStructure",dirPath)
    }
})