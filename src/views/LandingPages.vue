<template>
  <section class="mb-8 md:mb-14">
    <h1
      class="text-[40px] leading-[48px] md:text-8xl font-semibold mb-6 md:mb-14 text-center"
    >
      LANDING PAGES
    </h1>
    <div class="mb-8 md:mb-14">
      <div class="container">
        <div
          class="flex flex-col-reverse md:flex-row items-center justify-between"
        >
          <div class="md:w-1/2 md:mr-[8%] mb-4 md:mb-0">
            <img
              class="mx-auto px-12 md:px-0 mt-8 md:mt-0"
              src="/img/illustration-11.jpg"
              alt="illustration"
            />
          </div>
          <div class="md:w-1/2">
            <h2
              class="text-2xl md:text-4xl mb-4 md:mb-4 uppercase text-center md:text-left"
            >
              Information
            </h2>
            <p class="text-base md:text-xl text-justify">
              We build impactful UX design and branding for product-led
              companies around the world. Using the industry-proven methods Jobs
              to be Done and Design Sprints, we’ve developed a highly optimised
              process that brings results in just a few weeks.
              <br /><br />
              We build impactful UX design and branding for product-led
              companies around the world. Using the industry-proven methods
              <br /><br />
              Jobs to be Done and Design Sprints, we’ve developed a highly
              optimised process that brings results in just a few weeks.When we
              design applications we know about this, and do our best to make
              applications as fast as possible.
            </p>
          </div>
        </div>
        <h2
          class="mt-8 mb-4 md:text-4xl text-center text-2xl md:my-16 uppercase"
        >
          Technologies
        </h2>
        <ul>
          <li
            v-for="(item, index) in list"
            :key="(i = 'id_' + index)"
            class="relative mb-3 md:mb-6 pl-8 md:pl-24 text-justify"
          >
            <span
              class="absolute left-0 md:top-1/2 md:-translate-y-1/2 text-base md:text-5xl text-primary"
              >{{ index + 1 }}.</span
            >
            <span class="text-lg md:text-xl">{{ item }} </span>
          </li>
        </ul>
        <h2
          class="mt-8 mb-4 md:text-4xl text-center text-2xl md:my-16 uppercase"
        >
          Risk factors
        </h2>
        <div class="md:flex">
          <div class="md:w-1/2 md:mr-[8%]">
            <p class="text-justify">
              RISK FACTORS – we build impactful UX design and branding for
              product-led companies around the world. Using the industry-proven
              methods Jobs to be Done and Design Sprints, we’ve developed a
              highly optimised process that brings results in just a few weeks.
              <br /><br />
              RISK FACTORS – we build impactful UX design and branding for
              product-led companies around the world. Using the industry-proven
              methods Jobs to be Done and Design Sprints.
              <br /><br />
              RISK FACTORS – we build impactful UX design and branding for
              product-led companies around the world. Using the industry-proven
              methods Jobs to be Done and Design Sprints, we’ve developed a
              highly optimised process that.
            </p>
          </div>
          <div class="md:w-1/2">
            <p class="text-justify">
              RISK FACTORS – we build impactful UX design and branding for
              product-led companies around the world. Using the industry-proven
              methods Jobs to be Done and Design Sprints.
              <br /><br />
              RISK FACTORS – we build impactful UX design and branding for
              product-led companies around the world. Using the industry-proven
              methods Jobs to be Done and Design Sprints, we’ve developed a
              highly optimised process that brings results in just a few weeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPages",
  data() {
    return {
      list: [
        "When we design applications we know about this, and do our best to make applications as fast as possible.",
        "We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints,",
        "When we design applications we know about this, and do our best to make applications as fast as possible. ",
        "We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints, we’ve developed a highly optimised process that brings results in just a few weeks.",
        "When we design applications we know about this, and do our best to make applications as fast as possible. ",
        "We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints,",
        "We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints,",
        "When we design applications we know about this, and do our best to make applications as fast as possible. ",
        "When we design applications we know about this, and do our best to make applications as fast as possible. ",
        "We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints, we’ve developed a highly optimised process that brings results in just a few weeks.",
      ],
    };
  },
};
</script>
<style scoped></style>
