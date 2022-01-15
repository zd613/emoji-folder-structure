<template>
  <div>
    <pre
      class="text-left bg-gray-50 shadow-lg p-2 border-2 border-gray-400 rounded"
      >{{ text }}</pre
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  text: string;
}>();
</script>
