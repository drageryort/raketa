<template>
  <div class="product-card">
    <picture class="picture-col" >
      <img class="image" src="@/assets/images/png/common/product.png" alt="product-image">
    </picture>
    <div class="content-col">
      <h2 class="product-title">
        Rolex oyster perpetual
      </h2>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit fames id quisque
        sit diam, turpis. Nulla arcu elit pharetra, pharetra fermentum bibendum consectetur
        ultricies et. Cras faucibus nulla.
      </p>
      <ul class="attribute-list">
        <li class="attribute-el">
          <span class="name">Ticket price:</span>
          <span class="value">$20</span>
        </li>
        <li class="attribute-el">
          <span class="name">Market value:</span>
          <span class="value">$8.000+</span>
        </li>
        <li class="attribute-el">
          <span class="name">Expiration date:</span>
          <span class="value">06.04.2021</span>
        </li>
      </ul>
      <div class="winners-info">
        <h5 class="block-title">Winner:</h5>
        <span class="winner-name">Cameron Williamson</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-card{
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  padding: 30px 50px 30px 30px;
  background: linear-gradient(180deg, #111434 0%, #0A0B1A 100%);
  border-radius: 20px;
  .picture-col{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 426px;
    height: 426px;
    .image{
      max-width: 100%;
      max-height: 100%;
      width: unset;
      height: unset;
      object-fit: contain;
    }
  }
  .content-col{
    width: 575px;
    .product-title{
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--color-white);
    }
    .description{
      margin: 10px 0 0;
      font-family: "TT Norms", sans-serif;
      font-size: 14px;
      line-height: 18px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);
    }
    .attribute-list{
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      margin: 28px 0 0;
      .attribute-el{
        display: flex;
        column-gap: 8px;
        .name{
          font-size: 16px;
          line-height: 20px;
          text-transform: uppercase;
          color: var(--color-white);
        }
        .value{
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          text-transform: uppercase;
          color: var(--color-white);
        }
      }
    }
    .winners-info{
      margin: 65px 0 0;
      padding: 40px;
      text-align: center;
      border: 1px solid var(--color-orange);
      border-radius: 10px;
      .block-title{
        margin: 0 0 10px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--color-white);
      }
      .winner-name{
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--color-orange);
      }
    }
  }
}
</style>