import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES


export async function getRecipes() {
 let recipeListAsString= await fs.readFile("./recipes.json", 'utf-8');
 let recipeListAsJson=JSON.parse(recipeListAsString)
 return recipeListAsJson
}


export async function getRecipeByID(userInput) {
  try{
    let data = await getRecipes();
    let objectBasedOnId=data.find(({id})=> id===userInput)
    return objectBasedOnId
  }
  catch{
    console.log('ID not working, enter the correct ID')
  }
}




// CREATE A RECIPE
//
export async function createRecipe(newRecipe) {
  let data = await getRecipes();
  data.push(newRecipe);
  let updatedRecipe = await fs.writeFile("./recipes.json", JSON.stringify(data))
  return newRecipe;

}



// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}





