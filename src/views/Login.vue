<template>
  <section class="mb-8 md:mb-14">
    <div class="container">
      <h1
        class="text-[40px] md:text-8xl font-semibold mb-6 md:mb-10 text-center uppercase"
      >
        Login
      </h1>
      <transition name="fade">
        <form
          v-if="!isMessageSent"
          class="max-w-3xl mx-auto"
          @submit.prevent="submitForm"
        >
          <InputComponent
            type="email"
            label="EMAIL"
            v-model="v$.form.email.$model"
            :validator="v$.form.email"
          />
          <InputComponent
            :type="passwordInputType"
            :password="true"
            label="password"
            v-model="v$.form.password.$model"
            :validator="v$.form.password"
            @passwordVisibility="showPassword = !showPassword"
          />
          <ButtonComponent as="button" class="mx-auto" type="submit"
            ><span v-if="!loading">SIGN IN</span>
            <div v-else><LoaderComponent /></div
          ></ButtonComponent>
        </form>
        <div v-else class="max-w-[620px] mx-auto">
          <img class="w-full h-auto" src="/img/sent.jpg" alt="message sent" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import ButtonComponent from "@/components/ButtonComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
  name: "Login",
  components: {
    ButtonComponent,
    InputComponent,
    LoaderComponent,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      showPassword: false,
      passwordInputType: "password",
      form: {
        email: "",
        password: "",
      },
      loading: false,
      isMessageSent: false,
    };
  },
  watch: {
    showPassword: function (val) {
      this.passwordInputType = val === true ? "text" : "password";
    },
  },
  validations() {
    return {
      form: {
        email: { required, email },
        password: { required },
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
<style scoped></style>
