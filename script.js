//  defines the structure of each smoothie object
class Smoothie {
    constructor(size, base, ingredients, sweetness) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }
  // price calculation for the smoothie
    getPrice() {
        // base price from size
        let sizeCost = sizePrices[this.size] || 0;

        // add up ingredient prices
        let ingredientCost = 0;
        this.ingredients.forEach(item => {
            if (ingredientPrices[item]) {
                ingredientCost += ingredientPrices[item];
            }
        });

        return sizeCost + ingredientCost;
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
document.getElementById("orderBtn").addEventListener("click", () => {

    // Get values
    let size = document.getElementById("size").value;
    let base = document.getElementById("base").value;
    let sweetness = document.getElementById("sweetness").value;

    // selected ingredients
    let ingredients = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
        ingredients.push(cb.value);
    });

    // Create smoothie object
    let smoothie = new Smoothie(size, base, ingredients, sweetness);

   // Display smoothie description + bill
    document.getElementById("result").innerHTML = smoothie.describe();
});

    // Price Calculation
    getPrice() {
      const sizePrices = {
    Small: 2,
    Medium: 4,
    Large: 6
};

const ingredientPrices = {
    Banana: 1,
    Strawberries: 1,
    Blueberries: 1,
    Mango: 1,
    Spinach: 1
};
