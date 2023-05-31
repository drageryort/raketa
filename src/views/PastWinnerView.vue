<template>
  <main class="past-winners">
    <section class="title-block container">
      <h1 class="page-title">
        Past winners
      </h1>
    </section>
    <div class="winners-list-block container">
      <AppWinnerCard
          v-for="listEl in winnersDataList"
          :key="listEl.priceName + listEl.winnerName"
          :cardEl="listEl"
      />
    </div>
    <AppStartCompetitionBlock/>
  </main>
</template>

<script setup>
import AppStartCompetitionBlock from "@/components/commonBlocks/AppStartCompetitionBlock";
import {ref} from "vue";
import AppWinnerCard from "@/components/pastWinnerViewBlocks/AppWinnerCard";

const winnersDataList = ref([
  {
    priceName: "Bugatti chiron",
    winnerName: "Alex Repetiy",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit fames id quisque sit diam, turpis. " +
        "Nulla arcu elit pharetra, pharetra fermentum bibendum consectetur ultricies et. Cras faucibus nulla.",
    photo: "/images/png/pastWinnersPage/winner1.jpg"
  },
  {
    priceName: "Rolex oyster perpetual",
    winnerName: "Alex Collison",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit fames id quisque sit diam, turpis. " +
        "Nulla arcu elit pharetra, pharetra fermentum bibendum consectetur ultricies et. Cras faucibus nulla.",
    photo: "/images/png/pastWinnersPage/winner2.png"
  },
  {
    priceName: "Iphone 12 pro pacific blue",
    winnerName: "Darrell Steward",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit fames id quisque sit diam, turpis. " +
        "Nulla arcu elit pharetra, pharetra fermentum bibendum consectetur ultricies et. Cras faucibus nulla.",
    photo: "/images/png/pastWinnersPage/winner3.png"
  },
  {
    priceName: "Iphone 4 pacific blue",
    winnerName: "Esther Howard",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit fames id quisque sit diam, turpis. " +
        "Nulla arcu elit pharetra, pharetra fermentum bibendum consectetur ultricies et. Cras faucibus nulla.",
    photo: "/images/png/pastWinnersPage/winner4.png"
  },

])

</script>

<style lang="scss" scoped>
.past-winners {
  margin: -120px 0 0;
  background: url("@/assets/images/png/past-winners/background.png") no-repeat top center/100% auto;

  .title-block {
    padding: 240px 0 180px;

    .page-title {
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

  .winners-list-block {
    display: flex;
    flex-direction: column;
    row-gap: 30px;


  }
}
@media (max-width: 1000px) {
  .past-winners{
    margin: -80px 0 0;
    .title-block{
      padding: 170px 0 90px;
      .page-title{
        font-size: 30px;
        line-height: 40px;
      }
    }
    .winners-list-block{
      display: flex;
      flex-direction: column;
      row-gap: 30px;
    }
  }

}
@media (max-width: 600px) {
  .past-winners{
    background: url("@/assets/images/png/past-winners/background.png") no-repeat center top/auto 460px;
    .title-block{
      padding: 160px 0 80px;
      .page-title{}
    }
    .winners-list-block{
      row-gap: 20px;
    }
  }
}
</style>