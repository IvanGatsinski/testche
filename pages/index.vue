<template>
  <div class="container">
    <div>
       <nuxt-link to="/test">to test</nuxt-link>
      <nuxt-link to='/auth/sign-in'>Login Page</nuxt-link>
      <h1 class="title">{{ $t('welcome') }}</h1>

     <nuxt-link to="/card">to card</nuxt-link>
      <div class="links">

        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['get_language'])
  },
  created() {
    console.log(this.$i18n);
    
    console.log(123,this.$i18n.getLocaleCookie());
    
    
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
