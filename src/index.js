function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe goes here:<br/> Recipe for mashed potatoes",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let recipeFormElement = document.querySelector("#recipe-form-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
