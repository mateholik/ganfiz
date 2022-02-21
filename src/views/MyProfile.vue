<template>
  <section class="mb-8 md:mb-14">
    <div class="container">
      <h1
        class="text-[40px] md:text-8xl font-semibold mb-6 md:mb-10 text-center uppercase"
      >
        My profile
      </h1>
      <p
        class="text-xl md:text-3xl text-center font-medium tracking-widest uppercase mb-5"
      >
        Jekaterina Ščiokina
      </p>
      <p class="uppercase text-center mb-7">
        <span class="tracking-widest">narys nuo:</span> 2021 04 03
      </p>
      <div class="md:flex mb-8 md:mb-20">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <div
            class="text-primary text-4xl md:text-7xl mb-2 text-center font-medium"
          >
            2
          </div>
          <div class="text-center text-base md:text-xl uppercase">UŽSAKYMŲ</div>
        </div>
        <div class="md:w-1/2">
          <div
            class="text-primary text-4xl md:text-7xl mb-2 text-center font-medium"
          >
            1015 €
          </div>
          <div class="text-center text-base md:text-xl uppercase">
            Apsipirkote sumai
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-center items-center flex-wrap bg-white -mx-4 pb-4 md:pb-0 mb-10 md:mb-20"
      >
        <div
          v-for="item in tabs"
          :key="item"
          class="tracking-widest whitespace-nowrap md:text-xl transform uppercase mx-[1%] hover:text-primary duration-200 p-3 bg-[#DDDDDD] mb-1 md:bg-transparent md:mb-0 min-w-[200px] md:min-w-0 text-center cursor-pointer"
          :class="{ 'text-primary': activeTab === item }"
          @click="activeTab = item"
        >
          {{ item }}
        </div>
      </div>
      <div v-if="activeTab === tabs[0]">
        <MyOrders :items="orders" />
      </div>
      <div v-else-if="activeTab === tabs[1]">
        <AddressBook />
      </div>
      <div v-else-if="activeTab === tabs[2]">
        <EditProfile />
      </div>
      <div v-else-if="activeTab === tabs[3]">
        <ResetPassword />
      </div>
    </div>
  </section>
</template>

<script>
import MyOrders from "@/components/profile/MyOrders.vue";
import AddressBook from "@/components/profile/AddressBook.vue";
import EditProfile from "@/components/profile/EditProfile.vue";
import ResetPassword from "@/components/profile/ResetPassword.vue";

export default {
  name: "MyProfile",
  components: {
    MyOrders,
    AddressBook,
    EditProfile,
    ResetPassword,
  },
  data() {
    return {
      activeTab: "My ORDERS",
      tabs: ["My ORDERS", "address book", "edit profile", "Reset password"],
      orders: [
        {
          nr: "0021",
          date: "2021 02 28",
          shipping: "omniva paštomatas",
          status: "apmokėta",
          price: "101.50 €",
          pdf: "google.lt",
        },
        {
          nr: "002",
          date: "2021 02 28",
          shipping: "lp express paštomatas",
          status: " ne apmokėta",
          price: "101.50 €",
          pdf: "google.lt",
        },
        {
          nr: "0021",
          date: "2021 02 28",
          shipping: "dpd paštomatas",
          status: "atsaukta",
          price: "101.50 €",
          pdf: "google.lt",
        },
        {
          nr: "002",
          date: "2021 02 28",
          shipping: "lp express paštomatas",
          status: " ne apmokėta",
          price: "101.50 €",
          pdf: "google.lt",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
