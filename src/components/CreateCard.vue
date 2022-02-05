<template lang="html">
  <section id="create-section">
    <h1>Create New Flashcard</h1>

    <div class="create-front inputs">
      <h3>Create Flashcard Front</h3>
      <textarea v-model="cardFront"  type="text" maxlength="150"/>
    </div>

    <div class="create-back inputs">
      <h3>Create Flashcard Back</h3>
      <textarea v-model="cardBack"  type="text" maxlength="150"/>
    </div>

    <div class="buttons">
      <button type="button" class="section-button" @click="addCard">Add Card</button>
      <button type="button" class="section-button" @click="closeCreateModal">Close</button>
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

</style>
