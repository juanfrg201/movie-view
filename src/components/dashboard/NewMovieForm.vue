<template>
  <div class="container mx-auto px-4 mt-16">
    <div class="max-w-md mx-auto bg-red-300 p-8 rounded-lg">
			<h1 class="text-4xl font-bold mb-8">New movie</h1>
			<form @submit.prevent="submitForm" class="max-w-md mx-auto">
				<div class="mb-4">
					<label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
					<input v-model="formData.name" type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Movie name" required>
				</div>
				<div class="mb-4">
					<label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
					<input v-model="formData.description" type="text" id="description" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Movie description" required>
				</div>
				<div class="mb-4">
					<label for="year" class="block text-gray-700 text-sm font-bold mb-2">Year</label>
					<input v-model="formData.year" type="text" id="year" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Movie year" required>
				</div>
				<div class="mb-4">
					<label for="ranking" class="block text-gray-700 text-sm font-bold mb-2">Ranking</label>
					<input v-model="formData.ranking" type="text" id="ranking" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Movie ranking" required>
				</div>
				<div class="mb-4">
					<label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
					<select v-model="formData.category_id" id="category" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required>
						<option value="">Select a category</option>
						<option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
					</select>
				</div>
				<div class="text-center">
					<button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar</button>
				</div>
			</form>
		</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewMovieForm',
  data() {
    return {
      formData: {
        name: '',
        description: '',
        year: '',
        ranking: '',
        category_id: ''
      },
      categories: []
    };
  },
  methods: {
    getCategories() {
      axios.get('http://localhost:3000/api/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    submitForm() {
      axios.post('http://localhost:3000/movies', this.formData)
      .then(response => {
        // La respuesta de la API se encuentra en response.data
        console.log(response.data);
				this.$router.push('/');
      })
      .catch(error => {
        // Manejo de errores
        console.error(error);
      });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>