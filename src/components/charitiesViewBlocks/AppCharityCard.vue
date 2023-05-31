<template>
  <div class="charity-el">
    <picture class="picture-col">
      <img class="image" :src="charityEl.logo" alt="charity logo">
    </picture>
    <div class="content-col">
      <p class="text">{{charityEl.info}}</p>
      <a :href="charityEl.link" class="btn btn-secondary btn-animate">
        Visit site
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  charityEl: Object
})
</script>

<style lang="scss" scoped>
.charity-el {
  display: flex;
  align-items: center;
  padding: 40px;
  background: var(--color-gradient-blue);
  border-radius: 20px;
  column-gap: 30px;

  .picture-col {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 255px;
    height: 190px;
    padding: 25px;

    .image {
      max-width: 100%;
      max-height: 100%;
      width: unset;
      height: unset;
      object-fit: contain;
    }
  }

  .content-col {
    width: 745px;

    .text {
      font-family: 'TT Norms', sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);
    }

    .btn {
      margin: 40px 0 0;
    }
  }
}
@media (max-width: 1000px) {
  .charity-el{
    align-items: flex-start;
    padding: 20px 20px 30px ;
    column-gap: 20px;
    .picture-col{
      width: 155px;
      height: 115px;
      padding: 15px;
      .image{}
    }
    .content-col{
      width: 475px;
      .text{
        font-size: 16px;
        line-height: 22px;
      }
      .btn{
        margin: 30px 0 0;
      }
    }
  }
}
@media (max-width: 600px) {
  .charity-el{
    flex-direction: column;
    column-gap: 20px;
    padding: 10px 20px 30px;
    align-items: center;
    .picture-col{
      width: 100%;
      height: 130px;
      padding: 15px;
      .image{}
    }
    .content-col{
      width: 100%;
      .text{}
      .btn{
        width: 100%;
      }
    }
  }
}
</style>