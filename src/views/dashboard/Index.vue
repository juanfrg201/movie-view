<template>
  <div id="app">
    <NavBar />
    <Homepage />
    <MovieSection />
    <AppFo />
    <!-- Resto de tu contenido -->
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import AppFo from '@/components/AppFo.vue';
  import Homepage from '@/components/dashboard/HomePage.vue'
  import MovieSection from '@/components/dashboard/MovieSection.vue'
  export default {
    name: 'DashboardIndex',
    components: {
      NavBar,
      Homepage,
      MovieSection,
      AppFo
    }
  }
</script>