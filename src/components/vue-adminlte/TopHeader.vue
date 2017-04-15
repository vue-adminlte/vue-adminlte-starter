<template>
  <div class="layout-top-nav">
    <header class="main-header">
      <nav class="navbar navbar-static-top"
           role="navigation">
        <div :class="fluidClass">
          <slot></slot>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    fluidClass() {
      return this.fluid ? 'container-fluid' : 'container'
    }
  },
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>