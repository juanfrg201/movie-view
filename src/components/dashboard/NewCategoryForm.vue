<template>
  <div class="container mx-auto px-4 mt-16">
    <div class="max-w-md mx-auto bg-red-300 p-8 rounded-lg">
      <h1 class="text-4xl font-bold mb-8 text-white text-center">New Category</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2 text-white">Name:</label>
          <input v-model="formData.name" type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Category name" required>
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 text-sm font-bold mb-2 text-white">Description</label>
          <input v-model="formData.description" type="text" id="description" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Description Category" required>
        </div>
        <div class="text-center">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Crear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'NewCategoryForm',
  data() {
    return {
      formData: {
        name: '',
        description: ''
      },
    };
  },
  methods: {
   submitForm() {
    axios.post('http://localhost:3000/api/categories', this.formData)
      .then(response => {
        console.log(response.data);
        this.$router.push('/');
      })
      .catch(error => {
        // Manejo de errores
        console.error(error);
      });
  }
  },
};
</script>
