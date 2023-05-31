<template>
  <section class="info-block container">
    <h2 class="title">
      Block with information confirming the honesty of the company
    </h2>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit nulla in id odio orci, urna vitae
      duis. Vel consequat cras bibendum tortor erat fusce lectus sed nam. Eget etiam eget ipsum sagittis,
      neque, odio tellus venenatis. Interdum scelerisque adipiscing congue fusce volutpat. Consequat eu
      ultrices nisl bibendum. Eget iaculis gravida et sagittis elit. Sed arcu, faucibus mauris, bibendum
      cursus felis lacus, risus proin.
      <br>
      <br>
      Commodo enim vestibulum turpis suscipit aliquet potenti sit amet interdum. Ullamcorper aliquet
      auctor venenatis aliquam molestie elit sit. Sagittis, odio tempor augue consequat ac viverra felis.
      Id nibh ornare nulla aliquam habitant vestibulum. Habitant.
    </p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.info-block{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 130px 0 105px;
  .title{
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
    text-align: center;
  }
  .description{
    font-family: 'TT Norms', sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-feature-settings: 'liga' off;
    color: var(--color-gray);
    text-align: center;
  }
}
@media (max-width: 1000px) {
  .info-block{
    row-gap: 24px;
    padding: 70px 0 60px;
    .title{
      font-size: 20px;
      line-height: 24px;
    }
    .description{}
  }
}
@media (max-width: 600px) {
  .info-block{
    .title{}
    .description{}
  }
}
</style>