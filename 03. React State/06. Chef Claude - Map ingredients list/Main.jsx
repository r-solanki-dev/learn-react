export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a 
     * console.log(ingredients) after adding the ingredient, because 
     * **warning**: you aren't going to see the page update!
     * 
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add ingredient"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    type="text"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredients.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </main>
    )
}