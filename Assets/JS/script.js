// Query URL
let myURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
// 
// Setting Drink Ingredients Array
let drinkIngredients = [];

// Setting Drink Directions Array
let drinkDirections = [];

// Setting Recipe Ingredients Array
let recipeIngredients = [];

// Setting Recipe Directions Array
let recipeDirections = [];

// // AJAX Request for Drink Recipe
// $.ajax({

//     // Query URL
//     url: myURL,

//     // Get Reponse
//     method: "GET",

//     // Grab Response only if JSON
//     dataType: "json"

// }).then(function(drinkInfo)
// {

//     // Logging drinkInfo in the Console
//     console.log(drinkInfo);

//     // Logging Drink Name in the Console
//     console.log("Drink Name: " + drinkInfo.drinks[0].strDrink);

//     // Logging Drink Thumbnail in the Console
//     console.log("IMG URL: " + drinkInfo.drinks[0].strDrinkThumb);

//     // Pushing Drink Ingredients to Drink Ingredients Array
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient1);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient2);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient3);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient4);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient5);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient6);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient7);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient8);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient9);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient10);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient11);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient12);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient13);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient14);
//     drinkIngredients.push(drinkInfo.drinks[0].strIngredient15);


// });

// Request for Food Recipe
$.getJSON({

    // Query URL
    url: "https://recipe-puppy.p.rapidapi.com/?i=garlic",

    // Get
    method: "GET",

    // 
    headers: {"x-rapidapi-key": "6942844101msh7d330b33a2c6f0ep1fd09fjsnf49c53c1afac"}

// Once Recipe Object Obtained, THEN perform function on Recipes
}).then(function(recipes){

    // Logging Recipes to Console
    console.log(recipes);

    //grab all recipe arrays
    let recipeList = recipes.results;



    // Setting Variable to Title of Recipe
    let foodTitle = recipes.results[0].title;

    // Trimming Spaces from Food Title
    foodTitle = foodTitle.trim();

    // Dynamically Create Food Recipe Card

    // *NEEDS FIXING* For Each Index of Recipes Ingredients
    for (let i = 0; i < recipeList.length; i++) {

        // Setting Variable to New Div with Bootstrap Classes
        let recipeCard = $("<div>").addClass("card bg-success text-white");
        $("#food-recipe-row").append(recipeCard);

        //DO THIS FIRST      

            //Get food title of the recipe (title)
            let recipeCardTitle = $("<h3>");
            //give title class
            recipeCardTitle.addClass("text-white");
            //give title text
            let foodTitle = recipeList[i].title;
            // Trimming Space from Food Title
            foodTitle = foodTitle.trim();
            // Set Food Title Text
            recipeCard.text(foodTitle);
            console.log(foodTitle);
            
            //Append to card div
            recipeCard.append(recipeCardTitle);

        //DO THIS SECOND
            //Get the thumbnail of each recipe (thumbnail)
            let recipeCardImg = $("<img>");
                //give thumbnail class
                //give thumbnail src
            recipeCardImg.attr("src", recipeList[i].thumbnail)
                //Append
            recipeCard.append(recipeCardImg);
            
                console.log(recipeList[i].thumbnail);

        //DO THIS THIRD
            //get the ingredients of each recipe (ingredients)

                //give recipe class
                //give recipe text
                //Apend
                console.log(recipeList[i].ingredients);
        
        /*AFTER
            MMakeeeeeeee classes for card items
        
        
        */

        // // Setting Variable to New Header with Recipe Title Text
        // let recipeCardTitle = $("<h3>").text(foodTitle);

        // // Setting Variable to New Unordered  List
        // let recipeCardIngredientList = $("<ul>");

        // // Setting Variable to New List Item for Each Recipe Ingredient 
        // let recipeCardIngredients = $("<li>").text(recipeList[i]);

        // // Appending Recipe Ingredients to Recipe Ingredient List
        // recipeCardIngredientsList.append(recipeCardIngredients);

        // // Setting Variable to New Recipe Directions Ordered List
        // let recipeCardDirectionsList = $("<ol>");

        // // Setting Variable to New List Item for Each Recipe Direction
        // let recipeCardDirections = $("<li>").text(recipeList[i]);
        
        // // Appending Recipe Directions to Recipe Directions List
        // recipeCardDirectionsList.append(recipeCardDirections);

        // // Setting Variable to 

        // // Appending All Recipe Elements to Recipe Card
        // recipeCard.append(recipeCardTitle, recipeCardIngredientList, recipeCardDirectionsList);



    //     <div class="card">
    //     <img class="card-img-top" src="#" alt="Card image cap">
    //     <div class="card-body">
    //       <h4 class="c ard-title">Card title</h4>
    //       <p class="card-text">
    //         Some quick example text to build on the card title
    //         and make up the bulk of the card's content.
    //       </p>
    //       <a href="#!" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>


    }
});



// <!-- Recipe Card -->
// <div class="card">
//     <img class="card-img-top" src="#" alt="Card image cap">
//     <div class="card-body">
//       <h4 class="card-title">Card title</h4>
//       <p class="card-text">
//         Some quick example text to build on the card title
//         and make up the bulk of the card's content.
//       </p>
//       <a href="#!" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>






