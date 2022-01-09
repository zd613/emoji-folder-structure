<template>
  <div>
    <pre class="text-left bg-gray-100">{{ text }}</pre>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  text: string;
}>();
</script>
