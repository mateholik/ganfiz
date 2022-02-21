<template>
  <header class="mb-8 md:mb-14">
    <div class="container">
      <div class="h-20 md:h-28 flex justify-center mb-4">
        <router-link to="/">
          <img class="h-full w-auto mx-auto" src="/img/logo.svg" alt="logo"
        /></router-link>
      </div>
      <div class="relative flex items-center justify-between">
        <div class="w-1/3 menuBreak:w-2/12 md:hidden menuBreak:block"></div>
        <div class="md:hidden relative z-10">
          <div
            @click="showMobile = !showMobile"
            class="hamburger hamburger--elastic outline-none"
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
        <!-- <nav
          id="navigation"
          class="absolute bottom-0 transform translate-y-full md:transform-none left-0 z-20 md:static w-full menuBreak:w-8/12"
          :class="
            showMobile && isMobile ? 'opacity-100' : 'opacity-0 md:opacity-100'
          "
        >
          <div
            class="flex flex-col md:flex-row menuBreak:justify-center items-center flex-wrap bg-white -mx-4 pb-4 md:pb-0"
          >
            <router-link
              v-for="(item, index) in routes"
              :key="item.name"
              class="tracking-widest whitespace-nowrap md:text-xl transform uppercase mx-[1%] hover:text-primary duration-200 p-3 bg-[#DDDDDD] mb-1 md:bg-transparent md:mb-0 min-w-[230px] md:min-w-0 text-center"
              :class="
                showMobile
                  ? 'scale-100 pointer-events-auto'
                  : 'scale-0 pointer-events-none md:opacity-100  md:pointer-events-auto md:scale-100'
              "
              :style="`transition-delay: ${40 * index}ms;`"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </div>
        </nav> -->
        <nav
          id="navigation"
          class="absolute bottom-0 transform translate-y-full md:transform-none left-0 z-20 md:static w-full menuBreak:w-8/12"
          :class="
            showMobile && isMobile
              ? 'opacity-100'
              : 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'
          "
        >
          <div
            class="flex flex-col md:flex-row menuBreak:justify-center items-center flex-wrap bg-white -mx-4 pb-4 md:pb-0"
          >
            <router-link
              v-for="(item, index) in routes"
              :key="item.name"
              class="tracking-widest whitespace-nowrap md:text-xl transform uppercase mx-[1%] hover:text-primary duration-200 p-3 bg-[#DDDDDD] mb-1 md:bg-transparent md:mb-0 min-w-[230px] md:min-w-0 text-center"
              :class="
                showMobile
                  ? 'scale-100 pointer-events-auto'
                  : 'scale-0 pointer-events-none md:opacity-100  md:pointer-events-auto md:scale-100'
              "
              :style="`transition-delay: ${40 * index}ms;`"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </div>
        </nav>
        <div class="w-1/3 menuBreak:w-2/12 flex justify-end shrink-0">
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
      routes: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.routes.push({
        name: route.name,
        path: route.path,
      });
    });
  },
  watch: {
    $route() {
      this.showMobile = false;
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768 ? true : false;
    },
  },
};
</script>
<style scoped lang="scss">
.router-link-active {
  @apply text-primary;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  @apply bg-primary;
}
</style>
