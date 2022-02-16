<template>
  <footer class="mt-16">
    <div class="bg-black mb-[min(8%,100px)]">
      <div class="container py-4 md:py-5">
        <div class="flex items-center mb-2 justify-center md:justify-start">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="mr-5 flex items-center"
          >
            <img class="w-7 h-7" src="/img/instagram.svg" alt="instagram" />
            <span class="font-semibold text-xl m-3 text-white">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="flex items-center"
          >
            <img class="w-7 h-7" src="/img/fb.svg" alt="facebook" />
            <span class="font-semibold text-xl m-3 text-white">Facebook</span>
          </a>
        </div>
        <p
          class="text-white text-sm md:text-xl font-medium text-center md:text-left"
        >
          Privacy policy. All rights reserver 2021.
        </p>
      </div>
    </div>
    <div class="bg-black relative pb-1/5">
      <div
        style="
          background-image: url('/img/logo-white.svg');
          background-size: 106%;
          background-position: 50% -150%;
        "
        class="absolute top-0 left-0 w-full h-full bg-no-repeat"
      ></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
