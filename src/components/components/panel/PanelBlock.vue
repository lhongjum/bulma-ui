<template>
  <div v-if="!disableHover">
    <a
      class="panel-block"
      v-for="(item, index) in list"
      :key="index"
      @click.stop="handleClick(index)"
      :class="{'is-active': currentItem === index}"
    >
      <span v-if="item.icon" class="panel-icon">
        <i :class="item.icon" aria-hidden="true"></i>
      </span>
      <slot>{{ item.name || item }}</slot>
    </a>
  </div>
  <div v-else class="panel-block">
    <span v-if="icon" class="panel-icon">
      <i :class="icon" aria-hidden="true"></i>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbPanelBlock',
  props: {
    icon: {
      type: [String, Boolean]
    },
    actived: Boolean,
    disableHover: Boolean,
    list: {
      type: Array
    }
  },
  data() {
    return {
      currentItem: null
    }
  },
  methods: {
    handleClick(index) {
      this.currentItem = index
      this.$emit('click', index)
    },
    reset() {
      this.currentItem = null
    }
  }
}
</script>
