<template>
  <section class="partners-block container">
    <h2 class="title">
      Support a great cause
    </h2>
    <p class="description">
      We donate 10% of our profits to good causes, via charities of our choice. We are currently
      supporting the following organisation(s):
    </p>
    <div class="partners-list">
      <div class="partner-el">
        <picture class="image">
          <img src="../../../public/images/png/charitiesPage/logo-partner1.png" alt="partner-logo">
        </picture>
      </div>
      <div class="partner-el">
        <picture class="image">
          <img src="../../../public/images/png/charitiesPage/logo-partner2.png" alt="partner-logo">
        </picture>
      </div>
    </div>
    <div class="btn">
      <appAnimateButton buttonType="secondary" buttonName="More info" buttonUrl="charities"/>
    </div>
  </section>
</template>

<script setup>
import AppAnimateButton from "@/components/commonEls/AppAnimateButton";
</script>
<style lang="scss" scoped>
.partners-block{
  padding: 60px 0 140px;
  overflow: hidden;
  .title{
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
  }
  .description{
    margin: 10px 0 0;
    font-family: 'TT Norms', sans-serif;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    font-feature-settings: 'liga' off;
    color: var(--color-gray);
  }
  .partners-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 20px 0 0;
    .partner-el{
      display: flex;
      width: 255px;
      height: 190px;
      justify-content: center;
      align-items: center;
      .image{
        img{
          max-width: 100%;
          max-height: 100%;
          width: unset;
          height: unset;
          object-fit: contain;
        }
      }
    }
  }
  .btn{
    width: max-content;
    margin: 30px auto 0;
  }
}
@media (max-width: 1000px) {
  .partners-block{
    .title{
      font-size: 20px;
      line-height: 24px;
    }
    .description{
      margin: 5px 0 0;}
    .partners-list{
      .partner-el{
        .image{
          img{}
        }
      }
    }
    .btn{}
  }
}
@media (max-width: 660px) {
  .partners-block{
    padding: 80px 0 140px;
    .title{}
    .description{
      margin: 6px 0 0;
    }
    .partners-list{
      gap: 20px;
      .partner-el{
        width: 255px;
        height: 120px;
        .image{
          img{}
        }
      }
    }
    .btn{
      min-width: 190px;
    }
  }
}
</style>