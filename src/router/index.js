import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import Options from '../views/Options'
import NewRecipe from '../views/NewRecipe'
import RecipeDetail from '../views/RecipeDetail'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/options',
        name: 'Options',
        component: Options
    },
    {
        path: '/add_recipe',
        name: 'NewRecipe',
        component: NewRecipe
    },
    {
        path: '/recipe/:id',
        name: 'RecipeDetail',
        component: RecipeDetail
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
} )

export default router