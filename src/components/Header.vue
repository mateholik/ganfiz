<template>
  <header>
    <div class="container">
      <div class="h-20 md:h-28 flex justify-center mb-6 md:mb-10">
        <img class="h-full w-auto" src="/img/logo.svg" alt="logo" />
      </div>
      <div class="relative">
        <div class="md:hidden">
          <div
            @click="showMobile = !showMobile"
            class="hamburger hamburger--elastic"
            :class="{ 'is-active': showMobile }"
            tabindex="0"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
        <nav
          id="navigation"
          class="flex flex-col md:flex-row justify-center w-full items-center duration-1000"
        >
          <router-link
            v-for="(item, index) in routesList"
            :key="item.title"
            class="md:text-xl transform uppercase mx-[1%] hover:text-primary duration-200 p-3 bg-[#DDDDDD] mb-1 md:bg-transparent md:mb-0 min-w-[200px] md:min-w-0"
            :class="
              showMobile
                ? 'scale-100 pointer-events-auto'
                : 'scale-0 pointer-events-none md:opacity-100  md:pointer-events-auto md:scale-100'
            "
            :style="`transition-delay: ${40 * index}ms;`"
            :to="item.link"
            >{{ item.title }}</router-link
          >
        </nav>
        <div
          class="absolute flex flex-shrink-0 transform top-3 md:top-[-2px] right-0"
        >
          <div
            class="flex justify-center items-center rounded-full border-primary border-2 md:border-4 w-8 md:w-14 h-8 md:h-14 mr-3 md:mr-10 cursor-pointer"
          >
            <span class="text-xs md:text-xl text-primary">EN</span>
          </div>
          <img
            class="w-8 md:w-14 h-8 md:h-14 cursor-pointer"
            src="/img/profile.svg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMobile: false,
      routesList: [
        {
          title: "S H O P",
          link: "/",
        },
        {
          title: "D I S C O V E R",
          link: "/about",
        },
        {
          title: "C U S T O M",
          link: "/",
        },
        {
          title: "B O O K M A R K",
          link: "/about",
        },
        {
          title: "A B O U T",
          link: "/about",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.router-link-active {
  @apply text-primary;
}
</style>
