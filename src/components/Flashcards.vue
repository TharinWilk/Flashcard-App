<template lang="html">
  <div class="flashcardSection">
    <div class="card-area">
      <div v-for="card in deck" :key="card.id">
        <transition name="fade">
          <div class="card" @click="flipCard" :class="{flipped: flipped}" v-show="card.id === cardNumber">
            <div class="card-front card-face flex-column-center-center">{{ card.front }}</div>

            <div class="card-back card-face flex-column-center-center">{{ card.back }}</div>
          </div>
        </transition>
      </div>
    </div>

    <transition name="fade">
      <div class="flashcard-buttons" v-show="flipped">
        <button class="section-button" @click='nextCard'>Correct!</button>
        <button @click='nextCard' class="section-button">Try Again</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: [ 'deck' ],
  data() {
    return {
      flipped: false,
      cardNumber: 1,
    }
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;
    },
    nextCard() {
      this.flipped = false
      if(this.cardNumber < this.deck.length) {
        this.cardNumber++
      } else {
        this.cardNumber = 1
      }
    },
  }
}
</script>

<style lang="css">

</style>
