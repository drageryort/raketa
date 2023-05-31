<template>
  <div class="accordion-wrapper" :class="{active:trigger}">
    <h2 class="accordion-title" @click="trigger = !trigger">
      {{ accordionEl.title }}
      <span class="accordion-trigger">
          <span></span>
          <span></span>
      </span>
    </h2>
    <div class="accordion-content">
      <p class="text"
         v-for="listElText of accordionEl.listElTextDataList"
         :key="listElText"
      >{{ listElText }}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref} from "vue";

defineProps({
  accordionEl: Object,
});
const trigger = ref(false);

</script>

<style lang="scss" scoped>
.accordion-wrapper {
  padding: 30px;
  border-radius: 10px;
  background: var(--color-popup-dark-blue);

  .accordion-title {
    padding: 0 35px 0 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
    position: static;
    cursor: pointer;

    .accordion-trigger {
      display: block;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 33.5px;
      right: 33.5px;
      cursor: pointer;

      span {
        display: block;
        border-radius: 3px;
        background: var(--color-orange);
        position: absolute;
        transition: all .25s ease;

        &:first-child {
          margin: 0 10%;
          width: 80%;
          height: 3px;
          top: calc(50% - 1.5px);
        }

        &:last-child {
          margin: 10% 0;
          width: 3px;
          height: 80%;
          left: calc(50% - 1.5px);
        }
      }
    }
  }

  .accordion-content {
    height: 0;
    padding: 0;
    overflow: hidden;

    p {
      font-family: 'TT Norms', sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);

      &:not(:last-child) {
        margin: 0 0 10px;
      }
    }
  }

  &.active {
    .accordion-title {
      .accordion-trigger {
        span {
          &:first-child {
          }

          &:last-child {
            -moz-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
          }
        }
      }
    }

    .accordion-content {
      height: max-content;
      padding: 30px 0 0;

      p {
      }
    }
  }
}
@media (max-width: 1000px) {
  .accordion-wrapper{
    padding: 20px;
    .accordion-title{
      padding: 0 30px 0 0;
      font-size: 16px;
      line-height: 20px;
      .accordion-trigger{
        top: 21.5px;
        right: 21.5px;
        span{
          &:first-child {}
          &:last-child {}
        }
      }
    }
    .accordion-content{
      p{
        &:not(:last-child){}
      }
    }
    &.active{
      .accordion-title{
        .accordion-trigger {
          span{
            &:first-child {}
            &:last-child {}
          }
        }
      }
      .accordion-content{
        padding: 20px 0 0;
        p{}
      }
    }
  }
}
@media (max-width: 600px) {
  .accordion-wrapper{
    .accordion-title{
      .accordion-trigger{
        span{
          &:first-child {}
          &:last-child {}
        }
      }
    }
    .accordion-content{
      p{
        &:not(:last-child){}
      }
    }
    &.active{
      .accordion-title{
        .accordion-trigger {
          span{
            &:first-child {}
            &:last-child {}
          }
        }
      }
      .accordion-content{
        padding: 10px 0 0;
        p{}
      }
    }
  }
}
</style>