<template>
  <div class="rules-el">
    <div class="content-col">
      <span class="pre-title">Step {{ index + 1 }}</span>
      <h2 class="rules-name">{{ ruleEl.title }}</h2>
      <p class="rules-text">{{ ruleEl.text }}</p>
    </div>
    <picture class="picture-col">
      <img class="image" :src="ruleEl.image" alt="rule image">
    </picture>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  ruleEl:Object,
  indexEl:Number
})
</script>

<style lang="scss" scoped>
.rules-el {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;

  &:nth-child(even) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .picture-col {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 540px;
    height: 400px;
    padding: 47px;

    .image {
      max-width: 100%;
      max-height: 100%;
      width: unset;
      height: unset;
      object-fit: contain;
    }
  }

  .content-col {
    width: 540px;

    &:before {
      counter-increment: rules;
      content: counter(rules);
      font-weight: 900;
      font-size: 288px;
      line-height: 276px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-white);
      opacity: 0.05;
      position: absolute;
      top: -80px;
      left: 0;
    }

    .pre-title {
      display: block;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: var(--color-gray);
    }

    .rules-name {
      margin: 10px 0 0;
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .rules-text {
      margin: 4px 0 0;
      font-family: 'TT Norms', sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);
    }
  }
}
</style>