<template>
  <div>
    <vb-title :id="id" class="anchor-title" spaced>
      <a :href="`#${id}`" class="anchor-link">#</a>
      {{title}}:
    </vb-title>
    <slot></slot>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'ExampleSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: Boolean
    }
  },
  computed: {
    id() {
      return this.title.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>
