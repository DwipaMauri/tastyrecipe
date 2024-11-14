<template>
  <div
    class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none"
    style="text-align: right"
  >
    <i class="fa-solid fa-user" style="color: #4c4ddc"></i>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <img
            src="https://i.pinimg.com/736x/e0/23/56/e02356582c499c2030ea5430f45e6a55.jpg"
            alt="Profile Image"
            class="rounded-circle"
            width="35"
            height="35"
            style="object-fit: cover"
          />
          My Profile
        </a>
        <ul class="dropdown-menu">
          <router-link to="/user/personal-info" class="dropdown-item"
            >My Profile</router-link
          >
          <router-link to="/user/favorite-recipes" class="dropdown-item"
            >Favorite Recipes</router-link
          >
          <router-link to="/user/user-recipe" class="dropdown-item"
            >My Recipes</router-link
          >
          <li><hr class="dropdown-divider" /></li>
          <li class="dropdown-item" @click="logout">Logout</li>
        </ul>
        <!-- <ul class="dropdown-menu">
          <router-link to="/user/personal-info" class="dropdown-item"
            >My Profile</router-link
          >
          <router-link to="/user/favorite-recipes" class="dropdown-item"
            >Favorite Recipes</router-link
          >
          <router-link to="/user/user-recipe" class="dropdown-item"
            >My Recipes</router-link
          >
          <li><hr class="dropdown-divider" /></li>
          <li class="dropdown-item" @click="logout">Logout</li>
        </ul> -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const logout = () => {
  store.commit("auth/setUserLogout");
  router.push("/");
};
</script>
