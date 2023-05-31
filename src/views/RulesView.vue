<template>
  <main class="rules">
    <section class="title-block container">
      <h1 class="page-title">How to play</h1>
    </section>
    <section class="rules-list-block container">
      <AppRuleCard
          v-for="(listEl, indexEl) in rulesDataList"
          :key="listEl.title"
          :ruleEl="listEl"
          :indexEl="indexEl"
      />
    </section>
    <AppStartCompetitionBlock/>
  </main>
</template>

<script setup>
import AppStartCompetitionBlock from "@/components/commonBlocks/AppStartCompetitionBlock";
import {ref} from "vue";
import AppRuleCard from "@/components/rulesViewBlocks/AppRuleCard";

const rulesDataList = ref([
  {
    title: "Select your competition",
    text: "and how many tickets you want to purchase.",
    image: "/images/png/rulesPage/rule1.png"
  },
  {
    title: "Answer question",
    text: "dictum et leo est enim tristique at ut amet.",
    image: "/images/png/rulesPage/rule2.png"
  },
  {
    title: "Proceed to check out",
    text: "and wait for the live draw date to see if you’ve won.",
    image: "/images/png/rulesPage/rule3.png"
  },
])
</script>

<style lang="scss" scoped>
.rules {
  .title-block {
    padding: 20px 0 60px;

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

  .rules-list-block {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    counter-reset: rules;


  }
}
</style>