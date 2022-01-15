<template>
  <button
    type="button"
    class="copy-btn p-2 rounded border-2 border-gray-400 text-gray-800"
    :data-clipboard-text="copyText"
  >
    コピーする
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, defineProps } from "vue";
import ClipboardJS from "clipboard";

defineProps<{
  copyText: string;
}>();

let clipboard: ClipboardJS | null = null;
onMounted(() => {
  clipboard = new ClipboardJS(".copy-btn");

  clipboard.on("success", (e) => {
    alert("コピーしました。");
    e.clearSelection();
  });

  clipboard.on("error", () => {
    alert("コピー失敗しました。");
  });
});

onUnmounted(() => {
  clipboard?.destroy();
});
</script>
