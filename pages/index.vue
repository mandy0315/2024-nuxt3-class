<script lang="ts" setup>
// const { count, add } = useAddCount();
const mainStore = useMainStore();
const { $hello } = useNuxtApp();

const date = ref(new Date());
</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>{{ mainStore.count }}</h2>
    <client-only>
      <h3>{{ $hello('mandy') }}</h3>
    </client-only>
    <h4 v-date-format="1692783692777"></h4>

    <button @click="mainStore.add()">add</button>
    <home />
    <box />

    <p>選擇日期：<span v-date-format2="date"></span></p>
    <VDatePicker v-model="date" mode="date" />

    <div>
      <nuxt-link to="/user">to user</nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
