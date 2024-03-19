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
            <div class="barRow carousel-item active">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun1</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun2</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="barRow carousel-item">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="barRow carousel-item">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
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
            <div class="barRow carousel-item active">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun1</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun2</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="barRow carousel-item">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="barRow carousel-item">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
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
            <div class="barRow carousel-item active">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun1</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun2</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="barRow carousel-item">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="barRow carousel-item">
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
              </div>
              <div class="barCol">
                <div class="octagonBar">
                  <div class="title">標題標題標題標題</div>
                  <div class="bar_img">
                    <img src="/assets/img/bar_image_example.png" alt="1" />
                  </div>
                  <div class="bar_title">
                    <h5>Pun</h5>
                  </div>
                  <div class="bar_address">
                    <p>📍台北市大安區四段378巷5號1樓</p>
                  </div>
                </div>
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
