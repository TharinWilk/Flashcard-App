<template lang="html">
  <section id="createSection">
    <h1>Create New Flashcard</h1>
    <div class="createFront inputs">
      <label for="">Create Flashcard Front</label>
      <textarea
        v-model="cardFront"
        type="text"
      />
    </div>

    <div class="createBack inputs">
      <label for="">Create Flashcard Back</label>
      <textarea
        v-model="cardBack"
        type="text"
      />
    </div>

    <div class="buttons flexRow">
      <button
        type="button"
        @click="addCard"
      >
        Add Card
      </button>
      <button
        type="button"
        @click="closeCreateModal"
      >
        Close
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cardFront: "",
      cardBack: "",
      cardId: 1,
      cards: []
    }
  },
  watch: {
    cards: {
      handler(newCards) {
        localStorage.cards = JSON.stringify(newCards);
      },
      deep: true
    }
  },
  mounted() {
    if(localStorage.cards) {
      this.cards = JSON.parse(localStorage.cards);
      this.cardId = this.cards.length + 1;
      this.$emit('cardAdded', this.cards)
    }
  },
  methods: {
    closeCreateModal() {
      this.$emit('closeCreate')
    },
    addCard() {
      let card = {}
      card.front = this.cardFront
      card.back = this.cardBack
      card.id = this.cardId
      this.cards.push(card)
      this.cardFront = ""
      this.cardBack = ""
      this.cardId++
      this.$emit('cardAdded', this.cards)
    },
  }
}
</script>

<style lang="css">
  #createSection {
    -moz-appearance: none;
    padding: 2rem;
    background: var(--textarea-hover);
    width: 50vw;
    max-height: 80vh;
    min-height: 600px;
    border-radius: 5px;
  }

  #createSection h1 {
    border-bottom: 2px solid var(--textarea-background);
  }

  #createSection .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .inputs label{
    display: block;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .buttons button {
    border-radius: 5px;
    background-color: var(--text-color);
    font-size: 1.4rem;
    color: var(--textarea-hover);
    transition: all 0.2s;
  }

  .buttons button:hover {
    background: var(--textarea-hover);
    color: var(--text-color);
  }
</style>
