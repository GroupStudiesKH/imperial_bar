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

    onMounted(async () => {});

    return {
      t,
      locale,
    };
  },
};
</script>

<template>
  <Header />
  <main>
    <div id="banner_carousel" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/assets/img/banner.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/assets/img/banner.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/assets/img/banner.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#banner_carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#banner_carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container" id="bars">
      <div class="row">
        <div class="col-12 px-5 discoveryBarTitle">
          <h4>探索酒吧</h4>
        </div>
      </div>

      <div class="row selectAreaStyle px-5">
        <div class="col-3">
          <h6>地點</h6>
        </div>
        <div class="col-9">
          <div class="pill active">北部</div>
          <div class="pill">中部</div>
          <div class="pill">南部</div>
        </div>
      </div>

      <div class="row selectAreaStyle px-5">
        <div class="col-3">
          <h6>風格</h6>
        </div>
        <div class="col-9">
          <div class="pill active">派對聚餐</div>
          <div class="pill">深夜酒吧</div>
          <div class="pill">晚餐小酌</div>
          <div class="pill">日式居酒屋</div>
          <div class="pill">特色店家</div>
        </div>
      </div>

      <div class="col-12">
        <div class="row">
          <div class="col-6 barColDiscovery">
            <div class="octagonBar">
              <div class="title">標題標題標題標題</div>
              <div class="bar_img">
                <img src="/assets/img/bar_image_example.png" alt="1" />
              </div>
              <div class="bar_title">
                <h5>Potions Magic Bar</h5>
              </div>
              <div class="bar_address">
                <p>📍台北市大安區四段378巷5號1樓</p>
              </div>
            </div>
          </div>
          <div class="col-6 barColDiscovery">
            <div class="octagonBar">
              <div class="title">標題標題標題標題</div>
              <div class="bar_img">
                <img src="/assets/img/bar_image_example.png" alt="1" />
              </div>
              <div class="bar_title">
                <h5>Potions Magic Bar</h5>
              </div>
              <div class="bar_address">
                <p>📍台北市大安區四段378巷5號1樓</p>
              </div>
            </div>
          </div>
          <div class="col-6 barColDiscovery">
            <div class="octagonBar">
              <div class="title">標題標題標題標題</div>
              <div class="bar_img">
                <img src="/assets/img/bar_image_example.png" alt="1" />
              </div>
              <div class="bar_title">
                <h5>Potions Magic Bar</h5>
              </div>
              <div class="bar_address">
                <p>📍台北市大安區四段378巷5號1樓</p>
              </div>
            </div>
          </div>
          <div class="col-6 barColDiscovery">
            <div class="octagonBar">
              <div class="title">標題標題標題標題</div>
              <div class="bar_img">
                <img src="/assets/img/bar_image_example.png" alt="1" />
              </div>
              <div class="bar_title">
                <h5>Potions Magic Bar</h5>
              </div>
              <div class="bar_address">
                <p>📍台北市大安區四段378巷5號1樓</p>
              </div>
            </div>
          </div>
          <div class="col-6 barColDiscovery">
            <div class="octagonBar">
              <div class="title">標題標題標題標題</div>
              <div class="bar_img">
                <img src="/assets/img/bar_image_example.png" alt="1" />
              </div>
              <div class="bar_title">
                <h5>Potions Magic Bar</h5>
              </div>
              <div class="bar_address">
                <p>📍台北市大安區四段378巷5號1樓</p>
              </div>
            </div>
          </div>
          <div class="col-6 barColDiscovery">
            <div class="octagonBar">
              <div class="title">標題標題標題標題</div>
              <div class="bar_img">
                <img src="/assets/img/bar_image_example.png" alt="1" />
              </div>
              <div class="bar_title">
                <h5>Potions Magic Bar</h5>
              </div>
              <div class="bar_address">
                <p>📍台北市大安區四段378巷5號1樓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page_bottom">
        <img src="/assets/img/previous.png" />
      </div>
    </div>
  </main>
</template>
