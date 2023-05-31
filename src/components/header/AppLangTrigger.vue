<template>
  <div
      class="lang-trigger"
      :class="{ active: langTriggerState }"
      @click="langTriggerAction"
  >
    <span class="active-lang"> {{ locale }}</span>
    <ul class="lang-list">
      <li
          class="lang-el"
          v-for="sLocale in supportedLocales"
          :key="`locale-${sLocale}`"
          @click="switchLanguage(sLocale)"
      >{{sLocale}}
      </li>
    </ul>
  </div>
</template>

<script setup>

import {useI18n} from 'vue-i18n'
import {useRouter} from "vue-router"
import Tr from "@/i18n/services"
import {computed, ref} from "vue";

const langTriggerState = ref(false);
const langTriggerAction = () => {
  langTriggerState.value = !langTriggerState.value;
};

const {locale} = useI18n()
const supportedLocales = computed(()=>Tr.supportedLocales.filter(el => String(el) !== String(locale.value)))
const router = useRouter()

const switchLanguage = async lang => {
  await Tr.switchLanguage(lang)
  try {
    await router.replace({params: {locale: lang}})
  } catch (e) {
    console.log(e)
    router.push("/")
  }
}
</script>

<style lang="scss" scoped>
.lang-trigger {
  .active-lang {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: var(--color-white);
    cursor: pointer;

    &:after {
      display: block;
      content: "";
      background: url("@/assets/images/svg/common/arrow-bottom.svg") no-repeat center center/cover;
      width: 6px;
      height: 4px;
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.5s;
    }
  }

  .lang-list {
    max-height: 0;
    padding: 0 10px;
    border-radius: 6px;
    background: var(--color-gradient-blue);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s;

    &:after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 6px;
      border-color: transparent transparent #121434 transparent;
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
    }

    .lang-el {
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      color: var(--color-white);
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  &.active {
    .active-lang {
      &:after {
        transform: translateY(-50%) rotate(180deg);
        transition: 0.5s;
      }
    }
    .lang-list {
      max-height: unset;
      padding: 16px 10px 8px;
      overflow: unset;
      opacity: 1;
      transition: opacity 0.5s;
    }
  }
}
</style>