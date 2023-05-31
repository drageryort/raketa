<template>
  <main class="home">
    <AppTopBannerBlock/>
    <AppProductSliderBlock/>
    <AppInfoBlock/>
    <AppHowToPlayBlock/>
    <AppWinnersBlock/>
    <AppPartnersBlock/>
  </main>
</template>

<script setup>
import AppTopBannerBlock from "@/components/homeViewBlocks/AppTopBannerBlock";
import AppInfoBlock from "@/components/homeViewBlocks/AppInfoBlock";
import AppHowToPlayBlock from "@/components/commonBlocks/AppHowToPlayBlock";
import AppWinnersBlock from "@/components/homeViewBlocks/AppWinnersBlock";
import AppPartnersBlock from "@/components/homeViewBlocks/AppPartnersBlock";
import AppProductSliderBlock from "@/components/homeViewBlocks/AppProductSliderBlock";

</script>
<style lang="scss" scoped>
.home {
  margin: -130px 0 0 0;
}
</style>
