<template>
  <section class="top-banner-block">
    <picture class="image">
      <img src="@/assets/images/png/home/top-banner.png" alt="top-banner">
    </picture>
    <div class="container content">
      <h1 class="title">
        Tellus gravida et in lacus duis.
      </h1>
      <div class="btn">
        <AppAnimateButton buttonUrl="competition" buttonName="Enter competition" buttonType="primary"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppAnimateButton from "@/components/commonEls/AppAnimateButton";
</script>

<style lang="scss" scoped>
.top-banner-block {
  .image {
    width: 100%;
    height: max-content;

    img {
      width: 100%;
      min-height: 460px;
      object-fit: cover;
      object-position: center;
    }
  }

  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(1, 2, 7, 0) 0%, #010207 100%) no-repeat bottom center/100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 63px;
    position: absolute;
    top: 315px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;

    .title {
      text-align: center;
      font-weight: bold;
      font-size: 64px;
      line-height: 80px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    .btn {
    }
  }
}
@media (max-width: 1000px) {
  .top-banner-block{
    .image{
      img{}
    }
    &:after{
      height: 100px;
    }
    .content{
      row-gap: 30px;
      top: 50%;
      transform: translate(-50%, -50%);
      .title{
        font-size: 30px;
        line-height: 40px;
      }
      .btn{}
    }
  }
}
@media (max-width: 660px) {}
</style>
