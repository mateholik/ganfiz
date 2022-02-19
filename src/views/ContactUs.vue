<template>
  <section class="mb-8 md:mb-14">
    <div class="container">
      <!-- <p class="text-center text-base md:text-2xl mb-6 md:mb-16">
        Working with startups & scaleups to design growth-driven
      </p> -->
      <h1
        class="text-[40px] md:text-8xl font-semibold mb-6 md:mb-10 text-center uppercase"
      >
        CONTACT US
      </h1>
      <transition name="fade">
        <form
          v-if="!isMessageSent"
          class="max-w-3xl mx-auto"
          @submit.prevent="submitForm"
        >
          <InputComponent
            type="text"
            label="NAME"
            v-model="v$.form.name.$model"
            :validator="v$.form.name"
          />
          <InputComponent
            type="email"
            label="EMAIL"
            v-model="v$.form.email.$model"
            :validator="v$.form.email"
          />
          <InputComponent
            type="textarea"
            label="ABOUT THE PROJECT"
            v-model="v$.form.message.$model"
            :validator="v$.form.message"
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
  name: "ContactUs",
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
        name: "",
        email: "",
        message: "",
      },
      loading: false,
      isMessageSent: false,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        message: { required },
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
}
</style>
