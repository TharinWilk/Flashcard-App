<template lang="html">
  <section id="settings" class="absoluteCenter">
    <h2>Settings</h2>
    <div class="controls flexColumn">
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
  #settings {
    padding: 2rem;
    background: var(--textarea-hover);
    width: 50vw;;;
    max-height: 80vh;
    min-height: 520px;
    border-radius: 5px;
  }

  #settings h2 {
    border-bottom: 2px solid var(--textarea-background);
  }

  .controls {
    width: 100%;
  }
</style>
