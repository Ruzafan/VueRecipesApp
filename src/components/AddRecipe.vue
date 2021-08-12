<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Title</label>
      <input type="text" v-model="title" name="title" placeholder="Add Title" />
    </div>
    <div class="form-control">
      <label>Image</label>
      <input
        type="text"
        v-model="image"
        name="image"
        placeholder="Image url"
      />
    </div>
    <div class="form-control">
      <label>Ingedient:</label>
      <input 
        type="text"
        v-model="name"
        name="ingredient"
        placeholder="Ingredient name" 
        />
        <label>Quantity:</label>
        <input 
        type="text"
        v-model="quantity"
        name="quantity"
        placeholder="Quantity" 
        />
        <button @click="AddIngredient">Add Ingredient</button>
    </div>
    <input type="submit" value="Save Recipe" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddRecipe',
  data() {
    return {
      title: '',
      image: '',
      ingredients: [],
      name: '',
      quantity: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.title) {
        alert('Please add a title')
        return
      }
      const newRecipe = {
        title: this.title,
        image: this.image,
        ingredients: this.ingredients
      }
      this.$emit('add-recipe', newRecipe)
      this.title = ''
      this.image = ''
      this.name = ''
      this.quantity = ''
      this.ingredients = []
    },
    AddIngredient(e){
      e.preventDefault()
      this.ingredients.push({
        name: this.name,
        quantity: this.quantity
      })
      this.name = ''
      this.quantity = ''
    }
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>