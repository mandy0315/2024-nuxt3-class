import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const count = ref(0);
  function add() {
    count.value++;
  }

  return { count, add };
});
