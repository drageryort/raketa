<template>
  <header class="header container">

    <button
        v-if="screenSize['tablet'] || screenSize['mobile']"
        class="hamburger-menu-button"
        @click="mobileMenuTrigger = !mobileMenuTrigger"
    >
      <img src="@/assets/images/svg/common/hamburger-menu.svg" alt="open menu">
    </button>
    <div v-if="screenSize['tablet'] || screenSize['mobile']" class="mobile-menu-wrapper" :class="{active:mobileMenuTrigger}">
      <div class="mobile-menu-block">
        <button class="close-button" @click="mobileMenuTrigger = !mobileMenuTrigger">
          <img src="@/assets/images/svg/common/close-icon.svg" alt="close menu icon">
        </button>
        <AppLangTrigger/>
        <AppMenu :menu-list="mobileMenu" position="mobile-menu"/>
      </div>
    </div>

    <AppLangTrigger v-if="screenSize['desktop']"/>
    <div class="desktop-menu">
      <AppMenu :menu-list="desktopMenuLeft" v-if="screenSize['desktop']"/>
      <router-link :to="Tr.i18nRoute({ name: 'homeViewBlocks' })" class="logo">
        <img src="@/assets/images/svg/common/logo.svg" alt="logo">
      </router-link>
      <AppMenu :menu-list="desktopMenuRight" v-if="screenSize['desktop']"/>
    </div>
    <a class="cart-btn" href="#">
      <img src="@/assets/images/svg/common/cart.svg" alt="cart-icon">
      <span class="cart-amount">2</span>
    </a>
  </header>
</template>

<script setup>
import AppLangTrigger from "@/components/header/AppLangTrigger";
import {computed, defineProps, ref} from "vue";
import AppMenu from "@/components/commonEls/AppMenu";
import Tr from "@/i18n/services"
import {useStore} from "vuex";

const store = useStore();
const props = defineProps({menuList:Array});

const mobileMenuTrigger = ref(false);
const screenSize = computed(() => store.getters.screenSize);
const desktopMenuLeft = computed(() => props.menuList.filter(el => el.name === "competition" || el.name ==="rules"));
const desktopMenuRight = computed(() => props.menuList.filter(el => el.name === "about" || el.name ==="faq"));
const mobileMenu = computed(() => props.menuList);

</script>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  z-index: 2;
  .desktop-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    .logo{
      width: 220px;
      img{
        width: 100%;
      }
    }
  }
  .cart-btn{
    width: 22px;
    height: 22px;
    .cart-icon{
      display: block;
      width: 100%;
      height: 100%;
    }
    .cart-amount {
      display: flex;
      width: 18px;
      height: 18px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: var(--color-gradient-orange);
      font-weight: bold;
      font-size: 10px;
      line-height: 10px;
      color: #FFFFFF;
      position: absolute;
      top: -5px;
      right: -7px;
    }
  }
}
@media (max-width: 1000px) {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    z-index: 5;
    .hamburger-menu-button {
      img {
        width: 32px;
        height: 32px;
      }
    }
    .mobile-menu-wrapper {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: fixed;
      left: -100%;
      top: 0;
      bottom: 0;
      z-index: 10;
      transition: left .3s .3s;

      &.active {
        left: 0;
        transition: left .3s;

        .mobile-menu-block {
          left: 0;
          transition: left .3s .3s;
        }
      }

      .mobile-menu-block {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 390px;
        height: 100%;
        background: var(--color-popup-dark-blue);
        position: absolute;
        top: 0;
        left: -390px;
        transition: left .3s;

        .close-button {
          position: absolute;
          left: 39px;
          top: 24px;

          img {
            width: 32px;
            height: 32px;
          }
        }

        .lang-trigger {
          position: absolute;
          top: 33px;
          right: 39px;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 40px;

          .mobile-menu-el {
            a {
              font-size: 16px;
              line-height: 20px;
              text-transform: uppercase;
              color: var(--color-white);
            }
          }
        }
      }
    }
    .desktop-menu {
      .logo {
        width: 155px;

        img {
        }
      }
    }
    .cart-btn {
      width: 22px;
      height: 22px;

      .cart-icon {
        display: block;
        width: 100%;
        height: 100%;
      }

      .cart-amount {
        display: flex;
        width: 18px;
        height: 18px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: var(--color-gradient-orange);
        font-weight: bold;
        font-size: 10px;
        line-height: 10px;
        color: #FFFFFF;
        position: absolute;
        top: -5px;
        right: -7px;
      }
    }
  }
}
@media (max-width: 660px) {
  .header {
    .hamburger-menu-button {
      img {
      }
    }
    .mobile-menu-wrapper {
      &.active {
        .mobile-menu-block {
        }
      }

      .mobile-menu-block {
        width: 100%;
        left: -100%;

        .close-button {
          position: absolute;
          left: 15px;
          top: 24px;

          img {
          }
        }

        .lang-trigger {
          top: 33px;
          right: 25px;
        }

        .mobile-menu {
          .mobile-menu-el {
            a {
            }
          }
        }
      }
    }
  }
}

</style>