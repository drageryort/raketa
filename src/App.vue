<template>
  <div>
    <AppHeader :menuList="menuList"/>
    <router-view/>
    <AppFooter :menuList="menuList" :position="'footer_position'"/>
  </div>
</template>


<script setup>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import {onMounted, ref} from "vue";
import {useStore} from 'vuex'

const store = useStore()

const menuList = ref([
  {
    name: "competition",
    component: "competitionView"
  }, {
    name: "rules",
    component: "rulesViewBlocks"
  },
  {
    name: "about",
    component: "aboutViewBlocks"
  },
  {
    name: "charities",
    component: "charitiesView"
  },
  {
    name: "past_winner",
    component: "pastWinnerViewBlocks"
  },
  {
    name: "faq",
    component: "faqViewBlocks"
  },
])
onMounted(() => {
  store.commit("screenSizeMutation", window.outerWidth)
  window.addEventListener("resize", () => {
    store.commit("screenSizeMutation", window.outerWidth)
  })
})

</script>

<style lang="scss"></style>