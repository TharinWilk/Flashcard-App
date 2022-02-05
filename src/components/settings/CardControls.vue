<template lang="html">
  <div class="card-controls">
    <div class="control-deck">
      <h3>Delete Flashcards</h3>
      <p class="section-text">Click here to delete the currently stored deck of flashcards.</p>
      <button class="section-button" @click="deleteDeck"> Delete Flashcards</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteDeck() {
      localStorage.removeItem('cards');
      window.location.reload()
    }
  }
}
</script>

<style lang="css">

</style>
