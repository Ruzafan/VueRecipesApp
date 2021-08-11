<template>
    <div class="recipe">
        <h3>{{recipe.title}}</h3>
        <img :src="recipe.image" />
    </div>
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
    margin: 10px 10%;
    border-radius: 2%;
    background: lightblue;
    float:left;
}
img { 
    width: 30%; 
    height: 30%;
}
</style>