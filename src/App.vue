<template>
  <div class="screen">
    <nav>
      <ul id="navList">
        <li>
          <button @click="openCreateModal" class="navButton">New Card</button>
        </li>
        <li>
          <button @click="showCards" class="navButton">Study Flashcards</button>
        </li>
        <li>
          <button @click="openSettings" class="navButton">Settings</button>
        </li>
      </ul>
    </nav>

    <main>
      <transition name="fade">
        <Welcome v-show="atHomeScreen" />
      </transition>

      <transition name="fade">
        <CreateCard v-show="createIsOpen" @closeCreate="closeCreateModal" @cardAdded="addNewCard" />
      </transition>

      <transition name="fade">
        <Flashcards v-show="studying" :deck="deck"/>
      </transition>

      <transition name="fade">
        <Settings v-show="settingsOpen"/>
      </transition>
    </main>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import CreateCard from './components/CreateCard.vue'
import Flashcards from './components/Flashcards.vue'
import Settings from './components/Settings.vue'

export default {
  name: 'App',
  components: { Welcome, CreateCard, Flashcards, Settings},
  data() {
    return {
      atHomeScreen: true,
      createIsOpen: false,
      deck: null,
      studying: false,
      settingsOpen: false,
    }
  },
  methods: {
    openCreateModal() {
      this.createIsOpen = true;
      this.studying = false
      this.atHomeScreen = false
      this.settingsOpen = false
    },
    closeCreateModal() {
      this.createIsOpen = false;
      this.atHomeScreen = true
    },
    addNewCard(cards) {
      this.deck = cards
    },
    showCards() {
      this.createIsOpen = false;
      this.studying = !this.studying
      this.atHomeScreen = !this.studying
      this.settingsOpen = false
    },
    openSettings() {
      this.settingsOpen = !this.settingsOpen
      this.createIsOpen = false
      this.studying = false
      this.atHomeScreen = !this.settingsOpen
    }
  }
}
</script>

<style>
@import './assets/AppStylesheet.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  height: 100%;
  width: 25%;
  position: absolute;
  right: 0;
  border-left: 2px double var(--textarea-hover)
}

#navList {
  height: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.navButton {
  background: none;
  border: none;
  border-radius: 5px;
  margin: 1rem 0 1rem 0;
  font-size: 2rem;
}

main {
  height: 100%;
  width: 75%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
