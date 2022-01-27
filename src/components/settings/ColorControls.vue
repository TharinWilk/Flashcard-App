<template lang="html">
  <div class="colorSettings flexColumn">
    <div class="colorSettingsText">
      <h3>Change Theme</h3>
      <p>Select a theme to change the color of the text, background, and cards</p>
    </div>

    <div class="exampleCard flexColumn">
      <p>Example Text</p>
    </div>

    <div class="themeOptions flexRow">
      <button @click="standardTheme">
        Standard
      </button>
      <button @click="lightTheme">
        Light
      </button>
      <button @click="darkTheme">
        Dark
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    standardTheme() {
      let style = document.body.style;
      style.setProperty('--text-color', '#000080')
      style.setProperty('--body-color', '#aaa')
      style.setProperty('--hover-color', '#fff')
      style.setProperty('--textarea-text', '#666')
      style.setProperty('--textarea-background', '#ddd')
      style.setProperty('--textarea-hover', '#eee')
      style.setProperty('--textarea-focus-color', '#333')
      style.setProperty('--textarea-focus-background', '#f4f4f4')
    },
    lightTheme() {
      let style = document.body.style;
      style.setProperty('--text-color', '#212121')
      style.setProperty('--body-color', '#aaa')
      style.setProperty('--hover-color', '#fff')
      style.setProperty('--textarea-text', '#666')
      style.setProperty('--textarea-background', '#ddd')
      style.setProperty('--textarea-hover', '#eee')
      style.setProperty('--textarea-focus-color', '#333')
      style.setProperty('--textarea-focus-background', '#f4f4f4')
    },
    darkTheme() {
      let style = document.body.style;
      style.setProperty('--text-color', '#D3D3D3')
      style.setProperty('--body-color', '#121212')
      style.setProperty('--hover-color', '#555')
      style.setProperty('--textarea-text', '#B3B3B3')
      style.setProperty('--textarea-background', '#404040')
      style.setProperty('--textarea-hover', '#333')
      style.setProperty('--textarea-focus-color', '#AAA')
      style.setProperty('--textarea-focus-background', '#181818')
    }
  }
}
</script>

<style lang="css">
  .colorSettings {
    width: 100%;
    text-align: left;
  }

  .colorSettingsText {
    width: 100%;
  }

  .colorSettings h3 {
    margin: 1rem 0 1rem 0;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 4px 0;
  }

  .exampleCard {
    width: 25vw;
    height: 12.5vw;
    margin: 2rem;
    background: var(--textarea-hover);
    border: 2px solid var(--textarea-text);
    border-radius: 10px;
    box-shadow: 15px 10px 5px var(--textarea-text);
    font-size: 3vw;
  }

  .themeOptions {
    width: 70%;
}

  .themeOptions button {
    border-radius: 5px;
    background-color: var(--text-color);
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--textarea-hover);
    transition: all 0.2s;
  }

  .themeOptions button:hover {
    background: var(--textarea-hover);
    color: var(--text-color);
  }
</style>
