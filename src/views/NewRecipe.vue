<template>
    <h1>New Recipe</h1>
    <AddRecipe @add-recipe="addRecipe" />
</template>
<script>
import AddRecipe from '../components/AddRecipe'
export default{
   name : 'NewRecipie',
   components: {
       AddRecipe
   },
   methods: {
    async addRecipe(recipe) {
        await fetch('api/recipes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(recipe),
      })
    },
   }
}
</script>
<style scoped>
h1 {
    width: 100%;
    text-align: center;
}
</style>