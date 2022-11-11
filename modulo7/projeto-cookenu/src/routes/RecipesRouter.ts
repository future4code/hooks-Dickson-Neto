import { Router } from "express";
import { RecipesCT } from '../controller/RecipesController'


const recipesRouter = Router()
const recipesCT = new RecipesCT()

recipesRouter.post("/create" , recipesCT.createRecipes)
recipesRouter.get("/:id" , recipesCT.informationRecipes)


export default recipesRouter