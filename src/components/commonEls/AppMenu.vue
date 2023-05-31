<template>
  <menu class="menu" :class="position">
    <li
        class="menu-el"
        v-for="menuEl in menuList"
        :key="menuEl.component"
    >
      <routerLink :to="Tr.i18nRoute({ name: menuEl.component })">{{ $t(`nav.${menuEl.name}`) }}</routerLink>
    </li>
  </menu>
</template>

<script setup>
import {defineProps} from "vue";
import Tr from "@/i18n/services"
defineProps({
  menuList: Array,
  position: String
});


</script>

<style lang="scss" scoped>
.menu{
  display: flex;
  column-gap: 10px;
  &.footer_position{
    column-gap: 40px;
    justify-content: flex-end;
    .menu-el {
      min-width: unset;
    }
  }
  .menu-el {
    min-width: 130px;
    text-align: center;
    line-height: 50px;
    a {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: var(--color-white);
      text-transform: uppercase;
      transition: color .3s;

      &:hover {
        color: var(--color-orange);
        transition: color .3s;
      }
    }
  }
}
</style>