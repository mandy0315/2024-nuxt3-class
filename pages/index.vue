<script lang="ts" setup>
const { count, add } = useAddCount();
</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>{{ count }}</h2>
    <button @click="add">add</button>
    <home />
    <box />
  </div>
</template>

<style scoped></style>
