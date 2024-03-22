<script>
import { useRouter, useRoute } from "vue-router";
// mounted
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service.js";
import Bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const { t, locale } = useI18n();
    const northShopData = ref([]);
    const midShopData = ref([]);
    const southShopData = ref([]);
    const northShopHighlight = ref([
      [1, 3],
      [5, 7],
      [9, 12],
      [15, 18],
      [21, 24],
    ]);
    const midShopHighlight = ref([
      [51, 53],
      [55, 57],
      [59, 62],
      [65, 68],
      [72, 70],
    ]);
    const southShopHighlight = ref([
      [81, 83],
      [85, 87],
      [89, 92],
      [95, 96],
      [93, 91],
    ]);
    const route = useRoute();

    const loadShopData = async () => {
      try {
        const response = await fetch("/data/bar.json"); // 載入 JSON 檔案
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json(); // 將 JSON 資料轉換為陣列

        northShopHighlight.value.forEach((shopGroup) => {
          let shopGroupData = [];
          shopGroup.forEach((shopId) => {
            shopGroupData.push(data.find((item) => item.id == shopId));
          });
          northShopData.value.push(shopGroupData);
        });

        midShopHighlight.value.forEach((shopGroup) => {
          let shopGroupData = [];
          shopGroup.forEach((shopId) => {
            shopGroupData.push(data.find((item) => item.id == shopId));
          });
          midShopData.value.push(shopGroupData);
        });

        southShopHighlight.value.forEach((shopGroup) => {
          let shopGroupData = [];
          shopGroup.forEach((shopId) => {
            shopGroupData.push(data.find((item) => item.id == shopId));
          });
          southShopData.value.push(shopGroupData);
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    onMounted(() => {
      loadShopData();
    });

    return {
      t,
      locale,
      northShopData,
      midShopData,
      southShopData,
      northShopHighlight,
      midShopHighlight,
      southShopHighlight,
    };
  },
};
</script>

<template>
  <Header />
  <main id="index">
    <div class="container" id="banner"></div>
    <div class="container" id="bars">
      <div class="row">
        <div class="col-12 px-5 topBarTitle">
          <h4>本月主打星店家</h4>
        </div>
        <div class="col-12 px-5 areaHeading">
          <h5>北部店家</h5>
        </div>
        <div id="carouselNorth" class="carousel slide">
          <div class="carousel-inner barContainer">
            <div
              class="barRow carousel-item"
              :class="shopsIndex == 0 ? `active` : ``"
              v-for="(shops, shopsIndex) in northShopData"
              :key="shopsIndex"
            >
              <div
                class="barCol"
                v-for="(shop, shopIndex) in shops"
                :key="shopIndex"
              >
                <router-link :to="'/detail/' + shop.id">
                  <div class="octagonBar">
                    <div class="title">{{ shop.subtitle }}</div>
                    <div class="bar_img">
                      <img src="/assets/img/bar_image_example.png" alt="1" />
                    </div>
                    <div class="bar_title">
                      <h5>{{ shop.store_name }}</h5>
                    </div>
                    <div class="bar_address">
                      <p>📍{{ shop.store_address }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselNorth"
            data-bs-slide="prev"
          >
            <img src="/assets/img/carousel_prev.png" />
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselNorth"
            data-bs-slide="next"
          >
            <img src="/assets/img/carousel_next.png" />
          </button>
        </div>

        <div class="col-12 px-5 areaHeading">
          <h5>中部店家</h5>
        </div>
        <div id="carouselMid" class="carousel slide">
          <div class="carousel-inner barContainer">
            <div
              class="barRow carousel-item"
              :class="shopsIndex == 0 ? `active` : ``"
              v-for="(shops, shopsIndex) in midShopData"
              :key="shopsIndex"
            >
              <div
                class="barCol"
                v-for="(shop, shopIndex) in shops"
                :key="shopIndex"
              >
                <router-link :to="'/detail/' + shop.id">
                  <div class="octagonBar">
                    <div class="title">{{ shop.subtitle }}</div>
                    <div class="bar_img">
                      <img src="/assets/img/bar_image_example.png" alt="1" />
                    </div>
                    <div class="bar_title">
                      <h5>{{ shop.store_name }}</h5>
                    </div>
                    <div class="bar_address">
                      <p>📍{{ shop.store_address }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselMid"
            data-bs-slide="prev"
          >
            <img src="/assets/img/carousel_prev.png" />
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselMid"
            data-bs-slide="next"
          >
            <img src="/assets/img/carousel_next.png" />
          </button>
        </div>

        <div class="col-12 px-5 areaHeading">
          <h5>南部店家</h5>
        </div>
        <div id="carouselSouth" class="carousel slide">
          <div class="carousel-inner barContainer">
            <div
              class="barRow carousel-item"
              :class="shopsIndex == 0 ? `active` : ``"
              v-for="(shops, shopsIndex) in southShopData"
              :key="shopsIndex"
            >
              <div
                class="barCol"
                v-for="(shop, shopIndex) in shops"
                :key="shopIndex"
              >
                <router-link :to="'/detail/' + shop.id">
                  <div class="octagonBar">
                    <div class="title">{{ shop.subtitle }}</div>
                    <div class="bar_img">
                      <img src="/assets/img/bar_image_example.png" alt="1" />
                    </div>
                    <div class="bar_title">
                      <h5>{{ shop.store_name }}</h5>
                    </div>
                    <div class="bar_address">
                      <p>📍{{ shop.store_address }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselSouth"
            data-bs-slide="prev"
          >
            <img src="/assets/img/carousel_prev.png" />
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselSouth"
            data-bs-slide="next"
          >
            <img src="/assets/img/carousel_next.png" />
          </button>
        </div>
      </div>

      <div id="page_bottom">
        <img src="/assets/img/previous.png" />
      </div>
    </div>
  </main>
</template>
