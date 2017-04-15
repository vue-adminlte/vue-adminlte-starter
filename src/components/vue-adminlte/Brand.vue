<template>
  <router-link :to="to"
     class="navbar-brand">
    <i v-if="icon"
       :class="icon"></i>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/'
    },
    icon: {
      type: String,
      default: undefined
    }
  }
}
</script>