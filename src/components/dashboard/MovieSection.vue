<template>
	<div class="container mx-auto px-4 mt-16">
		<h1 class="text-4xl font-bold mb-8">Películas</h1>
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
			<div v-for="movie in movies" :key="movie.id" class="bg-white rounded-lg shadow-lg">
				<div class="p-4">
					<h2 class="text-lg font-semibold mb-2">{{ movie.title }}</h2>
					<p class="text-gray-600">{{ movie.genre }}</p>
					<p class="text-gray-600">{{ movie.releaseYear }}</p>
				</div>
			</div>
		</div>
	</div>
      
</template>

<script>
export default {
	name: 'MovieSection',
	data() {
		return {
			movies: [
				{
					id: 1,
					title: "Movie 1",
					genre: "Action",
					releaseYear: 2021,
					poster: "https://example.com/movie1-poster.jpg",
				},
				{
					id: 2,
					title: "Movie 2",
					genre: "Drama",
					releaseYear: 2022,
					poster: "https://example.com/movie2-poster.jpg",
				},
				{
					id: 3,
					title: "Movie 2",
					genre: "Drama",
					releaseYear: 2022,
					poster: "https://example.com/movie2-poster.jpg",
				},
				{
					id: 4,
					title: "Movie 2",
					genre: "Drama",
					releaseYear: 2022,
					poster: "https://example.com/movie2-poster.jpg",
				},
				{
					id: 5,
					title: "Movie 2",
					genre: "Drama",
					releaseYear: 2022,
					poster: "https://example.com/movie2-poster.jpg",
				},
				{
					id: 5,
					title: "Movie 2",
					genre: "Drama",
					releaseYear: 2022,
					poster: "https://example.com/movie2-poster.jpg",
				}
				// Agrega más películas aquí
			],
		};
	},
};
</script>

<style>
/* Agrega cualquier estilo adicional que desees */
</style>