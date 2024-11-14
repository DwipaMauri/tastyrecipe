<template>
  <div
    class="header__navbar row justify-content-between align-items-center"
    style="width: 450px"
  >
    <search-menu></search-menu>
    <component :is="components[MenuComponent]"></component>
  </div>
</template>

<script setup>
import SearchMenu from "./SearchMenu.vue";
import SignupMenu from "./SignupMenu.vue";
import ProfileMenu from "./ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const MenuComponent = ref("signup-menu");
const store = useStore();

const components = {
  "signup-menu": SignupMenu,
  "profile-menu": ProfileMenu,
};

const getToken = computed(() => {
  return store.state.auth.token;
});

if (!getToken.value) {
  MenuComponent.value = "signup-menu";
} else {
  MenuComponent.value = "profile-menu";
}
watch(getToken, (newValue, oldValue) => {
  if (!newValue) {
    MenuComponent.value = "signup-menu";
  } else {
    MenuComponent.value = "profile-menu";
  }
});
</script>
