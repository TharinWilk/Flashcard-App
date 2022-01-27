<template lang="html">
  <div class="cardControls">
    <div class="controlDeck">
      <h4>
        <button @click="deleteDeck">
          Delete Flashcards
        </button>
      </h4>
      <p>Click here to delete the currently stored deck of flashcards</p>
    </div>

    <div class="controlCard" />
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
  .cardControls {
    width: 100%;
  }

  .controlDeck {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    margin: 1rem 0;
  }

  .controlDeck h4 button {
    background: none;
    border: none;
    border-radius: 5px;
    margin: 1rem 0 1rem 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 4px 0;
  }

  .controlDeck h4 button:hover {
    background: var(--text-color);
  }
</style>
