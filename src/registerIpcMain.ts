import { ipcMain, dialog } from "electron";
// import dirTree from "directory-tree";
import * as dree from "dree";

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

async function parseFolderStructure(event: any, rootDirPath: string) {
  // const tree = dirTree(rootDirPath, {
  //   attributes: ["type"],
  // });
  console.log("dree");
  console.log(dree);
  console.log(dree.scanAsync);
  const tree = await dree.scanAsync(rootDirPath, {
    // TODO?
  });
  console.log(tree);
  return tree;
}

export function registerIpcMain() {
  ipcMain.handle("openFolderDialog", openFolderDialog);
  ipcMain.handle("parseFolderStructure", parseFolderStructure);
}
