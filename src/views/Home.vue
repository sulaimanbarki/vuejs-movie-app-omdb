<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movies/ridj22424ddf">
        <img src="https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="Movie Poster"
          class="feature-image" />

        <div class="details">
          <h3 class="title">The Tomorrow War</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima non saepe at dolor quasi illo, quibusdam
            in cum omnis adipisci ipsum ea corrupti exercitationem reprehenderit explicabo. Neque tenetur qui delectus.
          </p>
        </div>
      </router-link>
    </div>


    <form @submit.prevent="searchMovies" class="movie-form">
      <input type="text" v-model="searchQuery" placeholder="Search for movies..." />
      <br>
      <button type="submit">Search</button>
    </form>

    <div class="movies">
      <div class="movie-card" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movies/' + movie.imdbID">
          <img :src="movie.Poster" :alt="movie.title" class="movie-image" />

          <div class="details">
            <h3 class="title">{{ movie.Title }}</h3>
            <p>{{ movie.overview }}</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="pagination" v-if="totalResults > 0">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: 'mario',
      movies: [],
      currentPage: 1,
      totalResults: 0,
      resultsPerPage: 10, // Adjust as needed
      apkiKey: import.meta.env.VITE_API_KEY
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalResults / this.resultsPerPage);
    },
    paginatedMovies() {
      const startIndex = (this.currentPage - 1) * this.resultsPerPage;
      const endIndex = startIndex + this.resultsPerPage;
      return this.movies.slice(startIndex, endIndex);
    }
  },
  methods: {
    async searchMovies() {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${this.apkiKey}&s=${this.searchQuery}&page=${this.currentPage}`);
      const data = await response.json();

      this.totalResults = parseInt(data.totalResults);
      this.movies = data?.Search || [];
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.searchMovies();
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.searchMovies();
      }
    }
  },

  mounted() {
    this.searchMovies();
  }
}
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;

    .feature-image {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .details {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      z-index: 1;

      .title {
        font-size: 1.6rem;
        margin-bottom: 8px;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .movie-form {
    width: 100%;
    padding: 20px;
    margin-top: 16px;
    text-align: center;


    input {
      padding: 8px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 8px;
    }

    button {
      padding: 8px 16px;
      font-size: 1rem;
      background-color: #42b883;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 8px;
      max-width: 100px;
    }

    @media screen and (max-width: 576px) {
      input {
        width: 100%;
      }

    }
  }

  .movies {
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 16px;

    @media screen and (min-width: 768px) {
      /* Adjust for larger screens */
      grid-template-columns: repeat(5, 1fr);
    }

    .movie-card {
      position: relative;

      .movie-image {
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;

        position: relative;
        z-index: 0;
      }

      .details {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 16px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        z-index: 1;

        .title {
          font-size: 1.6rem;
          margin-bottom: 8px;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }


  .pagination {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 20px;

    button {
      padding: 8px 16px;
      font-size: 1rem;
      background-color: #42b883;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 0 5px;
    }

    button[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
