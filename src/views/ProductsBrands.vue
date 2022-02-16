<template>
  <section class="mb-8 md:mb-14">
    <div class="container">
      <p class="text-center text-base md:text-2xl mb-6 md:mb-16">
        Working with startups & scaleups to design growth-driven
      </p>
      <h1 class="text-5xl md:text-8xl text-center mb-4">
        <span class="block font-semibold">PRODUCTS</span>
        <span
          class="block relative top-[-16px] md:top-[-35px] left-[-9px] md:left-[-20px]"
        >
          <span class="transparent-text text-6xl md:text-9xl font-semibold"
            >&</span
          >
          <span class="font-normal">BRANDS</span>
        </span>
      </h1>
      <div class="md:grid grid-cols-2 gap-10 max-w-2xl mx-auto mb-4 md:mb-8">
        <Button class="mx-auto mb-4 md:mb-0" theme="dark">WEB PUSLAPIS</Button>
        <Button class="mx-auto mb-4 md:mb-0">E-SHOP</Button>
        <Button class="mx-auto mb-4 md:mb-0">CALL ME</Button>
        <Button class="mx-auto">CUSTOM-MADE</Button>
      </div>
      <p class="text-base md:text-xl text-center">Avg response time: 54min</p>
    </div>
  </section>
  <section>
    <div class="container">
      <h1 class="text-[40px] md:text-8xl mb-4 md:mb-6 text-center">
        HOW WE DELIVER
      </h1>
      <p class="text-base md:text-xl text-justify md:text-center mb-4 md:mb-8">
        We build impactful UX design and branding for product-led companies
        around the world. Using the industry-proven methods Jobs to be Done and
        Design Sprints, we’ve developed a highly optimised process that brings
        results in just a few weeks.
      </p>
      <div class="md:flex">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <img
            class="mb-4 md:mb-6 mx-auto px-12 md:px-0"
            src="/img/illustration-9.jpg"
            alt="illustration"
          />
          <p class="text-center mb-4 md:mb-6 text-xl md:text-2xl font-medium">
            PRODUCTS
          </p>
          <Button theme="dark" class="mx-auto">EXPLORE SPRINT</Button>
        </div>
        <div class="md:w-1/2">
          <img
            class="mb-6 mx-auto px-12 md:px-0"
            src="/img/illustration-10.jpg"
            alt="illustration"
          />
          <p class="text-center mb-4 md:mb-6 text-xl md:text-2xl font-medium">
            BRANDING
          </p>
          <Button theme="dark" class="mx-auto">EXPLORE SPRINT</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>
<style scoped></style>
