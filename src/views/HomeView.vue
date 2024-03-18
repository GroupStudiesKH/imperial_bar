<script>
import { useRouter, useRoute } from "vue-router";
// mounted
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service.js";
import cartService from "@/service/cart-service.js";

import Bootstrap from "bootstrap/dist/js/bootstrap.bundle";


export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false);
    const { t, locale } = useI18n();
    const attrationLists = ref([]);
    const showIndex = ref(1);
    const homePageVideo = ref(null);

    const fetchAttration = async () => {
      try {
        const results = await apiService.getProducts();
        attrationLists.value = results.data;
      } catch (error) {
        console.log(error);
      }
    };

    const addAttrationToCart = async (attration) => {
      try {
        await cartService.addCart(attration);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      await fetchAttration();
      homePageVideo.value = '/assets/video/video.webm'

      const carouselList = document.querySelectorAll(".carousel");
      carouselList.forEach((carousel) => {
        const carouselId = carousel.id;
        const carouselInstance = new Bootstrap.Carousel(
          document.getElementById(carouselId),
          {
            interval: 2000,
          }
        );
      });

    });

    return {
      isIntroScolled,
      t,
      locale,
      attrationLists,
      showIndex,
      homePageVideo,
      addAttrationToCart
    };
  },
};
</script>

<template>
  <Header />
  <main id="index">
    <div class="video-container">
      <video autoplay muted loop playsinline :src="homePageVideo">
      </video>

      <video
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/video.mp4" type="video/mp4" />
        <source src="/assets/video/video.webm" type="video/webm" />
        {/* Add additional fallback formats if necessary */}
      </video>

    </div>
    <div class="bottom_action">
      <p class="heading">一台車遊遍花東！</p>
      <p class="letsgo">
        <img src="/assets/img/icon_white_arrow_circle.png" alt="arrow" />
        <span class="content">Let's Go</span>
      </p>
    </div>
    <div class="intro_choose">
      <div>
        <img src="/assets/img/icon_mountain.png" alt="mountain" />
        <span class="content">選景點</span>
      </div>
      <div>
        <img src="/assets/img/icon_user_white.png" alt="user" />
        <span class="content">選車型</span>
      </div>
      <div>
        <img src="/assets/img/icon_calendar.png" alt="calendar" />
        <span class="content">選日期</span>
      </div>
    </div>

    <div class="attration" v-for="(attration, attrationIndex) in attrationLists" :key="attrationIndex">
      <div
        :id="`attrationCarousel_${attration.id}`"
        class="carousel slide"
        data-bs-ride="true"
        data-bs-touch="true"
      >
        <div class="carousel-indicators">
          <button
            v-for="(productImage, productImageIndex) in attration.product_image" :key="productImageIndex"
            type="button"
            :data-bs-target="`#attrationCarousel_${attration.id}`"
            :data-bs-slide-to="productImageIndex"
            :class="productImageIndex == 0 ? `active` : ``"
            :aria-current="productImageIndex == 0 ? `true` : ``"
            :aria-label="`Slide ${productImageIndex + 1}`"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" :class="productImageIndex == 0 ? `active` : ``" v-for="(productImage, productImageIndex) in attration.product_image" :key="productImageIndex">
            <img :src="productImage.image_url" class="d-block w-100" />
            <div class="tag">{{ attration.category.title }}</div>
          </div>
        </div>
      </div>
      <div class="intro">
        <p class="heading"><router-link :to="{ name: 'productDetail', params: { id: attration.id }}">{{ attration.title }}</router-link></p>
        <p class="locate">位置：{{ attration.location }}</p>
        <p class="season">{{ attration.season }}</p>
        <p class="stay_time">建議停留：{{ attration.staytime }}/{{ attration.staytime_text }}</p>
        <div class="addCart" @click="addAttrationToCart(attration)">
          <img src="/assets/img/icon_bus.png" alt="bus" />
          <span class="content">加入行程</span>
        </div>
      </div>
    </div>

    <div class="next_step">
      <div class="partial_up">
        <p class="already">通通都選好了嗎？</p>
        <p class="next">下一步</p>
        <p class="icon_text">
          <img src="/assets/img/icon_user_white.png" alt="user" />
          <span class="content">選車型</span>
        </p>
        <p class="icon_text date">
          <img src="/assets/img/icon_calendar.png" alt="calendar" />
          <span class="content">選日期</span>
        </p>
        <router-link to="cart" class="letsgo">
          <img src="/assets/img/icon_bus.png" alt="calendar" />
          <span class="content">Let's Go</span>
        </router-link>
      </div>
      <div class="partial_down">
        <div class="recommand_container">
          <div
            :class="showIndex == 0 ? `show` : ``"
            @click="showIndex = 0"
            class="recommand"
          >
            <div class="row">
              <div class="col-2">
                <div class="avatar">SH</div>
              </div>
              <div class="col-10">
                <p class="heading">Sarah H.</p>
                <p class="locate">
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                </p>
              </div>
            </div>
            <p class="content">
              這次花東旅遊多虧有「一切都做到極致，非常喜歡！」 女人團旅客：Dora.
              「非常 ...
              主打花東身心靈療癒旅遊的「樂年輕旅」，是由三位花蓮在地青年成立的遊程顧問公司
            </p>
          </div>
          <div
            :class="showIndex == 1 ? `show` : ``"
            @click="showIndex = 1"
            class="recommand"
          >
            <div class="row">
              <div class="col-2">
                <div class="avatar">SH</div>
              </div>
              <div class="col-10">
                <p class="heading">Sarah H.</p>
                <p class="locate">
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                </p>
              </div>
            </div>
            <p class="content">
              這次花東旅遊多虧有「一切都做到極致，非常喜歡！」 女人團旅客：Dora.
              「非常 ...
              主打花東身心靈療癒旅遊的「樂年輕旅」，是由三位花蓮在地青年成立的遊程顧問公司
            </p>
          </div>
          <div
            :class="showIndex == 2 ? `show` : ``"
            @click="showIndex = 2"
            class="recommand"
          >
            <div class="row">
              <div class="col-2">
                <div class="avatar">SH</div>
              </div>
              <div class="col-10">
                <p class="heading">Sarah H.</p>
                <p class="locate">
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                  <img src="/assets/img/icon_black_bus.png" alt="bus" />
                </p>              
              </div>
            </div>
            <p class="content">
              這次花東旅遊多虧有「一切都做到極致，非常喜歡！」 女人團旅客：Dora.
              「非常 ...
              主打花東身心靈療癒旅遊的「樂年輕旅」，是由三位花蓮在地青年成立的遊程顧問公司
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="qa">
      <p clas="title">Q&A</p>

      <p class="heading">費用是每人還是每車?</p>
      <span
        >每一台車，這是您專屬的包車以及專屬司機，如果您有3人，只要訂購一台車，支付一台車的費用。</span
      >

      <p class="heading">一人出發的價格是?</p>
      <span>這是提供給一人旅行時的優惠，一人一台車出發時適用。</span>

      <p class="heading">當天行程可以變更嗎?</p>
      <span>可以，這是您的專屬包車以及專屬司機，您可以自由安排行程。</span>

      <p class="heading">提前結束行程可以退費嗎?</p>
      <span>抱歉，提前結束不會退費。</span>

      <p class="heading">如果行程超過8小時會分成兩天嗎?</p>
      <span
        >是的，每一天以8小時為限，如果您選取的景點超過8小時，將分為兩天行程。</span
      >

      <p class="heading">活動、餐廳會代為定位嗎?</p>
      <span
        >是的，只要將需要預定的活動或餐廳加入行程並完成結帳，我們會為您訂位。如果當天客滿，我們會與您聯絡更改行程。</span
      >

      <p class="heading">代訂的費用呢?</p>
      <span
        >我們只為您訂位，不收取任何費用。實際費用請當天現場支付給商家。</span
      >

      <p class="heading">活動、餐廳時間算在行程時間內嗎?</p>
      <span>是的。</span>

      <p class="heading">當天怎麼聯絡司機?</p>
      <span
        >前一天司機會以您訂單上的通訊軟體
        WhatsApp、LINE或WeChat和您確認上車地點和時間。</span
      >
    </div>
  </main>
  <Footer />
</template>
