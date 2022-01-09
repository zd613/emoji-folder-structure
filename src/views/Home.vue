<template>
<div>
  <button type="button" @click="open">
    ルートフォルダー選択
  </button>
  {{selectedPath}}

  <div>
    {{tree}}
  </div>
</div>
</template>



<script setup lang="ts">
import { ref } from "vue";
import { ElectronApi } from "@/utils/electron";

const selectedPath=ref("")
const tree=ref({})
const open=async ()=>{
    console.log("open")
    const path=await ElectronApi.openFolderDialog()
    console.log(path)
    selectedPath.value=path

    const dirTree=await ElectronApi.parseFolderStructure(path)
    tree.value=dirTree
    console.log(tree)
  }



</script>
