<template>
  <h2 class="uppercase font-medium text-4xl md:text-6xl text-center mb-14">
    Reset Password
  </h2>
  <form @submit.prevent="submitForm" class="max-w-xl mx-auto">
    <InputComponent
      type="password"
      label="Current password"
      v-model="v$.form.passwordCurrent.$model"
      :validator="v$.form.passwordCurrent"
    />
    <InputComponent
      type="password"
      label="new password"
      v-model="v$.form.passwordNew.$model"
      :validator="v$.form.passwordNew"
    />
    <InputComponent
      type="password"
      label="Repeat new password"
      v-model="v$.form.passwordNewRepeat.$model"
      :validator="v$.form.passwordNewRepeat"
    />
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import InputComponent from "@/components/InputComponent.vue";
export default {
  name: "ResetPassword",
  components: {
    InputComponent,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      form: {
        passwordCurrent: "",
        passwordNew: "",
        passwordNewRepeat: "",
      },
      loading: false,
      isMessageSent: false,
    };
  },
  validations() {
    return {
      form: {
        passwordCurrent: { required },
        passwordNew: { required },
        passwordNewRepeat: { required },
      },
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.loading = true;
      setTimeout(() => {
        console.log("formData", this.form);
        this.clearForm();
        this.loading = false;
        this.isMessageSent = true;
        setTimeout(() => {
          this.isMessageSent = false;
        }, 2000);
      }, 1500);
    },
    clearForm() {
      this.v$.$reset();
      Object.keys(this.form).forEach((key) => {
        this.form[key] = "";
      });
    },
  },
};
</script>

<style></style>
