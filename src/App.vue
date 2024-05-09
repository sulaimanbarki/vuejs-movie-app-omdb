<script setup>
import HelloWorld from './views/Home.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <router-link to="/">
      <h1><span class="vue">VUE</span><span class="movie">Movies</span></h1>
    </router-link>
  </header>

  <main>
    <router-view />
  </main>

  <!-- <footer>
    <p>Vue Movies &copy; 2021</p>
  </footer> -->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
</style>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Fira Sans', sans-serif;

  &::selection {
    background: transparentize(#42b883, 0.5);
  }
}

body {
  background-color: #35495e;
}

a {
  text-decoration: none;
  color: #42b883;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);


  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: #42b883;
    cursor: pointer;

    .vue {
      color: #41b883;
      font-family: "Poetsen One", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    .movie {
      color: #f9f9f9;
      font-family: "Poetsen One", sans-serif;
      font-weight: 400;
      font-style: normal;
    }
  }
}
</style>
