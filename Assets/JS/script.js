let myURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

let drinkIngredients = [];
let recipeIngredients = [];

$.ajax({
    url: myURL,
    method: "GET"
}).then(function(drinkInfo)
{
    console.log(drinkInfo);
    console.log("Drink Name: " + drinkInfo.drinks[0].strDrink);
    console.log("IMG URL: " + drinkInfo.drinks[0].strDrinkThumb);

    drinkIngredients.push(drinkInfo.drinks[0].strIngredient1);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient2);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient3);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient4);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient5);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient6);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient7);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient8);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient9);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient10);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient11);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient12);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient13);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient14);
    drinkIngredients.push(drinkInfo.drinks[0].strIngredient15);

    console.log(drinkIngredients);

});

$.getJSON({
    url: "https://recipe-puppy.p.rapidapi.com/?i=garlic",
    method: "GET",
    headers: {"x-rapidapi-key": "6942844101msh7d330b33a2c6f0ep1fd09fjsnf49c53c1afac"}
}).then(function(recipes){
    console.log(recipes);
    console.log(recipes.results[0]);
    let foodTitle = recipes.results[0].title;
    foodTitle = foodTitle.trim();
    console.log(foodTitle);
    console.log(recipes.results[0].ingrients);


});
