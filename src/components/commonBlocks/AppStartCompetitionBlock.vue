<template>
  <section class="move-to-competition-block container">
    <h2 class="block-title">
      Enter our latest competition
    </h2>
    <div class="btn">
      <AppAnimateButton
          buttonName="Enter competition"
          buttonUrl="competition"
          buttonType="primary" />
    </div>
  </section>
</template>

<script setup>
import AppAnimateButton from "@/components/commonEls/AppAnimateButton";

</script>

<style lang="scss" scoped>
.move-to-competition-block {
  padding: 180px 0 140px;

  .block-title {
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
    text-align: center;
  }
  .text {
    margin: 10px 0 0;
    font-family: 'TT Norms', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    font-feature-settings: 'liga' off;
    color: var(--color--light-gray);

  }
  .btn {
    margin: 40px auto 0;
    width: max-content;
  }
}
@media (max-width: 1000px) {
  .move-to-competition-block{
    padding: 80px 0 140px;
    .block-title{
      font-size: 20px;
      line-height: 24px;
    }
    .text{
      margin: 5px 0 0;
    }
    .btn{
      margin: 30px auto 0;
    }
  }
}
@media (max-width: 600px) {
  .move-to-competition-block{
    padding: 80px 0 140px;
    .block-title{
      font-size: 20px;
      line-height: 24px;
    }
    .text{
      margin: 5px 0 0;
    }
    .btn{
      width: 100%;
    }
  }
}
</style>