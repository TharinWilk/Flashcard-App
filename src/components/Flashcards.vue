<template lang="html">
  <section id="flashcardSection">
    <div class="cardArea absoluteCenter">
      <div v-for="card in deck" :key="card.id">
        <transition name="fade">
          <div class="card" @click="flipCard" :class="{flipped: flipped}" v-show="card.id === cardNumber">
            <div class="cardFront cardFace flexColumn">
              {{ card.front }}
            </div>

            <div class="cardBack cardFace flexColumn">
              {{ card.back }}
            </div>
          </div>
        </transition>
      </div>

      <transition name="fade">
        <div class="flashcardButtons flexRow" v-show="flipped">
          <button @click='nextCard'>Correct!</button>
          <button @click='nextCard'>Try Again</button>
        </div>
      </transition>
    </div>
  </section>
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
    }
  }
}
</script>

<style lang="css">
  #flashcardSection {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .cardArea {
    width: 50vw;
    height: 35vw;
  }

  .card {
    position: absolute;
    width: 50vw;
    height: 25vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s;
    transform-style: preserve-3d;
    border-radius: 10px;
    box-shadow: 15px 10px 5px var(--textarea-text);
    cursor: pointer;
  }

  .cardFace {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    backface-visibility: hidden;
    background: var(--textarea-hover);
    border: 2px solid var(--textarea-text);
    border-radius: 10px;
    font-size: 3vw;
    overflow: auto;
  }

  .cardBack {
    transform: rotateY(180deg);
  }

  .flipped {
    transform: rotateY(180deg) translate(50%, -50%);
  }

  .flashcardButtons {
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .flashcardButtons button {
    border-radius: 5px;
    background-color: var(--text-color);
    font-size: 2vw;
    font-weight: bold;
    color: var(--textarea-hover);
    transition: all 0.2s;
  }

  .flashcardButtons button:hover {
    background: var(--textarea-hover);
    color: var(--text-color);
  }
</style>
