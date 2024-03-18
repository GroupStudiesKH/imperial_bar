<template>
  <header>
    <div class="container">
      <div class="row" id="navbarNav">
        <div class="col-12 logo">
          <router-link to="/"><img src="/assets/img/header_logo.png" alt="Logo" /></router-link>
        </div>
        <div class="social">
          <a><img src="/assets/img/icon_black_search.png" alt="search" /></a>
          <a href="/cart" class="cart" :class="addedClass">
            <span class="item_count" v-if="cartCount > 0">{{ cartCount }}</span>
            <img src="/assets/img/icon_black_cart.png" alt="cart" />
          </a>
          <a><img src="/assets/img/icon_black_chat.png" alt="chat" /></a>
        </div>
        <div class="col-3">
          <div
            class="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            選擇行程
          </div>
          <ul class="dropdown-menu">
            <li v-for="(category, categoryIndex) in categories" :key="categoryIndex">
              <a :href="`/product/category/${category.id}`" class="dropdown-item" type="button">{{ category.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-3">顧客評價</div>
        <div class="col-3">Q&A</div>
        <div class="col-3">訂單查詢</div>
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import apiService from "@/service/api-service";
import Bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import cartService from "@/service/cart-service.js";

export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n();
    const categories = ref([]);
    const cartCount = ref(0);
    const addedClass = ref("");
    const localeOptions = ref([
      {
        lang: "eng",
        name: "English",
      },
      {
        lang: "zh_TW",
        name: "繁體中文",
      },
      {
        lang: "jp",
        name: "日本語",
      },
    ]);

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem("locale", lang);
    };

    const updateCartCount = async () => {
      let cart = await cartService.getCart();
      cartCount.value = Object.keys(cart).length;
    };

    const fetchCategories = async () => {
      try {
        const response = await apiService.getCategories();
        categories.value = response;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchCategories();
      setInterval(() => {
        updateCartCount();
      }, 500);
    });

    return {
      t,
      locale,
      setLocale,
      categories,
      localeOptions,
      cartCount
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
