//  defines the structure of each smoothie object
class Smoothie {
    constructor(size, base, ingredients, sweetness) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }


// description of the smoothie
    describe() {
        return `
            <h2>Your Smoothie 🍹</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
            <p><strong>Sweetness:</strong> ${this.sweetness}</p>
        `;
    }
}

// Handle form submission and create smoothie object
document.getElementById("smoothieForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get values from form
    let size = document.getElementById("size").value;
    let base = document.getElementById("base").value;
    let sweetness = document.getElementById("sweetness").value;

    // Get selected ingredients
    let ingredients = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
        ingredients.push(cb.value);
    });

    // Create smoothie object
    let smoothie = new Smoothie(size, base, ingredients, sweetness);

    // Display smoothie description on page
    document.getElementById("result").innerHTML = smoothie.describe();
});
