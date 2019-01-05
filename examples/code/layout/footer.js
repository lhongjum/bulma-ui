let code = `\
<template>
  <div>
    <vb-radio-group v-model="align">
      <vb-radio :label="null">Left</vb-radio>
      <vb-radio label="centered">Centered</vb-radio>
      <vb-radio label="right">Right</vb-radio>
    </vb-radio-group>

    <vb-footer :align="align">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </vb-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      align: null
    }
  }
}
</script>
`

export default code
