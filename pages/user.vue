<script setup lang="ts">
definePageMeta({
  // middleware: (to, from) => {
  //   console.log(to, from);
  // },
  middleware: ['auth'],
});
</script>

<template>
  <div>Hello</div>
</template>
