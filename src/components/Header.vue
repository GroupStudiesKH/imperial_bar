<template>
  <header>
    <div class="container">
      <img src="/assets/img/logo.png" class="logo" alt="logo" />
      <span>本月活動</span>
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


    onMounted(() => {

    });

    return {
      t,
      locale,
      setLocale,
      localeOptions,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
