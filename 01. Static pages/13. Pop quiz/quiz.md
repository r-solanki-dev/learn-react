1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

    Within the div with id = "root".

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
    It would print an object that describes the properties of the HTML element that is passed.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
    It is not contained within a single node.

4. What does it mean for something to be "declarative" instead of "imperative"?
    Being declarative means that the instructions can say what to do, and the system will decide how to interpret them.
    Being imperative means that the system requires the instructions in order to execute.

5. What does it mean for something to be "composable"?
    Composability means that something can be created from smaller, reusable parts.