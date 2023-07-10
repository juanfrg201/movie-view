<template>
  <div class="container mx-auto px-4 mt-16">
    <h1 class="text-4xl font-bold mb-8">Categorias</h1>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b font-bold">ID</th>
          <th class="py-2 px-4 border-b font-bold">Name</th>
          <th class="py-2 px-4 border-b font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td class="py-2 px-4 border-b text-center">{{ item.id }}</td>
          <td class="py-2 px-4 border-b text-center">{{ item.name }}</td>
          <td class="py-2 px-4 border-b text-center">{{ item.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieCategoryTable',
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.obtenerDatos();
  },
  methods: {
    obtenerDatos() {
      axios.get('http://localhost:3000/api/categories')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
/* Agrega cualquier estilo adicional aquí */
</style>