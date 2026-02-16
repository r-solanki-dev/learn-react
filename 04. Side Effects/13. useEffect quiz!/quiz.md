1. In what way are React components meant to be "pure functions"
For every render of the same input, the component should render the same output.
Rendering and re-rendering a component shouldn't have an effect on an outside system.


2. What is a "side effect" in React? What are some examples?
A side effect is an interaction with an outside system, such as:
   - APIs
   - web sockets
   - DOM manipulation
   - local storage


3. What is NOT a "side effect" in React? Examples?
Interactions between related React components, such as updating state to re-render a child component.


4. When does React run your useEffect function? When does it NOT run
   the effect function?
useEffect is run on every render of the app if the values in the dependencies array changes OR when the dependencies array is not provided.

5. How would you explain what the "dependecies array" is?
A list of values that React is tracking the previous and current values of when deciding whether or not to run the effect.
