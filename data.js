const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
//const url = "mongodb+srv://lakshayjoshiec20b1274:Lakshay123@cluster0.h108bsp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://lakshayjoshiec20b1274:Lakshay123@cluster0.h108bsp.mongodb.net/CookR");


//mongoose.set('strictQuery', true);

const data=require('./new_data.json');


let allIngredients = [];

const ingredientsSchema = {
    names : String
}

const Ingredients = new mongoose.model("Ingredient", ingredientsSchema); 

data.forEach(recipe => {
    allIngredients = allIngredients.concat(recipe.NER);
    
});
const uniqueIngredients = [... new Set(allIngredients)];
console.log(uniqueIngredients);

uniqueIngredients.forEach(value=>{
    const newIngredient = new Ingredients({
        names : value
    });
    newIngredient.save();
})



// const recipeSchema = {
//     name: String,
//     ingredients: Array,
//     directions: Array,
//     url: String,
//     uniqueIngredients: Array,
//     id: String,
//     likes: Number,
//     comments: Number,
//     type: String,
//     difficulty: String,
//     time: String,
// }


// const Recipe = new mongoose.model("Recipe", recipeSchema);


// data.forEach(recipe => {
//     const newRecipe = new Recipe({
//         name: recipe.title,
//         ingredients: recipe.ingredients,
//         directions: recipe.directions,
//         url: recipe.link,
//         uniqueIngredients: recipe.NER,
//         id: recipe.id,
//         likes: recipe.likes,
//         comments: recipe.comments,
//         type: recipe.type,
//         difficulty: recipe.difficulty,
//         time: recipe.time
//     })
//     newRecipe.save();
// });







