
// Setting Drink Ingredients Array
let drinkIngredients = [];

// Setting Recipe Ingredients Array
let recipeIngredients = [];

let savedDrink = "";
let savedFood = "";
// Initializing drinkSearch
let drinkSearch;

// Initializing foodSearch
let foodSearch;

function init()
{
    drinkIngredients = JSON.parse(localStorage.getItem("drinkList"));
    recipeIngredients = JSON.parse(localStorage.getItem("foodList"));
    if(drinkIngredients === null)
        drinkIngredients = []
    if(recipeIngredients === null)
        drinkIngredients = []

    savedDrink = JSON.parse(localStorage.getItem("drinkName"));
    savedFood = JSON.parse(localStorage.getItem("foodName"));
    $("#drink-name").text(savedDrink);
    $("#food-name").text(savedFood);


    updateList();
}

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
function renderDrinksRecipes()
{
    drinkSearch = $("#drink-ingredients-input").val();

    let queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch;

    $.ajax({
        // Query URL
        url: queryUrl,
        // Get Reponse
        method: "GET",

    }).then(function(drinkInfo){
        console.log(drinkInfo);
    
        $("#card-area").html("");

        let allDrinks = drinkInfo.drinks;
        console.log(allDrinks);

        for(let i = 0; i < allDrinks.length; i++){

            if(i >= 10)
                break;
        
            //Create the Card Div for the information
                //Give classes: card, bg-success, text-white
                let drinksCard = $("<div>").addClass("card bg-success text-white styled-card");
                //append to grocery-list-row/Updated: append to drink recipe row
                $("#card-area").append(drinksCard);
                //Add datatype of drink
                drinksCard.attr("data-type", "drink");
                //Give attribute data-drinkID with the idDrink property;
                drinksCard.attr("data-drinkID", allDrinks[i].idDrink);
                //Give attribute data-drinkName with the strDrink property;
                drinksCard.attr("data-drinkName", allDrinks[i].strDrink);
            //Create Header With tag of h3
                let drinksCardHeader = $("<h3>");
                //Give text of drink name
                drinksCardHeader.text(allDrinks[i].strDrink);
                // Setting Class to Drinks Card Header
                drinksCardHeader.addClass("styled-font-2");
                //Append to the DIV created  at the start of the for loop
                drinksCard.append(drinksCardHeader);
            //Create a image tag for the picture drink
                let drinksCardImg = $("<img>");
                //Give a src to the tag with strDrinkThumb
                drinksCardImg.attr("src", allDrinks[i].strDrinkThumb);
                // Setting Class to drinkdCardImg
                drinksCardImg.addClass("styled-image");
                //Append to the DIV created at the start of the for loop
                drinksCard.append(drinksCardImg);
            //Create a p tag to hold all ingredients of the drink
                let drinksCardIngredientsList = $("<p>");
                drinksCardIngredientsList.addClass("text-white");

                let instructions = $("<p>");
                instructions.text(allDrinks[i].strInstructions);
                drinksCard.append(instructions);
        }

    }).fail(function() {

        console.log("string");

        $("#errorMessage").text("Please Input A Valid Ingredient For The Drink Input");
        $('.invalid-ipnut.modal').modal('show');

    });

}


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
function renderFoodRecipes()
{
    $("#card-area").html("");
    foodSearch = $("#food-ingredients-input").val();
    let queryUrl = "https://api.edamam.com/search?q="+ foodSearch + "&app_id=9abd2680&app_key=0c3cd84eab883285f12414db93b17a73";
    
    $.ajax({
        url: queryUrl,
        method: "GET",
    // Once Recipe Object Obtained, THEN perform function on Recipes
    }).then(function(recipes){

        let recipeList = recipes.hits;
        
        if(recipeList.length === 0)
        {
            console.log("string");
            $("#errorMessage").text("Please Input A Valid Ingredient For The Food Input");

            $('.invalid-ipnut.modal').modal('show');

            return;

        }

        let count = recipes.from;
        let searchedIngredient = recipes.q;

        // // Dynamically Create Food Recipe Card

        // For Each Index of Recipes Ingredients
        for (let i = 0; i < recipeList.length; i++) {

            // Setting Variable to Recipe 
            let currentRecipe = recipeList[i].recipe;

            // Setting Variable to New Div with Bootstrap Classes
            let recipeCard = $("<div>");
            // Adding Classes to Recipe Cards
            recipeCard.addClass("card bg-success text-white recipe styled-card");
            //Add datatype for card type
            recipeCard.attr("data-type", "food");
            // Setting Recipe Card Attribute of Recipe Index in Data with Value of Count
            recipeCard.attr("data-recipeIndex", count);
            // Setting Recipe Card Attribute of Recipe Search in Data with Value of Searched Ingredient
            recipeCard.attr("data-recipeSearch", searchedIngredient);
            // Append Recipe Card to HTML Element with ID of Food Recipe Row
            $("#card-area").append(recipeCard);

            // Setting Variable for New Header 3
            let recipeCardHeader = $("<h3>");
            // Populating Recipe Card Header Text
            recipeCardHeader.text(currentRecipe.label);
            // Setting Class for Recipe Card Header
            recipeCardHeader.addClass("styled-font-2");
            // Appending Recipe Card Header to Recipe Card
            recipeCard.append(recipeCardHeader);

            // Get the thumbnail of each recipe (thumbnail)
            let recipeCardImg = $("<img>");
            // give thumbnail class
            recipeCardImg.addClass("styled-image");
            // give thumbnail src
            recipeCardImg.attr("src", currentRecipe.image)
            //Append
            recipeCard.append(recipeCardImg);    

            //yield
            let servingSize = $("<p>");
            servingSize.text("Serving Size: " + currentRecipe.yield);
            recipeCard.append(servingSize);

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
}


// Declaring Display List Function
function updateList() {

    // Clearing Row Content Before Populating Again
    $("#food-list").html("");
    $("#drink-list").html("");

    
    $("#drink-name").html("");
    $("#food-name").html("");

    
    $("#drink-name").text(savedDrink);
    $("#food-name").text(savedFood);
    

    for(let i = 0; i < drinkIngredients.length; i++)
    {
        let newLI = $("<li>");
        newLI.text(drinkIngredients[i]);
        $("#drink-list").append(newLI);

    }


    for(let i = 0; i < recipeIngredients.length; i++)
    {
        let newLI = $("<li>");
        newLI.text(recipeIngredients[i]);
        $("#food-list").append(newLI);

    }   

}

function grabDrinkInfo(card)
{
    let drinkID = card.data("drinkid");
    // Lookup ingredient by ID
    let queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;


    $.ajax({
        // Query URL
        url: queryUrl,
        // Get Reponse
        method: "GET",

    }).then(function(drinkInfo){
        savedDrink = drinkInfo.drinks[0].strDrink;
        drinkIngredients = [];

        let string =  drinkInfo.drinks[0].strMeasure1 + drinkInfo.drinks[0].strIngredient1;
        drinkIngredients.push(string);
        string =  drinkInfo.drinks[0].strMeasure2 + drinkInfo.drinks[0].strIngredient2;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure3 + drinkInfo.drinks[0].strIngredient3;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure4 + drinkInfo.drinks[0].strIngredient4;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure5 + drinkInfo.drinks[0].strIngredient5;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure6 + drinkInfo.drinks[0].strIngredient6;
        drinkIngredients.push(string);
        string =  drinkInfo.drinks[0].strMeasure7 + drinkInfo.drinks[0].strIngredient7;
        drinkIngredients.push(string);
        string =  drinkInfo.drinks[0].strMeasure8 + drinkInfo.drinks[0].strIngredient8;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure9 + drinkInfo.drinks[0].strIngredient9;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure10 + drinkInfo.drinks[0].strIngredient10;
        drinkIngredients.push(string);
        string =  drinkInfo.drinks[0].strMeasure11 + drinkInfo.drinks[0].strIngredient11;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure12 + drinkInfo.drinks[0].strIngredient12;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure13 + drinkInfo.drinks[0].strIngredient13;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure14 + drinkInfo.drinks[0].strIngredient14;
        drinkIngredients.push(string);
        string = drinkInfo.drinks[0].strMeasure15 + drinkInfo.drinks[0].strIngredient15;
        drinkIngredients.push(string);

        // For Each Index of Drink Ingredients
        for (let i = drinkIngredients.length -1; i >= 0; i--)
        {
            if(drinkIngredients[i] === 0)
                drinkIngredients.pop();
            else
                break;
        }


        localStorage.setItem("drinkList", JSON.stringify(drinkIngredients));
        localStorage.setItem("drinkName", JSON.stringify(savedDrink));

        updateList();

    });
}

function grabFoodInfo(card){
    console.log(card);
     
    foodSearch = card.data("recipesearch");
    
    let searchIndex = card.data("recipeindex");
    // Setting QueryURL
    let queryUrl = "https://api.edamam.com/search?q="+ foodSearch + "&from=" + searchIndex  + "&app_id=9abd2680&app_key=0c3cd84eab883285f12414db93b17a73";

    $.ajax({
        url: queryUrl,
        method: "GET",
    // Once Recipe Object Obtained, THEN perform function on Recipes
    }).then(function(recipe){
        savedFood = recipe.hits[0].recipe.label;
        recipeIngredients = [];

        recipeIngredients = recipe.hits[0].recipe.ingredientLines;
        
        localStorage.setItem("foodList", JSON.stringify(recipeIngredients));

        updateList();

    });

}

$("#card-area").on("click", "div", function(){ 
    let currentCard = $(this);
    if(currentCard.data("type") === "drink")
        grabDrinkInfo(currentCard);
    else if(currentCard.data("type") === "food")
        grabFoodInfo(currentCard);
});

// Adding Event Listener for Food Search Button
$("#food-search-btn").click(renderFoodRecipes);
// Adding Event Listener for Drink Search Button
$("#drink-search-btn").click(renderDrinksRecipes);

$("#show-list").click(function(){
    $('.list.modal').modal('show');
});

