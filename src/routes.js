import DetailPage from "./components/pages/DetailPage.vue";
import HomePage from "./components/pages/homePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import Cookies from "js-cookie";
import { store } from "./store/index";
import NewRecipePage from "./components/pages/NewRecipePage.vue";
import EditRecipePage from "./components/pages/EditRecipePage.vue";

const checkAuth = () => {
  const jwtCookie = Cookies.get("jwt");
  const expirationDate = Cookies.get("tokenExpirationDate");
  const userId = Cookies.get("UID");

  if (jwtCookie) {
    if (new Date().getTime() < +expirationDate) {
      store.commit("auth/setToken", {
        idToken: jwtCookie,
        expiresIn: expirationDate,
      });
      store.dispatch("auth/getUser", userId);
      return true;
    } else {
      store.commit("auth/setUserLogout");
      return false;
    }
  } else {
    return false;
  }
};

export const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
    beforeEnter: () => {
      checkAuth();
    },
  },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/recipe/:id", name: "detailPage", component: DetailPage },
  { path: "/user", name: "userPage", component: UserPage },
  {
    path: "/new-recipe",
    name: "newRecipePage",
    component: NewRecipePage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next({ name: "login" });
    },
  },

  {
    path: "/user/:component",
    name: "userPage",
    component: UserPage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next({ name: "login" });
    },
  },
  {
    path: "/recipe/edit/:id",
    name: "editRecipePage",
    component: EditRecipePage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next({ name: "login" });
    },
  },
];
