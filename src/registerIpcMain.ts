import { ipcMain, dialog } from "electron";
import dirTree from "directory-tree";

/**
 *
 * @returns selectedPath
 */
async function openFolderDialog() {
  const returnValue = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (returnValue.canceled) {
    return "";
  }

  // 選択されたパスをひとつ返す
  const path = returnValue.filePaths[0];
  return path;
}

function parseFolderStructure(event: any, rootDirPath: string) {
  const tree = dirTree(rootDirPath, {
    attributes: ["type"],
  });
  return tree;
}

export function registerIpcMain() {
  ipcMain.handle("openFolderDialog", openFolderDialog);
  ipcMain.handle("parseFolderStructure", parseFolderStructure);
}
