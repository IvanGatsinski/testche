<template>
  <div class="error__container">
    <p v-if="submitted" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: ["text", "value", "submitted", "minlength", "maxlength", "required_text", "minlength_text", "maxlength_text"],
  computed: {
    errorMessage() {
      if (!this.value) {
        return this.required_text;
      }
      if (this.value.length > Number(this.maxlength)) {
        return this.maxlength_text;
      }
      if (this.value.length < Number(this.minlength)) {
        return this.minlength_text;
      }
    }
  }
};
</script>

<style>
.error__container {
  position: relative;
  padding: 1.3rem 0;
  margin-left: 10px;
  /* margin: 10px 0; */
}
.error {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  letter-spacing: 1px;
  color: rgb(150, 0, 0);
}
</style>