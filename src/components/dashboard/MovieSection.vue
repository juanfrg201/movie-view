<template>
  <div class="container mx-auto px-4 mt-16">
    <h1 class="text-4xl font-bold mb-8">Películas</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div v-for="movie in movies" :key="movie.id" class="bg-white rounded-lg shadow-lg">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-2">{{ movie.name }}</h2>
          <p class="text-gray-600">{{ movie.description  }}</p>
          <p class="text-gray-600">{{ movie.ranking }}</p>
        </div>
      </div>
    </div>
  </div>      
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieSection',
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.obtenerPeliculas();
  },
  methods: {
    obtenerPeliculas() {
      axios.get('http://localhost:3000/movies')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>