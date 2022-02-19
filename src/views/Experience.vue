<template>
  <section class="mb-8 md:mb-20">
    <div class="container">
      <h1
        class="text-[40px] md:text-8xl font-semibold mb-6 md:mb-10 text-center"
      >
        EXPERIENCE
      </h1>
      <p class="text-center text-2xl md:text-4xl mb-8 md:mb-14">
        AVAILABLE TECHNOLOGIES
      </p>
      <div class="grid grid-cols-3 md:grid-cols-5 gap-10">
        <div v-for="item in technologies" :key="item.name" class="group">
          <img
            class="mx-auto group-hover:scale-105 transition duration-200"
            :src="`/img/${item.logo}`"
            :alt="item.name"
          />
          <span class="text-base md:text-xl block text-center mt-5">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h1 class="text-[40px] md:text-8xl mb-4 md:mb-6 text-center">
        TECHNICAL SOLUTIONS
      </h1>
      <p
        class="text-base md:text-xl text-justify md:text-center mb-4 md:mb-8 max-w-4xl mx-auto"
      >
        We build impactful UX design and branding for product-led companies
        around the world. Using the industry-proven methods Jobs to be Done and
        Design Sprints, we’ve developed a highly optimised process that brings
        results in just a few weeks.
      </p>
      <div class="mb-10 md:mb-14">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="w-full md:w-1/2 md:mr-[8%] mb-4 md:mb-0">
            <img
              class="mx-auto px-12 md:px-0"
              src="/img/illustration-11.jpg"
              alt="illustration"
            />
          </div>
          <div class="w-full md:w-1/2">
            <ButtonComponent class="mx-auto">LANDING PAGES</ButtonComponent>
          </div>
        </div>
      </div>
      <div class="mb-10 md:mb-14">
        <div
          class="flex flex-col-reverse md:flex-row items-center justify-between"
        >
          <div class="w-full md:w-1/2 md:mr-[8%] mt-4 md:mt-0">
            <ButtonComponent class="mx-auto" theme="dark"
              >E-COMMERCE</ButtonComponent
            >
          </div>
          <div class="w-full md:w-1/2">
            <img
              class="mx-auto px-12 md:px-0"
              src="/img/illustration-12.jpg"
              alt="illustration"
            />
          </div>
        </div>
      </div>
      <div class="mb-10 md:mb-14">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="w-full md:w-1/2 md:mr-[8%] mb-4 md:mb-0">
            <img
              class="mx-auto px-12 md:px-0"
              src="/img/illustration-13.jpg"
              alt="illustration"
            />
          </div>
          <div class="w-full md:w-1/2">
            <ButtonComponent class="mx-auto">E-LEARNING</ButtonComponent>
          </div>
        </div>
      </div>
      <div class="mb-10 md:mb-14">
        <div
          class="flex flex-col-reverse md:flex-row items-center justify-between"
        >
          <div class="w-full md:w-1/2 md:mr-[8%] mt-4 md:mt-0">
            <ButtonComponent class="mx-auto" theme="dark">CRM</ButtonComponent>
          </div>
          <div class="w-full md:w-1/2">
            <img
              class="mx-auto px-12 md:px-0"
              src="/img/illustration-14.jpg"
              alt="illustration"
            />
          </div>
        </div>
      </div>
      <div class="mb-10 md:mb-14">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="w-full md:w-1/2 md:mr-[8%] mb-4 md:mb-0">
            <img
              class="mx-auto px-12 md:px-0"
              src="/img/illustration-15.jpg"
              alt="illustration"
            />
          </div>
          <div class="w-full md:w-1/2">
            <ButtonComponent class="mx-auto">E-AUCTION</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "Experience",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      technologies: [
        {
          logo: "logo-mysql.svg",
          name: "MySQL",
        },
        {
          logo: "logo-php.svg",
          name: "PHP",
        },
        {
          logo: "logo-python.svg",
          name: "Python",
        },
        {
          logo: "logo-java.svg",
          name: "Java",
        },
        {
          logo: "logo-laravel.svg",
          name: "Laravel",
        },
        {
          logo: "logo-postgresql.svg",
          name: "PostgreSQL",
        },
        {
          logo: "logo-bootstrap.svg",
          name: "Bootstrap",
        },
        {
          logo: "logo-vue.svg",
          name: "Vue.js",
        },
        {
          logo: "logo-react.svg",
          name: "React",
        },
        {
          logo: "logo-js.svg",
          name: "JS",
        },
        {
          logo: "logo-css.svg",
          name: "CSS",
        },
        {
          logo: "logo-html.svg",
          name: "HTML",
        },
        {
          logo: "logo-adobe-xd.svg",
          name: "Adobe XD",
        },
        {
          logo: "logo-adobe-photoshop.svg",
          name: "Adobe Photoshop",
        },
        {
          logo: "logo-adobe-illustrator.svg",
          name: "Adobe Illustrator",
        },
        {
          logo: "logo-adobe-after-effects.svg",
          name: "Adobe After Effects",
        },
        {
          logo: "logo-adobe-media-encoder.svg",
          name: "Adobe Media Encoder",
        },
        {
          logo: "logo-adobe-lightroom.svg",
          name: "Adobe Lightroom",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
