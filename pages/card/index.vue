<template>
  <div>
    <nuxt-link to="/card/5">card-5</nuxt-link>
    <ul>
 
    </ul>
    <card></card>
    <h4>Hello!</h4>
  </div>
</template>

<script>
import Card from "@/components/cards/HomeGallery";

export default {
  components: {
    Card
  },
  asyncData() {
    // return {
    //   content: $t("welcome"),
    //   headers: [$t("test")]
    // };
  }
};
</script>

<style scoped>
h4.testche:hover {
  transition: .5s;
}
h4::after.testche {
  color: green;
}
</style>