<template>
  <div
    class="max-w-[220px] w-full md:max-w-[312px] p-4 md:p-[30px] font-semibold text-sm md:text-xl border rounded-md md:rounded-xl flex justify-center items-center cursor-pointer leading-none duration-200 transition tracking-[5px]"
    :class="
      theme !== 'light'
        ? 'hover:bg-white hover:text-primary hover:border-gray-500 bg-black text-white border-black'
        : 'bg-white text-primary border-gray-500 hover:bg-black hover:text-white hover:border-black'
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
};
</script>

<style></style>
