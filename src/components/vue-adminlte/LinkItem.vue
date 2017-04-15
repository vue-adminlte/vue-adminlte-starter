<template>
  <li>
    <a :href="href"
       :target="target">
      <i v-if="icon"
         :class="icon"></i>
      <span><slot></slot></span>
      <small v-if="badgeText"
             class="label pull-right"
             :class="[badgeBgClass]">{{badgeText}}</small>
    </a>
  </li>
</template>

<script>
export default {
  computed: {
    badgeBgClass() {
      return this.badgeBg ? `bg-${this.badgeBg}` : ''
    }
  },
  props: {
    href: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: 'primary'
    },
    target: {
      type: String,
      default: 'blank'
    }
  }
}
</script>