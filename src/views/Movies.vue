<template>
  <div class="movie-details">
    <h1>{{ movie.Title }}</h1>
    <div class="details">
      <img :src="movie.Poster" alt="Movie Poster" />
      <p>{{ movie.Plot }}</p>
    </div>
  </div>
</template>

<script>
  import { ref, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'

export default {
  name: 'MovieDetails',
  setup() {
    const route = useRoute()
    const movieId = ref(route.params.id)
    const movie = ref({})
    const apkiKey = import.meta.env.VITE_API_KEY

    onBeforeMount(async () => {
      console.log(apkiKey)
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apkiKey}&i=${movieId.value}`)
      const data = await response.json()
      movie.value = data

      console.log(data)
    })

    return {
      movieId,
      movie,
      apkiKey
    }
  }
}
</script>

<style lang="scss">
  .movie-details {
    padding: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .details {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
