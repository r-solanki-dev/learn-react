1. What is a React component?
    A function that returns React elements.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
    It doesn't use Pascal case.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
    You would use root.render(<Header />) instead.