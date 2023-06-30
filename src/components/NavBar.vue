<template>
  <nav class="bg-red-500">
    <div class="container mx-auto px-4 flex justify-center items-center h-16">
      <a href="/" class="text-white text-xl font-semibold">Logo</a>
      <div class="flex ml-4">
        <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Home</a>
        <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Nueva Pelicula</a>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {
    name: 'NavBar',
  };
  </script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  .navbar-logo {
    font-weight: bold;
  }

  .navbar-brand {
    color: #fff;
    text-decoration: none;
  }

  .navbar-items {
    margin-left: auto;
  }

  .navbar-menu {
    list-style: none;
    display: flex;
  }

  .navbar-item {
    margin-right: 10px;
  }

  .navbar-link {
    color: #fff;
    text-decoration: none;
  }
</style>