<template>
  <div class="product-slider-block">
    <div class="product-slider-wrapper container">
      <div class="product-slider">
        <swiper
            class="swiper-wrapper "
            loop="true"
            slides-per-view="1"
            space-between="20"
            :modules="modules"
            :pagination= "{
              clickable: true,
              el: '.product-slider-block .pagination',
            }"
            :navigation="{
              nextEl: '.product-slider-block .button-next',
              prevEl: '.product-slider-block .button-prev',
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide v-for="i in 3" :key="i">
            <AppProductCard/>
          </swiper-slide>
        </swiper>
      </div>
      <div class="pagination"></div>
      <div class="button-prev">
        <svg width="30" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 42 6 24 24 6" stroke="#EC7E25" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="button-next">
        <svg width="30" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m6 42 18-18L6 6" stroke="#EC7E25" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>

</template>
<script setup>
import { Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import AppProductCard from "@/components/commonEls/AppProductCard";

const modules = [Navigation, Pagination]

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style lang="scss" scoped>
.product-slider-block{
  padding: 55px 0 10px;
  .product-slider-wrapper{
    .product-slider{
      overflow: hidden;
    }
    .button-prev, .button-next{
      width: 30px;
      height: 48px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      &:hover{
        svg{
          path{
            stroke: #FF9B4A;
          }
        }
      }
      &:active{
        svg{
          path{
            stroke: #BD5806;
          }
        }
      }
    }
    .button-prev{
      left: -45px;
    }
    .button-next{
      right: -45px;
    }
    .pagination{
      display: flex;
      justify-content: center;
      margin: 30px 0 0;
      column-gap: 10px;
      bottom: 0;
      .swiper-pagination-bullet{
        margin: 0;
        width: 10px;
        height: 10px;
        background: var(--color-dots-inactive);
        opacity: 0.5;
        cursor: pointer;
        &.swiper-pagination-bullet-active{
          opacity: 1;
          background: var(--color-gradient-orange);
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .product-slider-block{
    padding: 0 0 10px;
    .product-slider-wrapper{
      .product-slider{}
      .button-prev, .button-next{
        display: none;
        &:hover{
          svg{
            path{}
          }
        }
        &:active{
          svg{
            path{}
          }
        }
      }
      .button-prev{}
      .button-next{}
      .pagination{
        margin: 20px 0 0;
        .swiper-pagination-bullet{
          &.swiper-pagination-bullet-active{}
        }
      }
    }
  }
}
@media (max-width: 660px) {
  .product-slider-block{
    padding: 0 0 10px;
    .product-slider-wrapper{
      .product-slider{}
      .button-prev, .button-next{
        display: none;
        &:hover{
          svg{
            path{}
          }
        }
        &:active{
          svg{
            path{}
          }
        }
      }
      .button-prev{}
      .button-next{}
      .pagination{
        .swiper-pagination-bullet{
          &.swiper-pagination-bullet-active{}
        }
      }
    }
  }
}
</style>