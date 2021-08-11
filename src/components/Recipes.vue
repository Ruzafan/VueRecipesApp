<template>
    <div class="recipes">
        <div :key="recipe.id" v-for="recipe in recipes">
            <Recipe :recipe="recipe"/>
        </div>
    </div>
</template>

<script>
import Recipe from './Recipe'

export default{
    name: 'Recipes',
    props:{
        recipes: Array
    },
    components: {
        Recipe
    }
}
</script>
