<template lang="html">
  <section>
    <div
      class="card"
      :class="{flipped: flipped}"
      @click="flipWelcome"
    >
      <div class="cardFace cardFront flexColumn welcomeCard">
        <h5>Welcome!</h5>
        <p>Click "New Card" to get started.</p>
        <p>After adding your cards click "Study Flashcards" to begin studying.</p>
      </div>

      <div class="cardFace cardBack flexColumn welcomeCard">
        <p>When studying, click on a card to flip it.</p>
        <p>Click "Correct!" or "Try Again" to move to the next card.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      flipTimer: null
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
  .welcomeCard h5 {
    font-weight: bold;
    font-size: 3vw;
    border-bottom: 3px solid var(--textarea-background)
  }

  .welcomeCard p {
    font-size: 2.5vw;
  }
</style>
