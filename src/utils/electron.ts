export class ElectronApi {
  public static openFolderDialog() {
    console.log((window as any).electron);
    return (window as any).electron.openFolderDialog();
  }

  public static parseFolderStructure(dirPath: string) {
    return (window as any).electron.parseFolderStructure(dirPath);
  }
}
