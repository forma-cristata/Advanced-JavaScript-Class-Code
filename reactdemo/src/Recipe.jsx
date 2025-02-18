// eslint-disable-next-line react-refresh/only-export-components
export {Menu, data}

const data = [
    {
        name: "Baked Salmon",
        ingredients: [
            { name: "Salmon", amount: 1, measurement: "l lb" },
            { name: "Pine Nuts", amount: 1, measurement: "cup" },
            { name: "Butter Lettuce", amount: 2, measurement: "cups" },
            { name: "Yellow Squash", amount: 1, measurement: "med" },
            { name: "Olive Oil", amount: 0.5, measurement: "cup" },
            { name: "Garlic", amount: 3, measurement: "cloves" }
        ],
        steps: [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the yellow squash and place in the oven for 30 mins.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Remove from oven. Add the lettuce and serve."
        ]
    },
    {
        name: "Fish Tacos",
        ingredients: [
            { name: "Whitefish", amount: 1, measurement: "l lb" },
            { name: "Cheese", amount: 1, measurement: "cup" },
            { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
            { name: "Tomatoes", amount: 2, measurement: "large" },
            { name: "Tortillas", amount: 3, measurement: "med" }
        ],
        steps: [
            "Cook the fish on the grill until cooked through.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
        ]
    }
];

// Fragment: <> Return stuff here </>

// A function component for an individual recipe
function Recipe({name, ingredients, steps})
{
    return (
        //Are any spaces in my string? replace them with hyphens
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <ul className={"ingredients"}>
                {
                    ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient.name}</li>
                    ))
                }

            </ul>
            <section className={"instructions"}>
                <h2>Cooking Instructions</h2>
                {
                    steps.map((step, i) => (
                        <p key={i}>{step}</p>
                    ))
                }
            </section>
        </section>
    );
}
// A function component for the menu of recipes

/*
function Menu(props)
*/
function Menu({title, recipes})
{
    return(
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className={"recipes"}>
                {
                    recipes.map((recipe, i) => (
                        /* <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} /> */
                        <Recipe key={i} {...recipe} />
                    ))
                }
            </div>
        </article>
    );
}