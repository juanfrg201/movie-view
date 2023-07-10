<template>
  <div id="app" class="bg-red-400">
    <NavBar />
    <NewCategory />
    <AppFo />
    <!-- Resto de tu contenido -->
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import AppFo from '@/components/AppFo.vue';
  import NewCategory from '@/components/dashboard/NewCategoryForm.vue'
  export default {
    name: 'DashboardIndex',
    components: {
      NavBar,
      NewCategory,
      AppFo
    }
  }
</script>