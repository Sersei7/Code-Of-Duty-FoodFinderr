function searchIngredients() {
    const ingredient = document.getElementById("ingredientInput").value;
    const apiKey = "38dcfd6bb4204473ad74f73a15a2e904"; // Replace with your actual API key

    // Make an API call to Spoonacular
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=20&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = ""; // Clear previous results

            data.forEach(recipe => {
                const recipeCard = document.createElement("div");
                recipeCard.classList.add("recipe-card");

                const recipeImage = document.createElement("img");
                recipeImage.src = recipe.image;
                recipeImage.alt = recipe.title;
                recipeImage.classList.add("recipe-image");

                const recipeTitle = document.createElement("p");
                recipeTitle.classList.add("recipe-title");
                recipeTitle.textContent = recipe.title;

                recipeCard.appendChild(recipeImage);
                recipeCard.appendChild(recipeTitle);
                resultDiv.appendChild(recipeCard);
            });
            resultDiv.style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
