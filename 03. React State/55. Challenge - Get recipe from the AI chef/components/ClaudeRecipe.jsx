export default function ClaudeRecipe(props) {
    const recipeMarkdown = props.content
    return (
        <section>
            <p>{ recipeMarkdown }</p>
        </section>
    )
}