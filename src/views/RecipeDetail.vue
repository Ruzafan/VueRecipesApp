<template>
    <div class="recipe_detail">
        <h3>{{recipe.title}}</h3>
        <img :src="recipe.image"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
         recipe : Object,
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
        console.log(recipe)
        this.recipe = recipe
    }
}
</script>
<style scoped>
*{
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

@media only screen and (max-width: 860px) {
  img {
        width: 100%;
    }
}
</style>