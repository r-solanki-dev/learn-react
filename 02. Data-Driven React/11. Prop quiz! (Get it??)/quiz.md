1. What do props help us accomplish?
    Props allow data to be passed into re-usable components so that they don't have to be hard-coded into the HTML.


2. How do you pass a prop into a component?
    By putting it in an attribute.


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   No because the element has to know how to read the prop and interpret it.


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
    By adding props as a function parameter in Navbar.


5. What data type is `props` when the component receives it?
    An object.