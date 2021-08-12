<template>
    <router-link :to="'/recipe/'+recipe.id">
        <div class="recipe">
            <h3>{{recipe.title}}</h3>
            <img :src="recipe.image" />
        </div>
    </router-link>
</template>

<script>

export default{
    name: 'Receta',
    props: {
        recipe: Object
    }
}
</script>
<style scoped>
.recipe {
    padding: 10px;
    margin: 10px;
    border-radius: 2%;
    background: lightblue;
    float:left;
    width:45%
}
@media only screen and (max-width: 860px) {
  .recipe {
    width:96%;
    margin: 10px 0;
  }
}
img { 
    width: 30%; 
    height: 30%;
}
</style>