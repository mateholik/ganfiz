<template>
  <section class="mb-8 md:mb-14">
    <div class="container">
      <h1 class="text-[40px] md:text-8xl font-semibold text-center uppercase">
        Forgot Password
      </h1>
      <p
        class="mb-6 md:mb-10 text-center text-xl md:text-2xl font-medium mt-3 md:mt-6"
      >
        We will send you an email <br />
        to reset your password.
      </p>
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
          <ButtonComponent as="button" class="mx-auto" type="submit"
            ><span v-if="!loading">SUBMIT</span>
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
  name: "ForgotPassword",
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
      form: {
        email: "",
      },
      loading: false,
      isMessageSent: false,
    };
  },
  validations() {
    return {
      form: {
        email: { required, email },
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
