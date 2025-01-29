import React from "react";
import {createRoot} from "react-dom/client"; // NO EXTENSION

const dish = React.createElement("h1", { id: "recipe-0" }, "Baked Salmon");

const ingredients = [
    "2 lb salmon",
    "5 sprigs fresh rosemary",
    "2 tablespoons olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic",
];

const recipe = React.createElement(
    "section",
    { id: "baked-salmon" },
    React.createElement("h1", null, "Baked Salmon"),
    React.createElement(
        IngredientsList, {items: ingredients}, null
    ),
    React.createElement(
        "section",
        { className: "instructions" },
        React.createElement("h2", null, "Cooking Instructions"),
        React.createElement("p", null, "Preheat the oven to 375 degrees."),
        React.createElement("p", null, "Lightly coat aluminum foil with oil."),
        React.createElement("p", null, "Place salmon on foil."),
        React.createElement(
            "p",
            null,
            "Cover with rosemary, sliced lemons, chopped garlic."
        ),
        React.createElement(
            "p",
            null,
            "Bake for 15-20 minutes until cooked through."
        ),
        React.createElement("p", null, "Remove from oven.")
    )
);


const secretIngredients = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
    "1 cup brown sugar"
];

function IngredientsList(props)
{
    return React.createElement(
        "ul",
        { className: "ingredients" },
        props.items.map(
            (ingredient) => React.createElement("li", null, ingredient)
        )
    );
}


const dessert = React.createElement(
    IngredientsList, {items: secretIngredients}, null
);

const root = createRoot(document.getElementById("root"));
root.render([dish, recipe, dessert]);