<template lang="html">
  <div class="colorSettings flexColumn">
    <div class="colorSettingsText">
      <h3>Change Theme</h3>
      <p class="section-text">Select a theme to change the color of the text, background, and cards</p>
    </div>

    <div class="exampleCard">
      <p>Example Text</p>
    </div>

    <div class="themeOptions">
      <button class="section-button" @click="standardTheme">Standard</button>

      <button class="section-button" @click="lightTheme">Light</button>

      <button class="section-button" @click="darkTheme">Dark</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    standardTheme() {
      let style = document.body.style;
      style.setProperty('--primary-text', '#000080')
      style.setProperty('--primary-color', '#aaa')
      style.setProperty('--primary-hover', '#fff')
      style.setProperty('--secondary-text', '#666')
      style.setProperty('--light-primary-color', '#ddd')
      style.setProperty('--secondary-hover', '#eee')
      style.setProperty('--secondary-foucus', '#333')
      style.setProperty('--primary-focus', '#f4f4f4')
    },
    lightTheme() {
      let style = document.body.style;
      style.setProperty('--primary-text', '#212121')
      style.setProperty('--primary-color', '#aaa')
      style.setProperty('--primary-hover', '#fff')
      style.setProperty('--secondary-text', '#666')
      style.setProperty('--light-primary-color', '#ddd')
      style.setProperty('--secondary-hover', '#eee')
      style.setProperty('--secondary-foucus', '#333')
      style.setProperty('--primary-focus', '#f4f4f4')
    },
    darkTheme() {
      let style = document.body.style;
      style.setProperty('--primary-text', '#D3D3D3')
      style.setProperty('--primary-color', '#121212')
      style.setProperty('--primary-hover', '#555')
      style.setProperty('--secondary-text', '#B3B3B3')
      style.setProperty('--light-primary-color', '#404040')
      style.setProperty('--secondary-hover', '#333')
      style.setProperty('--secondary-foucus', '#AAA')
      style.setProperty('--primary-focus', '#181818')
    }
  }
}
</script>

<style lang="css">

</style>
