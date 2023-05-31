<template>
  <main class="competition">
    <section class="title-block container">
      <h1 class="page-title">
        Competitions
      </h1>
    </section>
    <div class="content-block container">
      <ul class="tabs-selector-list selector-list">
        <li class="tabs-selector selector-el"
            v-for="tab of tabs"
            :key="tab"
            @click="tabTrigger(tab)"
            :class="{ active: tab === activeTab }"
        >
          {{tab}}
        </li>>
      </ul>
      <div class="tabs-content-list tabs-list">
        <div class="tabs-content" v-if="activeTab === `current`">
          <AppProductCard
              v-for="i in 3"
              :key="i"
          />
        </div>
        <div class="tabs-content" v-if="activeTab === `completed`">
          <AppProductCardPassed
            v-for="i in 2"
            :key="i"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue";
import AppProductCard from "@/components/commonEls/AppProductCard";
import AppProductCardPassed from "@/components/commonEls/AppProductCardPassed";
const tabs = ref([
    "current", "completed"
])
const activeTab = ref("current")

const tabTrigger = tab => activeTab.value = tab;

</script>

<style lang="scss" scoped>
.competition{
  margin: -120px 0 0;
  background: url("@/assets/images/png/competition/background.png") no-repeat top center/100% auto;
  .title-block{
    padding: 240px 0 120px;
    .page-title{
      font-family: "TT Norms", sans-serif;
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
    padding: 0 0 160px;
    .selector-list{
      display: flex;
      justify-content: center;
      column-gap: 40px;
      margin: 0 0 60px;
      .selector-el{
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
        color: var(--color-white);
        cursor: pointer;
        &.active{
          &:after{
            content: '';
            height: 1px;
            width: 100%;
            background: var(--color-orange);
            position: absolute;
            left: 0;
            bottom: -8px;
          }
        }
      }
    }
    .tabs-list{
      .tabs-content{
        display: flex;
        flex-direction: column;
        row-gap: 30px;
      }
    }
  }
}

</style>