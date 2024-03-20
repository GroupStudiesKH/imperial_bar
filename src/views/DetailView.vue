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
        <div class="col-12 px-5 BarDetailTitle">
          <h4>本月主打星店家</h4>
        </div>
        <div class="col-12 px-5 BarDetailName">
          <div>
            <h4>標題標題標題標題標題標題</h4>
            <img src="/assets/img/bar_detail_example.png" />
          </div>
        </div>

        <div class="col-12 px-5 BarDetailAddress">
          <div class="address_bg">
            <div class="annotation">
              <img src="/assets/img/annotation.png" />
            </div>
            台中市西區向上路一段56號1樓
          </div>
        </div>

        <div class="col-12 px-5 BarDetailTag">
          <div class="pill active">派對聚餐</div>
          <div class="pill">深夜酒吧</div>
          <div class="pill">晚餐小酌</div>
          <div class="pill">日式居酒屋</div>
          <div class="pill">特色店家</div>
          <hr />
        </div>

        <div class="col-12 px-5 BarDetailContent">
          <p>
            介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文內文介紹內文介紹內文介紹內文介紹內文介紹內文
          </p>
          <hr />
        </div>

        <div class="col-12 px-5 BarDetailSocial">
          <a><img src="/assets/img/share_fb.png" /></a>
          <a><img src="/assets/img/share_ig.png" /></a>
          <a><img src="/assets/img/share_googlemap.png" /></a>
        </div>

        <div class="col-12 px-5 BarDetailAction">
          <a class="previous"><img src="/assets/img/previous_member.png" /></a>
          <a class="getTicket"><img src="/assets/img/get_ticket.png" /></a>
        </div>
      </div>

      <div id="page_bottom"></div>
    </div>
  </main>
</template>
