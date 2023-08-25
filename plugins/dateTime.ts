import dayjs from 'dayjs';

const dateFormat = (date: string): string => (date ? dayjs(date).format('YYYY/MM/DD') : '');
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('date-format', {
    mounted(el, binding) {
      const time = dayjs(binding.value).format('YYYY/MM/DD HH:mm:ss');
      el.innerText = time;
    },
  });
  nuxtApp.vueApp.directive('date-format2', {
    mounted(el, binding) {
      const time = dateFormat(binding.value);
      el.innerText = time;
    },
    updated(el, binding) {
      const time = dateFormat(binding.value);
      el.innerText = time;
    },
  });
});
