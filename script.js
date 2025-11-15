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