<template>
<div>
  <button type="button" @click="open">
    ルートフォルダー選択
  </button>
  {{selectedPath}}

  <div>
    {{tree}}
  </div>
  <div>
    <div>result</div>
    <pre style="text-align:left;">{{result}}</pre>
  </div>
</div>
</template>



<script setup lang="ts">
import { ref } from "vue";
import { ElectronApi } from "@/utils/electron";


// function convertTreeToEmojiFolderTextRecursive(tree:any,depth:number){

// }

function getEmoji(type:"file"|"directory"){
  switch(type){
    case "file":
      return "📄"
    case "directory":
      return "📁"
  }
}

const space=" "
const newline="\n"
function convertTreeToEmojiFolderText(tree:any,depth=0){
  let result=""


  const type=tree.type
  const emoji=getEmoji(type)
  result+=  space.repeat(depth) + emoji + tree.name + newline

  if(type==="file"){
    return result
  }
  
  for(const child of tree.children){
    const t=convertTreeToEmojiFolderText(child,depth+1)
    
    result+=t;
  }

  return result

}

const selectedPath=ref("")
const tree=ref({})
const result=ref("")
const open=async ()=>{
    console.log("open")
    const path=await ElectronApi.openFolderDialog()
    console.log(path)
    selectedPath.value=path

    const dirTree=await ElectronApi.parseFolderStructure(path)
    tree.value=dirTree
    console.log(tree)

    result.value=convertTreeToEmojiFolderText(dirTree)
  }



</script>
