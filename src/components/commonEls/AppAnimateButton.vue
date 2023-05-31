<template>
  <router-link
      class="btn-animate"
      :class="buttonType"
      v-if="buttonUrl"
      :to="buttonUrl"
  >
    <div>
      <span v-for="letter of buttonText" :key="letter" v-html="letter"></span>
    </div>
  </router-link>
  <button
      class="btn-animate"
      :class="buttonType"
      v-else>
    <div>
      <span v-for="letter of buttonText" :key="letter" v-html="letter"></span>
    </div>
  </button>

</template>

<script setup>
import {computed, defineProps} from "vue";
  const props = defineProps({
    buttonUrl: String,
    buttonType: String,
    buttonName: String
  })
  const buttonText = computed(() => {
    return props.buttonName.split('').map(letter => letter === ' ' ? '&nbsp;' : letter);
  })
</script>

<style lang="scss" scoped>
  .primary{
    display: block;
    padding: 18px 36px;
    @media (max-width: 660px){
      padding: 18px;
    }
    height: 50px;
    min-width: max-content;
    background: linear-gradient(180deg, #EC7E25 0%, #C43A2E 100%);
    border-radius: 25px;
    font-weight: bold;
    font-size: 16px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-white);
    transition: .5s;
    >span{
      min-width: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      text-align: inherit;
      letter-spacing: inherit;
      text-transform: inherit;
      color: inherit;
    }
    &:hover{
      background: linear-gradient(180deg, #FC9040 0%, #DD4C33 100%);
      transition: .5s;
    }
    &:active{
      background: linear-gradient(180deg, #CF650F 0%, #B4220B 100%);
      transition: .5s;
    }
    &:disabled{
      opacity: .4;
      transition: .5s;
    }
  }
  .secondary{
    display: block;
    padding: 18px 36px;
    @media (max-width: 660px){
      padding: 18px;
    }
    height: 50px;
    min-width: max-content;
    background: transparent;
    font-weight: bold;
    font-size: 16px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-white);
    transition: .5s;
    &:before{
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      border-radius:50px;
      padding:2px;
      background:linear-gradient(180deg, #EC7E25 0%, #C43A2E 100%);
      -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      transition: .5s;
    }

    >span{
      min-width: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      text-align: inherit;
      letter-spacing: inherit;
      text-transform: inherit;
      color: inherit;
    }
    &:hover{
      &:before{
        background:linear-gradient(180deg, #FC9040 0%, #DD4C33 100%);
        transition: .5s;
      }
    }
    &:active{
      &:before{
        background:linear-gradient(180deg, #CF650F 0%, #B4220B 100%);
        transition: .5s;
      }
    }
    &:disabled{
      opacity: .4;
      transition: .5s;
    }
  }
</style>