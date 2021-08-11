<template>
    <div>
        <h1>Home</h1>
        <Recipes :recipes="recipes" />
    </div>
</template>

<script>
import Recipes from '../components/Recipes'

export default {
    name: 'Home',
    components: {
        Recipes
    },
    data() {
        return {
            recipes: [],
        }
    },
    methods: {
        async fetchRecipes() {
            const res = await fetch('api/recipes')
            const data = await res.json()
            return data
        }
    },
    async created() {
        this.recipes = await this.fetchRecipes()
    },
}
</script>

<style scoped>
h1 {
    width: 100%;
    text-align: center;
}
</style>