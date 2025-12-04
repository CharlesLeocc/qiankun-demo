<template>
  <el-button :type="type" :loading="loading">
    <slot />
  </el-button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>