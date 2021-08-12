<template>
    <div class="recipes">
        <div :key="recipe.id" v-for="recipe in recipes">
            <Recipe :recipe="recipe"/>
        </div>
        <div class="clear"></div>
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

<style scoped>
.clear {
    clear: both;
}
</style>