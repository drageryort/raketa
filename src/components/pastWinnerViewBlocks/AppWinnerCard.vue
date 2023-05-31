<template>
  <div class="winners-el">
    <picture class="picture-col">
      <img :src="cardEl.photo" alt="winner photo">
    </picture>
    <div class="content-col">
      <span class="pre-title">Winner of the</span>
      <h2 class="wined-product">
        {{cardEl.priceName}}
      </h2>
      <h3 class="winner-name">{{cardEl.winnerName}}</h3>
      <p class="info">{{cardEl.info}}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  cardEl:Object,
})
</script>

<style lang="scss" scoped>
.winners-el {
  display: flex;
  padding: 60px;
  align-items: center;
  column-gap: 60px;
  background: var(--color-gradient-blue);
  border-radius: 20px;

  .picture-col {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    overflow: hidden;

    img {
    }
  }

  .content-col {
    width: 670px;

    .pre-title {
      display: block;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: var(--color-durty-white);
    }

    .wined-product {
      margin: 6px 0 0;
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .winner-name {
      margin: 30px 0 0;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .info {
      margin: 8px 0 0;
      font-family: 'TT Norms', sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);
    }
  }
}
@media (max-width: 1000px) {
  .winners-el{
    padding: 30px;
    column-gap: 30px;
    align-items: flex-start;
    .picture-col{
      width: 150px;
      height: 150px;
      img{}
    }
    .content-col{
      width: 450px;
      .pre-title{}
      .wined-product{
        margin: 14px 0 0;
        font-size: 20px;
        line-height: 24px;
      }
      .winner-name{}
      .info{}
    }
  }
}
@media (max-width: 600px) {
  .winners-el{
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    row-gap: 20px;
    .picture-col{
      img{}
    }
    .content-col{
      width: 100%;
      .pre-title{
        text-align: center;
      }
      .wined-product{
        margin: 6px 0 0;
        text-align: center;
      }
      .winner-name{
        text-align: center;
      }
      .info{
        text-align: center;
      }
    }
  }
}
</style>