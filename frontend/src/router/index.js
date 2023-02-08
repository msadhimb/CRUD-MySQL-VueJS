import { createRouter, createWebHistory } from "vue-router";
import InputVue from "@/components/Input.vue";
import List from "../components/List.vue";
const routes = [
  {
    path: "/",
    name: "InputGuest",
    component: InputVue,
  },
  {
    path: "/guest",
    name: "GuestList",
    component: List,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
