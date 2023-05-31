<template>
  <footer class="footer container">
    <div class="top-block">
      <div class="left-col">
        <router-link :to="Tr.i18nRoute({ name: 'homeViewBlocks' })" class="logo">
          <img src="@/assets/images/svg/common/logo.svg" alt="logo">
        </router-link>
        <h4 class="title">
          Stay сonnected
        </h4>
        <div class="social-links">
          <a href="https://www.instagram.com/vorobyov.anton/" class="link">
            <img src="@/assets/images/svg/common/instagram-icon.svg" alt="instagram">
          </a>
          <a href="https://www.facebook.com/drageryort" class="link">
            <img src="@/assets/images/svg/common/fbmessenger-icon.svg" alt="fbmessanger">
          </a>
        </div>
        <button class="btn link">
          Contact us
        </button>
      </div>
      <div class="right-col">
        <AppMenu :menu-list="menu" :position="position"/>
        <AppSubscribeForm/>
      </div>
    </div>
    <div class="copyrights">
      <span class="left-col">
          © {{new Date().getFullYear()}} Rocket Rewards
      </span>
      <ul class="right-col">
        <li class="list-el">
          <a href="#">Privacy Policy</a>
        </li>
        <li class="list-el">
          <a href="#">Terms & Conditions</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import {computed, defineProps} from "vue";
import AppMenu from "@/components/commonEls/AppMenu";
import Tr from "@/i18n/services"
import AppSubscribeForm from "@/components/footer/AppSubscribeForm";

const props = defineProps({
  menuList: Array,
  position: String
})
const menu = computed(() => props.menuList)

</script>

<style lang="scss" scoped>
.footer{
  padding: 60px 0 38px;
  background: var(--color-black);
  &:before{
    content: "";
    width: 100%;
    height: 280px;
    background: radial-gradient(50% 100% at 50% 100%,#1d2156 0,rgba(17,19,49,0) 100%) no-repeat left top/100% 100%;
    position: absolute;
    left: 50%;
    top: -280px;
    z-index: -1;
    transform: translate(-50%,0);
    opacity: .52;
  }
  .top-block{
    display: flex;
    justify-content: space-between;
    padding: 0 0 75px;
    .left-col{
      .logo{
        display: block;
        width: 220px;
        img{
          width: 100%;
        }
      }
      .title{
        margin: 60px 0 0;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: var(--color-gray);
      }
      .social-links{
        display: flex;
        column-gap: 20px;
        margin: 15px 0 0;
        .link{
          width: 30px;
          height: 30px;
          img{}
        }
      }
      .btn{
        margin: 25px 0 0;
      }
    }
    .right-col{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 30px 0 0;
      .form-block{
        margin: 90px 0 0;
        width: 460px;
        .form-title{
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          display: flex;
          align-items: center;
          letter-spacing: 0.02em;
          color: var(--color-gray);
        }
        form{
          .field-input{
            display: flex;
            flex-direction: column;
            margin: 14px 0 0;
            input{
              padding: 13px 60px 15px 15px;
            }
            .error-field{}
          }
          .field-checkbox{
            margin: 18px 0 0;
            input{
              display: none;
            }
            label{
              display: flex;
              column-gap: 15px;
              cursor: pointer;
              .icon{}
              .text{
                font-family: "TT Norms", sans-serif;
                font-size: 16px;
                line-height: 22px;
                font-feature-settings: 'liga' off;
                color: var(--color-white);
              }
            }
          }
          .btn-iconed-submit{
            position: absolute;
            top: 4px;
            right: 4px;
            z-index: 1;
            img{}
          }
        }
      }
    }
  }
  .copyrights{
    display: flex;
    justify-content: space-between;
    .left-col{
      font-family: "TT Norms", sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: 'liga' off;
      color: var(--color-gray);
    }
    .right-col{
      display: flex;
      align-items: center;
      column-gap: 40px;
      .list-el{
        a{
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.02em;
          text-decoration-line: underline;
          color: var(--color-gray);

        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .footer{
    padding: 30px 0;
    &:before{
      height: 270px;
      top: -150px;
    }
    .top-block{
      padding: 0 0 50px;
      .left-col{
        .logo{
          width: 195px;
        }
        .title{}
        .social-links{
          .link{
            img{}
          }
        }
        .btn{}
      }
      .right-col{
        padding: 0;
        .menu{
          max-width: 365px;
          flex-wrap: wrap;
          gap: 20px 40px;
          .menu-el{
            a{
              &:hover{}
              &:active{}
            }
          }
        }
        .form-block{
          margin: 40px 0 0;
          width: 365px;
          .form-title{}
          form{
            .field-input{
              .input-field{}
              .error-field{}
            }
            .field-checkbox{
              input{}
              label{
                .icon{}
                .text{}
              }
            }
            .btn-iconed-submit{
              position: absolute;
              top: 4px;
              right: 4px;
              z-index: 1;
              img{}
            }
          }
        }
      }
    }
    .copyrights{
      .left-col{ }
      .right-col{
        .list-el{
          a{}
        }
      }
    }
  }

}
@media (max-width: 600px) {
  .footer{
    padding: 22px 0 30px;
    &:before{
      height: 145px;
      top: -88px;
      opacity: 1;
    }
    .top-block{
      flex-direction: column;
      padding: 0 0 40px;
      .left-col{
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo{
          width: 188px;
        }
        .title{
          margin: 20px 0 0;
          font-size: 12px;
          line-height: 16px;
        }
        .social-links{
          .link{
            img{}
          }
        }
        .btn{}
      }
      .right-col{
        align-items: center;
        padding: 40px 0 0;
        .menu{
          flex-direction: column;
          max-width: 100%;
          gap: 10px;
          .menu-el{
            a{
              &:hover{}
              &:active{}
            }
          }
        }
        .form-block{
          width: 100%;
          .form-title{}
          form{
            .field-input{
              .input-field{}
              .error-field{}
            }
            .field-checkbox{
              margin: 14px 0 0;
              input{}
              label{
                .icon{}
                .text{}
              }
            }
            .btn-iconed-submit{
              position: absolute;
              top: 4px;
              right: 4px;
              z-index: 1;
              img{}
            }
          }
        }
      }
    }
    .copyrights{
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      .left-col{ }
      .right-col{
        .list-el{
          a{}
        }
      }
    }
  }

}

</style>