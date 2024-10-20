function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "c73bde3obcbtea944679949f5e0620ff";
  let prompt = ` user instructions:Generate a recipe for ${userInput.value}`;

  let context =
    "You have very many recipes.Your mission is to generate simple short recipe in basic HTML listing the recipe heading then the ingredients then the instructions.Make sure to follow users instructions.Do not add other stuff other than the recipe only and reduce the spaces between the headings and lines to something more appealing.Do not include the `html```and the ``` after signing.Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe about ${userInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-form-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
