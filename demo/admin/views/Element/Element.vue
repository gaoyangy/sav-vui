<template>
  <div class="page-element">
    <nav-header></nav-header>
    <router-view class="view-container"></router-view>
  </div>
</template>
<script>
  import NavHeader from '../common/NavHeader.vue'
  export default {
    name: 'Element',
    getters: [
    ],
    actions: [
    ],
    components: {
      NavHeader
    }
  }
</script>
