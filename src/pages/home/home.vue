<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-04-26 14:19:28
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-12 13:09:16
 * @@param: 
-->
<template>
  <el-container>
    <headerComponent></headerComponent>
    <el-main style="padding: 0px" class="main">
      <el-carousel :interval="5000" arrow="always" height="500px">
        <el-carousel-item v-for="item in carousels_list" :key="item.url">
          <el-image :src="item.url" fit="containe">
            <template v-slot:placeholder
              ><el-icon class="is-loading"> </el-icon>
            </template>
          </el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- news and events -->
      <el-row justify="center" align="start" class="main-box">
        <el-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          class="el-main-content"
        >
          <el-row>
            <el-col :span="24">
              <div style="width: 80%; margin-left: 10%">
                <el-button type="info" plain class="info-button-header"
                  ><strong>News&Events</strong></el-button
                >
                <news_cards></news_cards>
                <news_cards></news_cards>
                <news_cards></news_cards>
                <news_cards></news_cards>
              </div>
            </el-col>
            <!-- <el-col :span="24">
              <div style="width: 80%; margin-left: 40px">
                <el-button
                  type="info"
                  class="info-button-header"
                  plain
                  style="
                     {
                      boxshadow: --el-box-shadow-base;
                    }
                  "
                  ><strong>Get In Touch</strong></el-button
                >
                <div class="contact_info">
                  <div class="contact_localtion">
                    Norman Borlaug Center for Southern Crop Improvement 2123
                    TAMU, Rm 112. College Station, TX 77840
                  </div>
                  <div class="contact_email">e-mail: xiuren.zhang@tamu.edu</div>
                  <div class="contact_tel">Tel: 979-458-0596</div>
                </div>
              </div>
            </el-col> -->
          </el-row>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          class="el-main-content"
        >
          <div style="width: 80%; margin-left: 40px">
            <el-button type="info" class="info-button-header" plain>
              <strong>Archives</strong></el-button
            >
            <!-- #! select Date -->
            <el-calendar v-model="Data_value" />
          </div>
        </el-col>
      </el-row>
      <!-- our Faculty -->
      <el-row class="main-faculty" justify="center">
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="16"
          :xl="16"
          class="el-main-content"
        >
          <div style="width: 80%; margin-left: 40px; text-align: start">
            <el-button type="info" class="info-button-header" plain>
              <strong>Our Faculty</strong></el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer style="padding: 0px; height: 400px">
      <footer_main></footer_main>
    </el-footer>
  </el-container>
</template>

<script>
// import request from "@/utils/axios.js";
import { useLoading } from "vue3-loading-overlay";
// Import stylesheet
import { mapState,mapActions } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import headerComponent from "../../components/header.vue";
import news_cards from "../../components/news_card.vue";
import footer_main from "../../components/footer.vue";

export default {
  name: "home_layout",
  components: { headerComponent, news_cards, footer_main },
  data() {
    return {
      show: true,
      label: "loading",
      overlay: true,
      fullPage: true,
      Data_value: new Date()
    };
  },
  setup() {},
  computed: {
    ...mapState({
      carousels_list: (state) => state.main.carousels_list,
    }),
  },
  methods: {
    increment() {
      let loader = useLoading();
      loader.show(
        {
          // Pass props by their camelCased names
          container: null,
          canCancel: null, // default false
          onCancel: false,
          color: "green",
          loader: "bars",
          width: 64,
          height: 64,
          backgroundColor: "#ffffff",
          opacity: 0.5,
          zIndex: 999,
        },
        setTimeout(() => {
          loader.hide();
        }, 5000)
      );
    },
    ...mapActions({
        getnewData: 'news/get_newsData'
    })
  },
  created() {
    
  },
  mounted(){
    //this.$store.dispatch("news/get_newsData")
  }
};
</script>


<style lang='scss' scoped>
.main-box {
  background-image: url("https://btiscience.org/wp-content/uploads/polygonal2-2.jpg");

  .el-main-content {
    margin-top: 20px;
    text-align: center;
    :deep(.info-button-header) {
      text-align: start;
      width: 100%;
      background: "#f2f2f2";
      font-weight: 500;
      font-size: 22px;
      color: #333;
      font-family: "Lato", Helvetica, Arial, Lucida, sans-serif;
      font-style: italic;
    }
  }
}
.contact_info {
  line-height: 2;
  text-align: start;
  .contact_localtion {
    font-size: 18px;
  }
  .contact_email,
  .contact_tel {
    font-size: 14px;
    font-style: italic;
  }
}
.main-faculty {
  :deep(.info-button-header) {
    text-align: start;
    width: 60%;
    background: "#f2f2f2";
    font-weight: 500;
    font-size: 22px;
    color: #333;
    font-family: "Lato", Helvetica, Arial, Lucida, sans-serif;
    font-style: italic;
  }
}
</style>