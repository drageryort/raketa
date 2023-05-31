<template>
  <main class="charities">
    <section class="title-block container">
      <h1 class="page-title">
        Charities
      </h1>
      <h2 class="sub-title">
        We donate 10% of our profits to good causes, via charities of our choice. We are currently supporting the
        following organisation(s):
      </h2>
    </section>
    <div class="charities-list-block container">
      <AppCharityCard
          v-for="listEl in charitiesDataList"
          :key="listEl.link"
          :charityEl="listEl"
      />
    </div>
    <AppStartCompetitionBlock/>
  </main>
</template>

<script setup>
  import AppStartCompetitionBlock from "@/components/commonBlocks/AppStartCompetitionBlock";
  import {ref} from "vue";
  import AppCharityCard from "@/components/charitiesViewBlocks/AppCharityCard";
  const charitiesDataList = ref([
    {
      logo: "/images/png/charitiesPage/logo-partner1.png",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien gravida lacus, vitae eget " +
          "phasellus curabitur lacus luctus. Viverra phasellus ipsum rhoncus fringilla vulputate ultricies dignissim " +
          "natoque. Ut pellentesque sed aenean lectus suspendisse dictum erat faucibus tempus. Purus nisl egestas " +
          "posuere risus. Nulla et in sit leo. Habitant fermentum nulla venenatis libero consectetur. Erat vel quam.",
      link: "https://tabletochki.org/"
    },
    {
      logo: "/images/png/charitiesPage/logo-partner2.png",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien gravida lacus, vitae eget " +
          "phasellus curabitur lacus luctus. Viverra phasellus ipsum rhoncus fringilla vulputate ultricies dignissim " +
          "natoque. Ut pellentesque sed aenean lectus suspendisse dictum erat faucibus tempus. Purus nisl egestas " +
          "posuere risus. Nulla et in sit leo. Habitant fermentum nulla venenatis libero consectetur. Erat vel quam.",
      link: "https://superonuki.com/"
    },
  ])

</script>

<style lang="scss" scoped>
.charities {
  margin: -120px 0 0;
  background: url("@/assets/images/png/charities/background.png") no-repeat top center/100% auto;

  .title-block {
    padding: 240px 0 150px;

    .page-title {
      font-family: 'TT Norms', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 80px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .sub-title {
      margin: 10px 0 0;
      font-family: 'TT Norms', sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      font-feature-settings: 'liga' off;
      color: var(--color-white);
    }
  }

  .charities-list-block {
    display: flex;
    flex-direction: column;
    row-gap: 30px;


  }
}
@media (max-width: 1000px) {
  .charities{
    margin: -80px 0 0;
    .title-block{
      padding: 160px 0 80px;
      .page-title{
        font-size: 30px;
        line-height: 40px;
      }
      .sub-title{}
    }
    .charities-list-block{
      row-gap: 20px;
    }
  }
}
@media (max-width: 600px) {
  .charities{
    background: url("@/assets/images/png/charities/background.png") no-repeat center top/auto 460px;
    .title-block{
      .page-title{}
      .sub-title{}
    }
    .charities-list-block{}
  }
}
</style>
