<template>
    <div class="navigator">
        <router-link class="nav-el new-recipe" to="/add_recipe">
            <i class="fas fa-plus-circle"></i>
            <span>Add Recipe</span>
        </router-link>
        <router-link class="nav-el home" to="/">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </router-link>
        <router-link class="nav-el options" to="/options">
            <i class="fas fa-cog"></i>
            <span>Options</span>
        </router-link>
    </div>
</template>

<style scoped>
.navigator {
    position: absolute;
    bottom : 0;
    left: 0;
    width: 100%;
    background-color: #b5dcf9;
}
.navigator .nav-el{
    display: inline-block;
    width: 33%;
    text-align: center;
    padding:  15px 0 15px 0;
}
.navigator .nav-el:hover{
    background-color: #51aef5;
    cursor: pointer;

}
.navigator .nav-el span{
    font-size: 12pt;
    padding-left: 2pt;
}
</style>