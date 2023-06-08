<template>
  <div class="swiper-slide product-card">
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
      </ul>
      <div class="promo-info">
        <div class="timer-wrapper">
          <h3 class="timer-title">
            Left to the complete
          </h3>
          <ul class="timer-counter">
            <li class="timer-counter-el days">
              <span>{{timer.days}}</span> d
            </li>
            <li class="timer-counter-el hours">
              <span>{{timer.hours}}</span> h
            </li>
            <li class="timer-counter-el minutes">
              <span>{{timer.minutes}}</span> m
            </li>
            <li class="timer-counter-el seconds">
              <span>{{timer.seconds}}</span> s
            </li>
          </ul>
        </div>
        <div class="amount-scroll-wrapper">
          <h3 class="amount-scroll-title">Tickets remaining</h3>
          <div class="range-like-el">
            <div class="progress-bar"
                 :style="{ width: `${availableAmount/totalAmount*100}%`}"
                 ref="progresBar">
              <span class="value" ref="progresBarValue"> {{availableAmount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons-block">
        <div class="btn desktop tablet">
          <AppAnimateButton buttonType="primary" buttonName="Buy tickets"/>
        </div>
        <a href="#" class="btn btn-primary-iconed mobile">
          <img src="@/assets/images/svg/common/cart.svg" alt="cart icon">
        </a>
        <div class="counter">
          <button>
            <img src="@/assets/images/svg/common/minusIcon.svg" alt="minus icon" @click="cartAmount--">
          </button>
          <input type="text" v-model="cartAmount">
          <button>
            <img src="@/assets/images/svg/common/plusIcon.svg" alt="plus icon" @click="cartAmount++">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import AppAnimateButton from "@/components/commonEls/AppAnimateButton";

const totalAmount = ref(42);
const startAmount = ref(18);
const cartAmount = ref(0);
const finalDate = new Date().getTime() + 250000000;
const timer = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

watch(cartAmount, newCartAmount => {
  if (newCartAmount < 0) {
    cartAmount.value = 0
  } else if(newCartAmount > startAmount.value){
    cartAmount.value = startAmount.value
  }
})

onMounted(()=>{
  const timerService = setInterval(() => {
      let startDelta = finalDate - new Date().getTime();
      if(timer.value.days >= 0){
        timer.value.days = Math.floor(startDelta / (1000 * 60 * 60 * 24));
        timer.value.hours = Math.floor((startDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timer.value.minutes = Math.floor((startDelta % (1000 * 60 * 60)) / (1000 * 60));
        timer.value.seconds = Math.floor((startDelta % (1000 * 60)) / 1000);
        return
      }
      timer.value.days = 0;
      timer.value.hours = 0;
      timer.value.minutes = 0;
      timer.value.seconds = 0;
      clearInterval(timerService)
  },1000);
})
const availableAmount = computed(() => {
  return startAmount.value - cartAmount.value
})
</script>

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
    .promo-info{
      display: flex;
      column-gap: 40px;
      margin: 24px 0 0;
      padding: 16px 20px 20px;
      background: var(--color-promo-info-blue);
      border-radius: 10px;
      .timer-wrapper{
        display: flex;
        flex-direction: column;
        .timer-title{
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.02em;
          color: var(--color-gray);
        }
        .timer-counter{
          display: flex;
          column-gap: 4px;
          margin: 8px 0 0;
          .timer-counter-el{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 30px;

            background: var(--color-blue);
            border-radius: 6px;

            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            color: var(--color-white);

          }
        }
      }
      .amount-scroll-wrapper{
        display: flex;
        flex-direction: column;
        .amount-scroll-title{
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.02em;
          color: var(--color-gray);
        }
        .range-like-el{
          width: 250px;
          height: 20px;
          margin: 13px 0 0;
          border-radius: 10px;
          background: var(--color-rangeLike-el);
          .progress-bar{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 4px 10px;
            height: 100%;
            min-width: 25px;
            max-width: 100%;
            border-radius: 10px;
            background: var(--color-rangeLike-progress);
            .value{
              font-weight: bold;
              font-size: 12px;
              line-height: 14px;
              color: var(--color-white)
            }
          }
        }
      }
    }
    .buttons-block{
      display: flex;
      column-gap: 20px;
      margin: 40px 0 0;
      .btn{}
    }
    .counter{
      display: flex;
      align-items: center;
      width: 160px;
      height: 50px;
      background: rgba(236, 126, 37, 0.1);
      border: 1px solid var(--color-orange);
      border-radius: 25px;
    }
  }
}
@media (max-width: 1000px) {
  .product-card{
    column-gap: 20px;
    padding: 20px;
    align-items: flex-start;
    .picture-col{
      width: 255px;
      height: 255px;
      .image{
        img{}
      }
    }
    .content-col{
      padding: 10px 0 0;
      width: 375px;
      .product-title{
        font-size: 20px;
        line-height: 24px;
      }
      .description{}
      .attribute-list{
        margin: 20px 0 0;
        .attribute-el{
          .name{}
          .value{}
        }
      }
      .promo-info{
        column-gap: 30px;
        .timer-wrapper{
          .timer-title{}
          .timer-counter{
            .timer-counter-el{
              width: 38px;
            }
          }
        }
        .amount-scroll-wrapper{
          .amount-scroll-title{}
          .range-like-el{
            width: 150px;
            .progress-bar{
              .value{}
            }
          }
        }
      }
      .buttons-block{
        margin: 20px 0 0;
        .btn{}
      }
      .winners-info{
        margin: 30px 0 0;
        padding: 35px;
        .block-title{ }
        .winner-name{}
      }
    }
  }
}
@media (max-width: 660px) {
  .product-card{
    flex-direction: column;
    row-gap: 10px;
    padding: 10px 10px 20px;
    align-items: center;
    .picture-col{
      width: 140px;
      height: 140px;
      .image{}
    }
    .content-col{
      padding: 0;
      width: 100%;
      .product-title{
        text-align: center;
      }
      .description{
        display: none;
      }
      .attribute-list{
        .attribute-el{
          justify-content: center;
          column-gap: 6px;
          .name{
            font-size: 12px;
            line-height: 14px;
          }
          .value{
            font-size: 12px;
            line-height: 14px;
          }
        }
      }
      .promo-info{
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        margin: 20px 0 0;
        padding: 16px 16px 26px;
        .timer-wrapper{
          .timer-title{
            text-align: center;
          }
          .timer-counter{
            .timer-counter-el{}
          }
        }
        .amount-scroll-wrapper{
          width: 100%;
          .amount-scroll-title{
            text-align: center;
          }
          .range-like-el{
            width: 100%;
            .progress-bar{
              .value{}
            }
          }
        }
      }
      .buttons-block{
        column-gap: 10px;
        .btn{
          width: calc((100% - 10px) / 2);
        }
      }
      .winners-info{
        margin: 20px 0 0;
        padding: 75px 25px;
        .block-title{ }
        .winner-name{}
      }
    }
  }
}
</style>