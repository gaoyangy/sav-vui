<template>
  <label :class="['sav-radio', disabledModify, colorModify, sizeModify, blockModify]">
    <input type="radio" :disabled="disabled"
      :checked="isOption ? value == option : value"
      :value="option"
      @change="changeValue">
    <span class="as-text">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import {elements, createMixins} from '../mixin'
  export default {
    mixins: elements.concat(createMixins(['block'])),
    props: {
      value: {
        default: false
      },
      option: {
        default: null
      }
    },
    computed: {
      isOption () {
        return this.option !== null
      }
    },
    methods: {
      changeValue (val) {
        this.$emit('input', this.isOption ? this.option : !this.value)
      }
    }
  }
</script>
