import {ipcMain,dialog} from "electron"


/**
 * 
 * @returns selectedPath
 */
async function openFolderDialog(){
    const returnValue=await  dialog.showOpenDialog({
        properties:["openDirectory"]
    })

    if(returnValue.canceled){
        return ""
    }

    // 選択されたパスをひとつ返す
    const path=returnValue.filePaths[0]
    return path
}


export function registerIpcMain(){
    ipcMain.handle("openFolderDialog",openFolderDialog)
}