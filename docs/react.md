**Q: React Component vs. PureComponent?**

PureComponent handles the shouldComponentUpdate lifecycle method. When props or state changes, PureComponent will do a shallow comparison on both, 
contrary to Component which re-renders the component and children components.

Pure Component will execute shallow comparison which means it'll check that primitives have the same value and check references only for objects 
and arrays. If you mutate objects in a parent component, your "pure" child components would not update because the child would be comparing the 
reference to the previous props and not detect a difference.

Comparing primitives and object references is much cheaper than re-rendering the tree.

**Q: Class vs. Functional component in React**

Functional component is lightweight and is a function that takes props as a parameter. It cannot use react lifecycle methods like class components can.

**Q: How do you share state without using Redux? How to read/update state?**

Using state and passing down the state as props to children. With ReactJS >= 16.3, context API is much easier to use for shared state.

**Q: What to avoid in the render?**

Do not update state (setState) in render because this will cause a re-render loop. Use componentWillReceiveProps instead.

**Q: Typescript vs. React proptypes?**

Typescript statically type the entire JS codebase as opposed to React proptypes which only validates the types of props passed down to React components.

**Q: Describe each of React's lifecycle methods**

Refer to http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for a visual representation of the lifecycle methods.

**Note: Methods that are bold are common lifecycle methods.**

Mounting:
  1. *constructor*
  2. static getDerivedStateFromProps
  3. *render*
  4. *componentDidMount*

Updating:
  1. static getDerivedStateFromProps
  2. shouldComponentUpdate
  3. *render*
  4. getSnapshotBeforeUpdate
  5. *componentDidUpdate*

Unmounting:
  1. *componentWillUnmount*

**Q: What are useState and useEffect?**

They are React Hooks which are special functions that "hook into" React features. They are useful for function components to access 
features usually only accessible to React classes.

useEffect - creates a side effect that acts like componentDidMount and componentDidUpdate. You can update state through here. This 
essentially tells React that your component needs to do something after render.
useState - creates a React state similar to this.state with an initial state. It also includes an update function similar to this.setState.

e.g.
const [name, setName] = useState('John Doe')
useEffect(() => {
  setName('Bob Marley')
})
console.log(name)   // 'Bob Marley'
