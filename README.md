# React Basics

This README covers fundamental concepts in React, including JSX, state and props, hooks, state sharing, and event handling. It is designed as a quick reference for beginners and intermediate learners.

---

## 1. What is JSX, and why is it used?

**JSX** stands for **JavaScript XML**.  
It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. JSX makes it easier to describe what the UI should look like, and React efficiently updates the DOM based on these descriptions.

**Example:**
```jsx
const element = <h1>Hello, React!</h1>;
```

**Why use JSX?**
- Makes the code more readable and declarative.
- Allows combining HTML and JavaScript logic in one place.
- Helps React optimize rendering via its virtual DOM.

---

## 2. What is the difference between State and Props?

| Feature | State | Props |
|---------|-------|-------|
| Definition | State is a local data storage of a component that can change over time. | Props are inputs passed from a parent component to a child component. |
| Mutability | Mutable (can be changed using `setState` or `useState`) | Immutable (cannot be changed by the child component) |
| Scope | Managed inside the component | Passed from parent to child |
| Use Case | Used to handle dynamic data, e.g., form input values | Used to pass data and event handlers from parent to child |

---

## 3. What is the useState hook, and how does it work?

The **`useState` hook** is a function that allows functional components to have state. It returns an array with two elements:

1. The current state value.
2. A function to update that state.

**Example:**
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**How it works:**
- `useState(0)` initializes the state with `0`.
- `setCount` updates the state and triggers a re-render of the component.

---

## 4. How can you share state between components in React?

State can be shared between components using **lifting state up**. This means:
- Move the state to the **closest common parent** of the components that need it.
- Pass the state and a function to update it via **props** to child components.

**Example:**
```jsx
function Parent() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Child1 value={value} setValue={setValue} />
      <Child2 value={value} />
    </div>
  );
}
```

**Explanation:**
- `Child1` can update the state via `setValue`.
- `Child2` can access the same state via `value`.

---

## 5. How is event handling done in React?

Event handling in React is similar to HTML but with some differences:
- Use **camelCase** syntax for events (e.g., `onClick`, `onChange`).
- Pass a **function reference** instead of a string.

**Example:**
```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**Key points:**
- You can pass arguments using arrow functions:
```jsx
<button onClick={() => handleClick(5)}>Click Me</button>
```
- React automatically handles event binding, so no need for `bind`.

---

## References

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)  
- [JavaScript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  

---

**Author:** Muaz Ibn Kamal  
**Project:** Customer Support Zone
