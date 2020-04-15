<<<<<<< HEAD
<<<<<<< Updated upstream
=======
// Setting Drink Ingredients Array
let drinkIngredients = [];
=======
// Setting Drink Ingredients Array
let drinkIngredients = [1,2,3,4,5,6,7,8,9,10];
>>>>>>> master

// Setting Drink Directions Array
let drinkDirections = [];

// Setting Recipe Ingredients Array
<<<<<<< HEAD
let recipeIngredients = [];
=======
let recipeIngredients = [1,2,3,4,5,6,7,8,9,10];
>>>>>>> master

// Setting Recipe Directions Array
let recipeDirections = [];

/*
                SEARCH PARAMETERS FOR THECOCKTAILDB API
                
API Methods using the developer test key '1' as the API key

Search cocktail by name
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

List all cocktails by first letter
https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup full cocktail details by id
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

Lookup ingredient by ID
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

Lookup a random cocktail
https://www.thecocktaildb.com/api/json/v1/1/random.php

Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/randomselection.php

List Popular cocktails (only available to $2+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/popular.php

List most latest cocktails (only available to $2+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/latest.php

Search by ingredient
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

Filter by multi-ingredient (only available to $2+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

Filter by alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

Filter by Category
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

Filter by Glass
https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

List the categories, glasses, ingredients or alcoholic filters
https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
*/
// // AJAX Request for Drink Recipe
$.ajax({
<<<<<<< HEAD
=======

>>>>>>> master
    // Query URL
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    // Get Reponse
    method: "GET",

<<<<<<< HEAD
}).then(function(drinkInfo){
 
    console.log(drinkInfo);

    let allDrinks = drinkInfo.drinks;

    for(let i = 0; i < allDrinks.length; i++){
    
        console.log(allDrinks[i])
        //Create the Card Div for the information
            //Give classes: card, bg-success, text-white
            let drinksCard = $("<div>").addClass("card bg-success text-white");
                console.log(drinksCard)
            //append to grocery-list-row/Updated: append to drink recipe row
            $("#drink-recipe-row").append(drinksCard);
            //Give attribute data-drinkID with the idDrink property;
            drinksCard.attr("data-drinkID", allDrinks[i].idDrink);
            //Give attribute data-drinkName with the strDrink property;
            drinksCard.attr("data-drinkName", allDrinks[i].strDrink);
        //Create Header With tag of h3
            let drinksCardHeader = $("<h3>");
            //Give text of drink name
            drinksCardHeader.text(allDrinks[i].strDrink)
            //Append to the DIV created  at the start of the for loop
            drinksCard.append(drinksCardHeader);
        //Create a image tag for the picture drink
            let drinksCardImg = $("<img>");
            //Give a src to the tag with strDrinkThumb
            drinksCardImg.attr("src", allDrinks[i].strDrinkThumb)
            //Append to the DIV created at the start of the for loop
            drinksCard.append(drinksCardImg);
        //Create a p tag to hold all ingredients of the drink
            let drinksCardIngredientsList = $("<p>");
            drinksCardIngredientsList.addClass("text-white");

       
            //Create an array to hold all drinks
            let drinks = [];
            //Go through all of the drink ingredients and add to the array
            //let tempListItem = allDrinks[i].strIngredient[a];
            //tempListItem = tempListItem.trim();
            //drinks.push(tempListItem);

            //grab the each ingredient and add their respecective measurements
               //put both items in the same string
               let string = allDrinks[i].strIngredient1 + allDrinks[i].strMeasure1;
               drinks.push(string)
                string = allDrinks[i].strIngredient2 + allDrinks[i].strMeasure2;
               drinks.push(string)
                string = allDrinks[i].strIngredient3 + allDrinks[i].strMeasure3;
               drinks.push(string)
                string = allDrinks[i].strIngredient4 + allDrinks[i].strMeasure4;
               drinks.push(string)
                string = allDrinks[i].strIngredient5 + allDrinks[i].strMeasure5;
               drinks.push(string)
                string = allDrinks[i].strIngredient6 + allDrinks[i].strMeasure6;
               drinks.push(string)
                string = allDrinks[i].strIngredient7 + allDrinks[i].strMeasure7;
               drinks.push(string)
                string = allDrinks[i].strIngredient8 + allDrinks[i].strMeasure8;
               drinks.push(string)
                string = allDrinks[i].strIngredient9 + allDrinks[i].strMeasure9;
               drinks.push(string)
                string = allDrinks[i].strIngredient10 + allDrinks[i].strMeasure10;
               drinks.push(string)
                string = allDrinks[i].strIngredient11 + allDrinks[i].strMeasure11;
               drinks.push(string)
                string = allDrinks[i].strIngredient12 + allDrinks[i].strMeasure12;
               drinks.push(string)
                string = allDrinks[i].strIngredient13 + allDrinks[i].strMeasure13;
               drinks.push(string)
                string = allDrinks[i].strIngredient14 + allDrinks[i].strMeasure14;
               drinks.push(string)
                string = allDrinks[i].strIngredient15 + allDrinks[i].strMeasure15;
               drinks.push(string)

               drinksCard.append(drinksCardIngredientsList);


    }
               
               //for( let i = 0; i < 15; i++)
               //each ingredient into the array
               //Give tag the text of all the ingredients
               //Append to the DIV create at the start of the for loop
                

}); 




=======
}).then(function(drinkInfo) {

    // Logging Drink Info to the Console
    console.log(drinkInfo);


});
>>>>>>> master

/**
                SEARCH PARAMETERS FOR EDAMAM.COM
Search
Path: https://api.edamam.com/search

For recipes in Spanish you need to access our Beta at Path: https://test-es.edamam.com/search

Search for recipes matching the specified query. Make sure your queries are in the correct language at each specific access point!

The following parameters are part of the GET request URL:

Parameter	Required	Type	Description
q	        yes*	string  	Query text. For example q=chicken. This or the r parameter are required
r	        yes*	string	    Returns information about a specific recipe based on its ID ie. r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408 This or the q parameter are required
app_id	    yes	    string	    Your 3scale application ID
app_key	    yes	    string	    Your 3scale application key (please note app_id/app_key are an ordered pair)
from	    no	    integer	    First result index (default 0). Example: from=20. The maximum value of the “from” parameter is limitted by the number of results a plan is entitled to.
to	        no	    integer	    Last result index (exclusive, default from + 10). Example: to=30
ingr	    no	    integer	    Maximum number of ingredients. Example: ingr=5
diet	    no	    enum	    Diet label: one of “balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”
health	    no	    enum	    Health label: One of the Health api parameters listed in Diet and Health Labels table at the end of this documentation. Miltiple labels cab be submitted simultatniousely this way “health=peanut-free&health=tree-nut-free”
cuisineType	no	    enum	    The type of cuisine of the recipe. You can simultatniousely use saveral cuisines this way “cuisineType=chinese&cuisineType=indian”
mealType	no	    enum	    The type of meal a recipe belongs to – lunch, dinner, breakfast, snack
dishType	no	    enum	    The dish type a recipe belongs to – soup, salad, sandwich etc. You can simultatniousely use saveral dish types this way “dishType=soup&dishType=dessert”
calories	no	    range	    The format is calories=RANGE where RANGE is replaced by the value in kcal. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded. Examples: “calories=100-300” will return all recipes with which have between 100 and 300 kcal per serving.
time	    no	    range	    Time range for the total cooking and prep time for a recipe . The format is time=RANGE where RANGE is replaced by the value in minutes. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded. Examples: “time=1%2B” will return all recipes with available total time greater then 1 minute
excluded	no	    string	    Excluding recipes with certain ingredients. The format is excluded=FOOD where FOOD is replaced by the name of the specific food you don’t want to be present in the recipe results. More than one food can be excluded at the same time. Example: excluded=vinegar&excluded=pretzel will exclude any recipes which contain vinegar or pretzels in their ingredient list
callback	no	    string	    Callback parameter for JSONP. This will “envelop” the result in a JavaScript function call to the specified callback. Optional

*Exactly one of these ( q / r ) must be present

 */

<<<<<<< HEAD
//Request for Food Recipe
$.ajax({
    url: "https://api.edamam.com/search?q=chicken&app_id=cdb4c0d1&app_key=01ef1e9976bc7573ad191fed19d65d6d",
=======
// //Request for Food Recipe
$.ajax({
    url: "https://api.edamam.com/search?q=chicken&app_id=9abd2680&app_key=0c3cd84eab883285f12414db93b17a73",
>>>>>>> master
    method: "GET",
// Once Recipe Object Obtained, THEN perform function on Recipes
}).then(function(recipes){

    // Logging Recipes to Console
    console.log(recipes);

    let recipeList = recipes.hits;
    
    let count = recipes.from;
    let searchedIngredient = recipes.q;
    console.log(count);

    // // Dynamically Create Food Recipe Card

<<<<<<< HEAD
    // // *NEEDS FIXING* For Each Index of Recipes Ingredients
    for (let i = 0; i < recipeList.length; i++) {
        console.log(count)


        let currentRecipe = recipeList[i].recipe;

        // Setting Variable to New Div with Bootstrap Classes
        let recipeCard = $("<div>").addClass("card bg-success text-white");
        recipeCard.attr("data-recipeIndex", count);
        recipeCard.attr("data-recipeSearch", searchedIngredient);
        $("#food-recipe-row").append(recipeCard);

        //DO THIS FIRST      
        let recipeCardHeader = $("<h3>");
        recipeCardHeader.text(currentRecipe.label)
        recipeCard.append(recipeCardHeader);

        //DO THIS SECOND
        //Get the thumbnail of each recipe (thumbnail)
        let recipeCardImg = $("<img>");
        //give thumbnail class
        //give thumbnail src
        recipeCardImg.attr("src", currentRecipe.image)
        //Append
        recipeCard.append(recipeCardImg);
            


        //Get food title of the recipe (title)
        let recipeCardIngredientList = $("<p>");
        //give title class
        recipeCardIngredientList.addClass("text-white");
        let foodTitle = [];
        //give title text
        for(let a = 0; a < currentRecipe.ingredientLines.length; a++)
        {
            let tempListItem = currentRecipe.ingredientLines[a];
            tempListItem = tempListItem.trim();
            foodTitle.push(tempListItem);
        }
        // Set Food Title Text
        recipeCardIngredientList.text(foodTitle);
        //Append to card div
        recipeCard.append(recipeCardIngredientList);

        count++;
    }

});

>>>>>>> Stashed changes
=======
    // For Each Index of Recipes Ingredients
    for (let i = 0; i < recipeList.length; i++) {

        // Logging Count Variable to Console
        console.log(count);

        // Setting Variable to Recipe 
        let currentRecipe = recipeList[i].recipe;

        // Setting Variable to New Div with Bootstrap Classes
        let recipeCard = $("<div>");
        // Adding Classes to Recipe Cards
        recipeCard.addClass("card bg-success text-white");
        // Setting Recipe Card Attribute of Recipe Index in Data with Value of Count
        recipeCard.attr("data-recipeIndex", count);
        // Setting Recipe Card Attribute of Recipe Search in Data with Value of Searched Ingredient
        recipeCard.attr("data-recipeSearch", searchedIngredient);
        // Append Recipe Card to HTML Element with ID of Food Recipe Row
        $("#food-recipe-row").append(recipeCard);

        // Setting Variable for New Header 3
        let recipeCardHeader = $("<h3>");
        // Populating Recipe Card Header Text
        recipeCardHeader.text(currentRecipe.label);
        // Appending Recipe Card Header to Recipe Card
        recipeCard.append(recipeCardHeader);

        // Get the thumbnail of each recipe (thumbnail)
        let recipeCardImg = $("<img>");
        // give thumbnail class
        recipeCardImg.addClass("image");
        // give thumbnail src
        recipeCardImg.attr("src", currentRecipe.image)
        //Append
        recipeCard.append(recipeCardImg);    

        //yield
        let servingSize = $("<p>");
        servingSize.text(currentRecipe.yield);
        recipeCard.append("Serving Size: " + servingSize);

        //totalTime
        let cookTime = $("<p>");
        cookTime.text("Cook Time: " + currentRecipe.totalTime);
        recipeCard.append(cookTime);

        //calories
        let currentcalories = $("<p>");
        let calories = currentRecipe.calories;
        calories = calories.toFixed(2);
        currentcalories.text("Calories: " + calories);
        recipeCard.append(currentcalories);
            
        //url
        let recipeUrl = $("<a>");
        recipeUrl.attr("href", currentRecipe.url);
        // console.log(currentRecipe.url);
        recipeUrl.text("Directions");
        recipeCard.append(recipeUrl);

        // Increment Count
        count++;

    }
});

displayList();

function displayList()
{
    $("#grocery-list-row").html("");
    let foodHeader = $("<h3>");
    foodHeader.text("Food Recipe Ingredients")
    let foodList = $("<ul>");
    let drinkHeader = $("<h3>");
    drinkHeader.text("Drink Recipe Ingredients")
    let drinkList = $("<ul>");

    for(let i = 0; i < drinkIngredients.length; i++)
    {
        let newLI = $("<li>");
        newLI.text(drinkIngredients[i]);
        drinkList.append(newLI);

    }


    for(let i = 0; i < recipeIngredients.length; i++)
    {
        let newLI = $("<li>");
        newLI.text(recipeIngredients[i]);
        foodList.append(newLI);

    }   

    $("#grocery-list-row").append(foodHeader);
    $("#grocery-list-row").append(foodList);
    $("#grocery-list-row").append(drinkHeader);
    $("#grocery-list-row").append(drinkList);

}
>>>>>>> master
