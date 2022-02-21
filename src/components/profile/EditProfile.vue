<template>
  <h2 class="uppercase font-medium text-4xl md:text-6xl text-center mb-14">
    edit profile
  </h2>
  <form @submit.prevent="submitForm">
    <div class="md:flex">
      <div class="md:w-1/2 md:mr-[8%] mb-14 md:mb-0">
        <div class="text-2xl md:text-3xl font-medium text-center mb-8 md:mb-12">
          PERSONAL INFORMATION
        </div>
        <InputComponent
          type="text"
          label="FIRST NAME"
          v-model="v$.form.firstName.$model"
          :validator="v$.form.firstName"
        />
        <InputComponent
          type="text"
          label="LAST NAME"
          v-model="v$.form.lastName.$model"
          :validator="v$.form.lastName"
        />
        <InputComponent
          type="email"
          label="EMAIL"
          v-model="v$.form.email.$model"
          :validator="v$.form.email"
        />
        <InputComponent
          type="text"
          label="PHONE"
          v-model="v$.form.phone.$model"
          :validator="v$.form.phone"
        />
      </div>
      <div class="md:w-1/2">
        <div class="text-2xl md:text-3xl font-medium text-center mb-8 md:mb-12">
          COMPANY INFORMATION
        </div>
        <InputComponent
          type="text"
          label="COMPANY NAME"
          v-model="v$.form.companyName.$model"
          :validator="v$.form.companyName"
        />
        <InputComponent
          type="text"
          label="COMPANY CODE"
          v-model="v$.form.companyCode.$model"
          :validator="v$.form.companyCode"
        />
        <InputComponent
          type="text"
          label="COMPANY VAT"
          v-model="v$.form.companyVat.$model"
          :validator="v$.form.companyVat"
        />
        <InputComponent
          type="text"
          label="COMPANY ADDRESS"
          v-model="v$.form.companyAddress.$model"
          :validator="v$.form.companyAddress"
        />
      </div>
    </div>
    <div class="mt-14">
      <div class="text-2xl md:text-3xl font-medium text-center mb-8 md:mb-12">
        PAYMENT INFORMATION
      </div>
      <InputComponent
        type="text"
        label="BANK ACCOUNT"
        v-model="v$.form.bankAccount.$model"
        :validator="v$.form.bankAccount"
      />
      <div class="md:flex">
        <div class="md:w-1/2 md:mr-[8%] mb-14 md:mb-0">
          <InputComponent
            type="text"
            label="BANK NAME"
            v-model="v$.form.bankName.$model"
            :validator="v$.form.bankName"
          />
        </div>
        <div class="md:w-1/2">
          <InputComponent
            type="text"
            label="SWIFT CODE"
            v-model="v$.form.swiftCode.$model"
            :validator="v$.form.swiftCode"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import InputComponent from "@/components/InputComponent.vue";
export default {
  name: "EditProfile",
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        companyCode: "",
        companyVat: "",
        companyAddress: "",
        bankAccount: "",
        bankName: "",
        swiftCode: "",
      },
      loading: false,
      isMessageSent: false,
    };
  },
  validations() {
    return {
      form: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        phone: { required },
        companyName: { required },
        companyCode: { required },
        companyVat: { required },
        companyAddress: { required },
        bankAccount: { required },
        bankName: { required },
        swiftCode: { required },
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
