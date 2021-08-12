<template>
    <div class="recipe_detail">
        <h3>{{recipe.title}}</h3>
        <img :src="recipe.image"/>
        <div class="ingredients" v-show="hasIngredients">
            <h4>Ingredients</h4>
            <ul :key="ingredient.name" v-for="ingredient in recipe.ingredients">
                <li>
                    <span class="ingredient-name">{{ingredient.name}}</span><span>{{ingredient.quantity}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
         recipe : Object,
         hasIngredients: Boolean
        }
    },
    methods: {
        async fetchRecipe(id) {
            const res = await fetch(`/api/recipes/${id}`)
            const data = await res.json()
            return data
        }
    },
    async created(){
        const id = this.$route.params.id
        const recipe = await this.fetchRecipe(id)
        this.recipe = recipe
        console.log(recipe.ingredients !== undefined)
        this.hasIngredients = recipe.ingredients !== undefined
    }
}
</script>
<style scoped>
* {
    display: block;
}
.recipe_detail{
    margin: 0 auto;
    width: 80%;
}
img {
    margin: 0 auto;
    max-width: 500px;
}
.ingredients { text-align: left; }
.ingredients ul li { display: list-item; }
.ingredients ul li span { display: inline-block; }

.ingredient-name { margin-right: 10px; }
.ingredient-name::first-letter { text-transform: uppercase; }


@media only screen and (max-width: 860px) {
  img {
        width: 100%;
    }
}
</style>