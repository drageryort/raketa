<template>
  <main class="faq">
    <section class="title-block container">
      <h1 class="page-title">FAQ</h1>
      <h2 class="sub-title">
        Below are the answers to some frequently asked questions that you may find helpful. For anything else, please
        feel free to contact us.
      </h2>
    </section>
    <div class="faq-content container">
      <AppAccordionEl
          v-for="listEl of accordionDataList"
          :key="listEl.title"
          :accordionEl="listEl"
      />
    </div>
    <AppStartCompetitionBlock/>
  </main>
</template>

<script setup>

import {ref} from "vue";
import AppStartCompetitionBlock from "@/components/commonBlocks/AppStartCompetitionBlock";
import AppAccordionEl from "@/components/faqViewBlocks/AppAccordionEl";

const accordionDataList = ref([
  {
    title: "Who are you?",
    listElTextDataList: [
      "#1The price and quantity of tickets available varies depending on the watch; we always aim to " +
      "find the perfect balance between affordable tickets and a realistic chance of winning. Each " +
      "competition provides clear details on pricing and the maximum number of tickets available.",
      "#1The price and quantity of tickets available varies depending on the watch; we always aim to " +
      "find the perfect balance between affordable tickets and a realistic chance of winning. Each " +
      "competition provides clear details on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "How much does it cost and what are my chances of winning?",
    listElTextDataList: [
      "#2The price and quantity of tickets available varies depending on the watch; we always aim to find the perfect" +
      " balance between affordable tickets and a realistic chance of winning. Each competition provides clear details" +
      " on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "How do I enter?",
    listElTextDataList: [
      "#3The price and quantity of tickets available varies depending on the watch; we always aim to" +
      "find the perfect balance between affordable tickets and a realistic chance of winning. Each competition " +
      "provides clear details on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "Who can enter?",
    listElTextDataList: [
      "#4The price and quantity of tickets available varies depending on the watch; we always aim to find " +
      "the perfect balance between affordable tickets and a realistic chance of winning. Each competition provides " +
      "clear details on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "Is this a lottery?",
    listElTextDataList: [
      "#5The price and quantity of tickets available varies depending on the watch; we always aim to find " +
      "the perfect balance between affordable tickets and a realistic chance of winning. Each competition provides" +
      " clear details on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "What happens if you don’t sell enough tickets?",
    listElTextDataList: [
      "#6The price and quantity of tickets available varies depending on the watch; we always aim to find " +
      "the perfect balance between affordable tickets and a realistic chance of winning. Each competition provides " +
      "clear details on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "How will I know if I’ve won?",
    listElTextDataList: [
      "#7The price and quantity of tickets available varies depending on the watch; we always aim to find " +
      "the perfect balance between affordable tickets and a realistic chance of winning. Each competition provides " +
      "clear details on pricing and the maximum number of tickets available."
    ]
  },
  {
    title: "How does my entry help to support good causes?",
    listElTextDataList: [
      "#8The price and quantity of tickets available varies depending on the watch; we always aim to find " +
      "the perfect balance between affordable tickets and a realistic chance of winning. Each competition provides " +
      "clear details on pricing and the maximum number of tickets available."
    ]
  }
])

</script>

<style lang="scss" scoped>
.faq {
  .title-block {
    padding: 20px 0 60px;

    .page-title {
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .sub-title {
      font-family: 'TT Norms', sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      font-feature-settings: 'liga' off;
      color: var(--color-white);
    }
  }

  .faq-content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}
@media (max-width: 1000px) {
  .faq{
    .title-block{
      padding: 20px 0 40px;
      .page-title{
        font-size: 30px;
        line-height: 42px;
      }
      .sub-title{}
    }
    .faq-content{}
  }
}
@media (max-width: 600px) {
  .faq{
    .title-block{
      .page-title{
        font-size: 30px;
        line-height: 40px;
      }
      .sub-title{}
    }
    .faq-content{}
   }
}
</style>