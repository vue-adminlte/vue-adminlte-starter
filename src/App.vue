<template>
  <div class="web-container"
       :class="themeClass">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  computed: {
    themeClass() {
      return this.$store.state.theme
    }
  }
}
</script>

<style>
.web-container {
  background: #ecf0f5;
}
</style>
