<template>
  <div class="content-el">
    <div class="description-col">
      <h3 class="content-el-title">
        {{ aboutEl.title }}
      </h3>
      <p class="content-el-text">
        {{ aboutEl.text }}
      </p>
    </div>
    <picture class="picture-col">
      <img :src="aboutEl.image" alt="content image">
    </picture>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  aboutEl: Object
})
</script>

<style lang="scss" scoped>
.content-el {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;

  .picture-col {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 445px;
    height: 330px;

    img {
      max-width: 100%;
      max-height: 100%;
      width: unset;
      height: unset;
      object-fit: contain;
      border-radius: 10px;
      overflow: hidden;
    }
  }

  .description-col {
    width: 540px;

    .content-el-title {
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .content-el-text {
      margin: 10px 0 0;
      font-family: 'TT Norms', sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
}

@media (max-width: 1000px) {
  .content-el {
    gap: 30px;
    flex-direction: column;
    align-items: center;

    .picture-col {
      width: 450px;
      height: 333px;

      img {
      }
    }

    .description-col {
      width: 100%;

      .content-el-title {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
      }

      .content-el-text {
        margin: 5px 0 0;
        text-align: center;
      }
    }

    &:nth-child(even) {
      flex-direction: column;
    }
  }
}

@media (max-width: 600px) {
  .content-el {
    .picture-col {
      width: 100%;
      height: 215px;

      img {
      }
    }

    .description-col {
      width: 100%;

      .content-el-title {
      }

      .content-el-text {
      }
    }

    &:nth-child(even) {
      flex-direction: column;
    }
  }
}
</style>