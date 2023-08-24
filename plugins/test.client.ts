export default defineNuxtPlugin(nuxtApp => {
  // 測試 .client 與 .server 的差異
  // 目的為了要在 .client 裡面使用 window
  console.log('test');
});
