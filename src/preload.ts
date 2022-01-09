
import {contextBridge, ipcRenderer} from "electron"



contextBridge.exposeInMainWorld("electron",{
    openFolderDialog:()=>{
        return ipcRenderer.invoke("openFolderDialog")
    },

})