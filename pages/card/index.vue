<template>
  <div>
    <nuxt-link :to="localePath({ name: 'card-id', params: { id: 5 } })">card-5</nuxt-link>
    <ul>
      <li>content ={{ content }}</li>
      <li>header = {{ headers }}</li>
    </ul>
    <card></card>
  </div>
</template>

<script>
import Card from "@/components/cards/HomeGallery";

export default {
  components: {
    Card
  },
  asyncData() {
    return {
      content: $t("welcome"),
      headers: [$t("test")]
    };
  }
};
</script>

<style scoped>
</style>