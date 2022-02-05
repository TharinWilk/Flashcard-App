<template lang="html">
  <div class="card-area">
    <div class="card" :class="{flipped:flipped}" @click="flipWelcome">
        <div class="card-face card-front welcome-card flex-column-center-center">
          <h5>Welcome!</h5>
          <p>Click "New Card" to get started.</p>
          <p>After adding your cards click "Study Flashcards" to begin studying.</p>
        </div>

        <div class="card-face card-back welcome-card flex-column-center-center">
          <p>When studying, click on a card to flip it.</p>
          <p>Click "Correct!" or "Try Again" to move to the next card.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      flipTimer: null,
    }
  },
  methods: {
    flipWelcome() {
      this.flipped = !this.flipped
      clearInterval(this.flipTimer)
    }
  },
  mounted() {
    this.flipTimer = setInterval(() => {
      this.flipped = !this.flipped
    }, 10000)
  }
}
</script>

<style lang="css">

</style>
