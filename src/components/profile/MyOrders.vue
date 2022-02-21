<template>
  <h2 class="uppercase font-medium text-4xl md:text-6xl text-center mb-14">
    My orders
  </h2>
  <div class="overflow-x-scroll">
    <div class="min-w-[768px]">
      <div
        class="flex border-b text-primary font-medium text-base md:text-xl justify-between pb-2 md:pb-4 text-center mb-2 md:mb-4 uppercase tracking-widest"
      >
        <div class="w-2/12 mx-[1%]">Nr.</div>
        <div class="w-2/12 mx-[1%]">DATE</div>
        <div class="w-4/12 mx-[1%]">pristatymo būdas</div>
        <div class="w-2/12 mx-[1%]">statusas</div>
        <div class="w-2/12 mx-[1%]">SUMA</div>
        <div class="w-2/12 mx-[1%]">INVOICE</div>
      </div>
      <div
        v-for="item in items"
        :key="item.nr"
        class="flex border-b font-medium text-sm md:text-base pb-2 md:pb-4 text-center w-full mb-2 md:mb-4 items-center tracking-widest uppercase"
      >
        <div class="w-2/12 mx-[1%]">
          {{ item.nr }}
        </div>
        <div class="w-2/12 mx-[1%]">
          {{ item.date }}
        </div>
        <div class="w-4/12 mx-[1%]">
          {{ item.shipping }}
        </div>
        <div class="w-2/12 mx-[1%]">
          {{ item.status }}
        </div>
        <div class="w-2/12 mx-[1%]">
          {{ item.price }}
        </div>
        <div class="w-2/12 mx-[1%]">
          <a :href="item.pdf" target="_blank">
            <img class="w-9 mx-auto" src="/img/pdf.svg" alt="download pdf" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrders",
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
