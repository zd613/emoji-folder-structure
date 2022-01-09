<template>
  <button
    type="button"
    @click="$emit('click', $event)"
    class="bg-white p-2 text-xl font-semibold rounded"
  >
    フォルダーを選択する
  </button>
</template>
