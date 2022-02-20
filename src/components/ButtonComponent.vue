<template>
  <component
    :is="as"
    v-bind="dynamicProps"
    class="max-w-[220px] w-full md:max-w-[312px] p-4 md:p-[30px] font-semibold text-sm md:text-xl border rounded-md md:rounded-xl flex justify-center items-center cursor-pointer leading-none duration-200 transition tracking-widest"
    :class="
      theme !== 'light'
        ? 'hover:bg-white hover:text-primary hover:border-gray-500 bg-black text-white border-black'
        : 'bg-white text-primary border-gray-500 hover:bg-black hover:text-white hover:border-black'
    "
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    as: {
      type: String,
      default: "button",
      validator(value) {
        return ["router-link", "button", "a"].includes(value);
      },
    },
    to: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  computed: {
    dynamicProps() {
      const props = {};
      if (this.to) props.to = this.to;
      if (this.href) props.href = this.href;
      if (this.as === "button") props.type = this.type || "button";

      return props;
    },
  },
};
</script>

<style></style>
