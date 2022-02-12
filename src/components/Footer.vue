<template>
  <footer class="mt-16">
    <div class="bg-black mb-[min(8%,100px)]">
      <div class="container py-3 md:py-5">
        <div class="flex items-center mb-2">
          <a href="#" class="w-24 md:w-40 mr-5">
            <img
              class="h-auto w-full"
              src="/img/instagram.svg"
              alt="instagram"
            />
          </a>
          <a href="#" class="w-24 md:w-40 mr-5">
            <img class="h-auto w-full" src="/img/facebook.svg" alt="facebook" />
          </a>
        </div>
        <p class="text-white text-xs md:text-xl font-medium">
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
