<template>
  <div>
    <h1>Route id = {{ $route.params.id }}</h1>
    <h2>{{ $t('welcome') }}</h2>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      id: params.id
    };
  }
};
</script>

<style>
</style>