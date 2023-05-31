<template>
  <section class="winners-block">
    <div class="container">
      <h2 class="title">
        New winners announced every week!
      </h2>
      <div class="btn">
        <AppAnimateButton buttonType="primary" buttonName="See who won" buttonUrl="past-winner"/>
      </div>

    </div>
  </section>
</template>

<script setup>
import AppAnimateButton from "@/components/commonEls/AppAnimateButton";
</script>

<style lang="scss" scoped>
.winners-block{
  margin: 60px 0 95px;
  padding: 150px 0 110px;
  background: url("@/assets/images/png/common/star-sky.png") no-repeat center center/100% auto;
  .title{
    margin: 0 auto;
    max-width: 800px;
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
  }
  .btn{
    display: block;
    width: max-content;
    margin: 60px auto 0;
  }
}
@media (max-width: 1000px) {
  .winners-block{
    background: url("@/assets/images/png/common/star-sky-middle.png") no-repeat center center/100% auto;
    margin: 80px 0 0;
    padding: 75px 0;
    .title{
      max-width: 100%;
      font-size: 20px;
      line-height: 24px;
    }
    .btn{
      margin: 30px auto 0;
    }
  }
}
@media (max-width: 600px) {
  .winners-block{
    padding: 50px 0;
    background: url("@/assets/images/png/common/star-sky-small.png") no-repeat center center/100% 100%;
    .title{}
    .btn{
      min-width: 205px;
    }
  }
}
</style>
