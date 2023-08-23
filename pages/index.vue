<script lang="ts" setup>
// const { count, add } = useAddCount();
const mainStore = useMainStore();
</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>{{ mainStore.count }}</h2>
    <button @click="mainStore.add()">add</button>
    <home />
    <box />
  </div>
</template>

<style scoped></style>
