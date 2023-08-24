<script lang="ts" setup>
// const { count, add } = useAddCount();
const mainStore = useMainStore();
const { $hello } = useNuxtApp();
</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>{{ mainStore.count }}</h2>
    <client-only>
      <h3>{{ $hello('mandy') }}</h3>
    </client-only>
    <h4 v-date-format="1692783692777"></h4>
    <h4 v-date-format2="1692783692777"></h4>
    <button @click="mainStore.add()">add</button>
    <home />
    <box />

    <nuxt-link to="/user">to user</nuxt-link>
  </div>
</template>

<style scoped></style>
