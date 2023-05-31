<template>
  <main class="about-us">
    <section class="title-block container">
      <h1 class="page-title">
        About us
      </h1>
    </section>
    <section class="content-block container">
      <h2 class="block-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p class="block-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, fringilla tristique pulvinar lobortis
        dolor odio. Risus, nunc sociis tincidunt scelerisque ultricies tempor orci, volutpat quis. Lectus
        commodo justo orci enim felis ut risus. Sit elementum, duis consectetur suspendisse porta posuere
        lectus. Netus nunc fermentum odio semper pellentesque platea. Diam risus at volutpat pellentesque
        aliquam pharetra erat eleifend purus. At sit habitant cursus natoque mauris dolor faucibus nunc.
        Egestas placerat quam volutpat augue. Feugiat id sit amet, vestibulum purus est.
      </p>
      <div class="content-part">
        <AppAboutCard
            v-for="listEl in aboutDataList"
            :key="listEl.title"
            :aboutEl="listEl"
        />
      </div>
    </section>
    <AppHowToPlayBlock/>
  </main>
</template>

<script setup>
import AppHowToPlayBlock from "@/components/commonBlocks/AppHowToPlayBlock";
import {ref} from "vue";
import AppAboutCard from "@/components/aboutViewBlocks/AppAboutCard";
const aboutDataList = ref([
  {
    title: "Libero ut dolor.",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing egestas sit velit fermentum donec. " +
        "Fusce libero tortor imperdiet enim rhoncus, sodales. Lectus nunc, vitae amet arcu nulla fringilla sodales " +
        "egestas consequat. Sollicitudin malesuada aliquam mauris, ac nunc. Sed nibh enim, mi, maecenas nunc. Etiam " +
        "felis tellus at elit et faucibus aliquam. Duis egestas adipiscing eget rutrum egestas aliquet. Euismod sit " +
        "amet diam phasellus pellentesque. Netus pretium cursus turpis rhoncus, risus volutpat vitae amet.",
    image: "/images/png/aboutPage/about1.png"
  },
  {
    title: "Nulla felis risus sit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus lacus, et pretium velit, lorem volutpat " +
        "at quisque. Lectus hendrerit euismod morbi molestie elit urna. Volutpat vitae lobortis leo at pretium. " +
        "Egestas risus lacus porttitor a pellentesque nec. Platea at tristique arcu iaculis in ultricies vitae. " +
        "Dictum volutpat, vulputate senectus phasellus odio nibh viverra. Morbi et.",
    image: "/images/png/aboutPage/about2.png"
  }
])
</script>

<style lang="scss" scoped>
.about-us{
  margin: -120px 0 0;
  padding: 0;
  background: url("@/assets/images/png/about-us/background.png") no-repeat top center/100% auto;
  .title-block{
    padding: 240px 0 200px;
    .page-title{
      font-family: 'TT Norms', sans-serif;
      font-weight: bold;
      font-size: 64px;
      line-height: 80px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }
  }
  .content-block{
    padding: 0 0 80px;
    .block-title{
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }
    .block-description{
      margin: 20px 0 0;
      font-family: 'TT Norms', sans-serif;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);

    }
    .content-part{
      display: flex;
      flex-direction: column;
      row-gap: 60px;
      margin: 60px 0 0;
    }
  }
}
@media (max-width: 1000px) {
  .about-us{
    margin: -80px 0 0;
    .title-block{
      padding: 170px 0 70px;
      .page-title{
        font-size: 30px;
        line-height: 40px;
      }
    }
    .content-block{
      .block-title{
        font-size: 20px;
        line-height: 24px;
      }
      .block-description{
        margin: 30px 0 0;
      }
      .content-part{
        row-gap: 80px;
        margin: 80px 0 0;
      }
    }
  }
}
@media (max-width: 600px) {
  .about-us{
    background: url("@/assets/images/png/about-us/background.png") no-repeat center top/auto 460px;
    .title-block{
      padding: 160px 0 80px;
      .page-title{}
    }
    .content-block{
      .block-title{}
      .block-description{
        margin: 5px 0 0;
      }
      .content-part{}
    }
  }
}
</style>