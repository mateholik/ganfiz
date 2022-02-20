<template>
  <div class="mb-6 md:mb-10">
    <label
      class="text-primary text-lg md:text-xl font-medium text-center uppercase block tracking-widest"
      :for="label"
      >{{ label }}</label
    >
    <div class="relative">
      <img
        v-if="validator.$errors.length > 0"
        src="/img/exclamation.svg"
        class="absolute bottom-1/2 transform translate-y-1/2 left-0 w-6 md:w-8 h-auto"
        alt="error"
      />
      <img
        v-if="password && validator.$errors.length < 1"
        src="/img/eye.svg"
        class="absolute bottom-1/2 transform translate-y-1/2 left-0 w-6 md:w-10 h-auto cursor-pointer"
        alt="show password"
        @click="$emit('passwordVisibility')"
      />
      <textarea
        v-if="type === 'textarea'"
        class="outline-none py-2 px-12 text-base md:text-lg border-b border-gray-300 block w-full text-center"
        :id="label"
        :type="type"
        :value="modelValue"
        @input="updateValue"
      ></textarea>
      <input
        autocomplete="off"
        v-else
        class="outline-none py-2 px-12 text-base md:text-lg border-b border-gray-300 block w-full text-center"
        :id="label"
        :type="type"
        :value="modelValue"
        @input="updateValue"
      />
    </div>

    <p
      v-for="error of validator.$errors"
      :key="error.$uid"
      class="mt-1 text-primary text-sm md:text-base"
    >
      {{ error.$message }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    validator: {
      type: [Object, undefined],
      default: undefined,
    },
    password: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
