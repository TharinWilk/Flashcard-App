<template lang="html">
  <section id="settings">
    <h1>Settings</h1>
    <div class="controls">
      <CardControls/>
      <ColorControls/>
    </div>
  </section>
</template>

<script>
import  CardControls from '../components/settings/CardControls.vue'
import  ColorControls from '../components/settings/ColorControls.vue'

export default {
  components: { CardControls, ColorControls }
}
</script>

<style lang="css">

</style>
