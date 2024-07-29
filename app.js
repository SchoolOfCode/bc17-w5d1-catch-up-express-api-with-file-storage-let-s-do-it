import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3001;

// app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



// create a get handler and serve 'hello world'

app.get("/", (req,res)=>{
  res.status(200).send("Hello World");
});


app.get("/recipes", async (req,res)=>{
  try{
  const data= await getRecipes()
  res.status(200).json(
    {
      success: true, 
      payload: data
    }
  );
  }
  catch{
    res.status(500).json(
      {
        success: false,
        payload: null
      }
    )

  }
});


// ✅✅✅✅✅✅✅✅

app.get("/recipes/:id", async(req,res)=> {
  
  try{
    let userInput=req.params.id;
    let data = await getRecipeByID(userInput);
    res.status(200).json({
        success: true,
        payload: data
    });
  }
  
  catch{
    res.status(500).json(
      {
        success: false,
        payload: null
      }
    )
  }
}
)

// prepare app.post so when user adds a body it will create a new object in our json.file
//get what was put n by user aka req.body
app.post('/recipes', async(req, res) =>{
 
  try{
    let inputRecipe = req.body;
    let recipeFromUser =  await createRecipe(inputRecipe); 
    res.status(200).json({
    success: true,
    payload: recipeFromUser,
    });
  }

  catch{
    res.status(500).json({
    success:false
    })
  }
}
)














// GET A RECIPE BY ID

// get the id
// use req  
// go to t he params property 
// go to the id property