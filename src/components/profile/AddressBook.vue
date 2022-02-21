<template>
  <h2 class="uppercase font-medium text-4xl md:text-6xl text-center mb-14">
    address book
  </h2>
  <form @submit.prevent="submitForm" class="md:flex">
    <div class="md:w-1/2 md:mr-[8%] mb-14 md:mb-0">
      <InputComponent
        type="text"
        label="registacijos adresas"
        v-model="v$.form.addressRegistration.$model"
        :validator="v$.form.addressRegistration"
        :editIcon="true"
      />
      <div class="uppercase text-lg text-center">
        <p>taikos pr. 80A</p>
        <p>lt – 93162, visaginas</p>
      </div>
    </div>
    <div class="md:w-1/2">
      <InputComponent
        type="text"
        label="pristatymo adresas"
        v-model="v$.form.addressShipping.$model"
        :validator="v$.form.addressShipping"
        :editIcon="true"
      />
      <div class="uppercase text-lg text-center">
        <p>visagino viada paštomas</p>
        <p>statybininkų g. 1, visaginas</p>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import InputComponent from "@/components/InputComponent.vue";
export default {
  name: "AddressBook",
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
        addressRegistration: "",
        addressShipping: "",
      },
      loading: false,
      isMessageSent: false,
    };
  },
  validations() {
    return {
      form: {
        addressRegistration: { required },
        addressShipping: { required },
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
