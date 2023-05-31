<template>
  <section class="how-to-play-block">
    <div class="container">
      <h2 class="title">
        How to play
      </h2>
      <p class="description">
        Entering a competition with Rocket Rewards is simple
      </p>
      <ul class="step-list">
        <li class="step-el">
          <div class="image">
            <img src="@/assets/images/svg/common/step1.svg" alt="step-icon">
          </div>
          <div class="step-content">
            <h3 class="step-title">Step 1</h3>
            <p class="step-description">Select tickets</p>
          </div>
        </li>
        <li class="step-el">
          <div class="image">
            <img src="@/assets/images/svg/common/step2.svg" alt="step-icon">
          </div>
          <div class="step-content">
            <h3 class="step-title">Step 2</h3>
            <p class="step-description">Play the game</p>
          </div>
        </li>
        <li class="step-el">
          <div class="image">
            <img src="@/assets/images/svg/common/step3.svg" alt="step-icon">
          </div>
          <div class="step-content">
            <h3 class="step-title">Step 3</h3>
            <p class="step-description">Purchase tickets</p>
          </div>
        </li>
        <li class="step-el">
          <div class="image">
            <img src="@/assets/images/svg/common/step4.svg" alt="step-icon">
          </div>
          <div class="step-content">
            <h3 class="step-title">Step 4</h3>
            <p class="step-description">Good luck!</p>
          </div>
        </li>
      </ul>
      <div class="btn">
        <AppAnimateButton
            buttonName="Enter competition"
            buttonType="primary"
            buttonUrl="competition"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppAnimateButton from "@/components/commonEls/AppAnimateButton";
</script>

<style lang="scss" scoped>
.how-to-play-block{
  padding: 240px 0 80px;
  background: url("@/assets/images/png/common/earth.png") no-repeat center top/100%;
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
  .step-list{
    display: flex;
    justify-content: center;
    column-gap: 140px;
    margin: 50px 0 0;
    .step-el{
      .image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 125px;
        height: 125px;
        border-radius: 50%;
        background: var(--color-circles-dark-blue);
        img{
          width: 47px;
          height: 47px;
        }
      }
      .step-content{
        .step-title{
          margin:27px 0 0;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--color-white);
        }
        .step-description{
          margin: 10px 0 0;
          font-family: 'TT Norms', sans-serif;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          font-feature-settings: 'liga' off;
          color: var(--color-gray);
        }
      }
      &:not(:last-child){
        .image {
          &:after {
            display: block;
            content: "";
            width: 60px;
            height: 14px;
            background: url("@/assets//images/svg/home/сircle_line.svg") no-repeat 100% 100%/100% 100%;
            position: absolute;
            top: 50%;
            left: calc(100% + 40px);
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  .btn{
    display: block;
    margin: 50px auto 0;
    width: max-content;
  }
}
@media (max-width: 1000px) {
  .how-to-play-block{
    padding: 105px 0 0;
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title{
      font-size: 20px;
      line-height: 24px;
    }
    .description{
      margin: 5px 0 0;
    }
    .step-list{
      flex-direction: column;
      align-items: flex-start;
      row-gap: 55px;
      margin: 40px 0 0;
      .step-el{
        display: flex;
        column-gap: 20px;
        .image{
          width: 90px;
          height: 90px;
          img{
            width: 34px;
            height: 34px;
          }
        }
        .step-content{
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          .step-title{
            margin: 0;
          }
          .step-description{
            margin: 5px 0 0;
          }
        }
        &:not(:last-child){
          .image {
            &:after {
              width: 30px;
              height: 7px;
              top: unset;
              left: 30px;
              bottom: -30px;
              transform: rotate(90deg);
            }
          }
        }
      }
    }
    .btn{
      display: block;
      margin: 40px auto 0;
    }
  }
}
@media (max-width: 600px) {
  .how-to-play-block{
    padding: 66px 0 0;
    .container{}
    .title{}
    .description{}
    .step-list{
      .step-el{
        .image{
          img{}
        }
        .step-content{
          .step-title{}
          .step-description{}
        }
        &:not(:last-child){
          .image {
            &:after {}
          }
        }
      }
    }
    .btn{
      width: 100%;
    }
  }
}
</style>