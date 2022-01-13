<template>
  <div>
    <FolderSelectArea @click="open">ルートフォルダー選択</FolderSelectArea>

    <div>選択フォルダー: {{ selectedPath }}</div>

    <div>
      <EmojiFolderStructureTextArea :text="result" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElectronApi } from "@/utils/electron";
import FolderSelectArea from "@/components/FolderSelectArea.vue";
import EmojiFolderStructureTextArea from "@/components/EmojiFolderStructureTextArea.vue";

// function convertTreeToEmojiFolderTextRecursive(tree:any,depth:number){

// }

function getEmoji(type: "file" | "directory") {
  switch (type) {
    case "file":
      return "📄";
    case "directory":
      return "📁";
  }
}

const space = " ";
const newline = "\n";
function convertTreeToEmojiFolderText(tree: any, depth = 0) {
  let result = "";

  const type = tree.type;
  const emoji = getEmoji(type);
  result += space.repeat(depth) + emoji + tree.name + newline;

  if (type === "file") {
    return result;
  }

  for (const child of tree.children) {
    const t = convertTreeToEmojiFolderText(child, depth + 1);

    result += t;
  }

  return result;
}

const selectedPath = ref("");
const tree = ref({});
const result = ref("");
const open = async () => {
  console.log("open");
  const path = await ElectronApi.openFolderDialog();
  console.log(path);
  selectedPath.value = path;

  // キャンセルされた
  if (path === "") {
    return;
  }
  const timeout = (msec: number) => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("timeout error"));
      }, msec);
    });
  };

  let dirTree: any;
  try {
    dirTree = await Promise.race([
      ElectronApi.parseFolderStructure(path),
      timeout(4000),
    ]);
  } catch (e: any) {
    console.error(e);
    console.log(e.message);
    if (e.message === "timeout error") {
      // timeout
      alert("エラー:タイムアウトしました。");
      return;
    }
    throw e;
  }

  // const dirTree = await ElectronApi.parseFolderStructure(path);
  tree.value = dirTree;
  console.log(tree);

  result.value = convertTreeToEmojiFolderText(dirTree);
};
</script>
