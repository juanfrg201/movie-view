<template>
  <div id="app">
    <NavBar />
    <NewMovieForm />
    <AppFo />
    <!-- Resto de tu contenido -->
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import AppFo from '@/components/AppFo.vue';
  import NewMovieForm from '@/components/dashboard/NewMovieForm.vue'
  export default {
    name: 'DashboardIndex',
    components: {
      NavBar,
      NewMovieForm,
      AppFo
    }
  }
</script>