<template>
  <div>
    <web-header></web-header>
    <router-view></router-view>
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from "./components/header/WebHeader.vue";
import HomePage from "./components/pages/homePage.vue";
import WebFooter from "./components/footer/WebFooter.vue";
WebFooter;
export default {
  components: {
    WebHeader,
    HomePage,
    WebFooter,
  },
};
</script>
