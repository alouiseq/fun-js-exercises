# JS Questions 

**Q: Can you name some JavaScript types (primitive)?**

A: Number, String, Boolean, Function, Object, Null, Undefined. 

**Q: What do these JS methods do? getElementById, getElementsByTagName, querySelector, querySelectorAll, appendChild and removeChild.**

A: 
	•	getElementById - Returns the element whose ID is specified.
	•	getElementsByTagName - Returns a list of elements with the given tag name. The subtree underneath the specified element is searched, excluding the element itself.
	•	appendChild - Adds a node to the end of the list of children of a specified parent node. If the node already exists it is removed from current parent node, then added to new parent node.
	•	removeChild - Removes a child node from the DOM. Returns removed node.
	•	querySelectorAll - enter a CSS selector as a parameter and return the selected elements as a list of DOM elements.
	•	querySelector - enter a CSS selector as a parameter and return the frst DOM element that matches.

**Q: Explain event delegation in regards to the DOM. (if they are blocked mention event bubbling)**

A: A process of using event propagation to handle events at a higher level in the DOM. Allows us to put a single event listener to the parent element instead multiple on all the children. When the children is clicked, a click event is fired and bubbles up the DOM tree (event propagation/bubbling). The parent then simply checks the event target property to get the reference to the actual clicked node. 

**Q: Explain how “this” works in JavaScript.**

A: The "this" keyword acts as a reference to the context object, so you can access its properties through the normal dot notation. The value of "this" changes though, depending on what context you're executing in. 

Examples: 
	•	When there's no dot notation, 'this' is bound to the global object window
	•	“this” usually refers to the object to the left of the dot at call time 
	•	When you use call and apply, you get to decide what 'this' is bound to
	•	When you use the keyword 'new' to create an instance, the keyword 'this' is bound to the instance not the function.

**Q: Explain how prototypal inheritance works**

A: Since javascript doesn't have a concept of a class, we implement inheritance by creating objects which can act as a prototype for other objects. You can do so by adding the 'parent' or 'blueprint' object to the prototype property of your child object. Or create an 'object' function that takes in the parent (and overriding supplements) and returns the child with parent in prototype. 

One of the benefit of this is a performance boost since all child instances will point to the prototype properties and methods as references instead of making their own copies. 

**Q: What's a hashtable?**

A: It's a data structure that can map keys to values. It uses a hash function to compute an index (key?) into an array of buckets or slots, from which the correct value can be found. 

In Javascript, all objects are hashes. 

**Q: What's the difference between a variable that is: null, undefined or undeclared? 2nd part - How would you go about checking for any of these states?**

A: Undeclared variables are those that are not declared at all. Undefined variables are declared variables that were not given a value. It is also a type. Null is an object that indicates lack of a value. 

Part 2 - Null and undefined are the same value but different types: 

null == undefined // true 
null === undefined // false 

**Q: What is ‘lexical’ scoping?**

A: This means that the functions run in the scope in which they are defined, not the scope from which they are executed. 

**Q: What is a closure, and how/why would you use one?**

A: A function within a function, a closure is an inner function that has access to the outer function's variables. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables. 

Properties 

	•	Closures have access to the outer function's variable even after the outer function returns. 
	•	Closures store references to the outer function's variables 

Uses: 
	•	Call a function that generates another function or group of functions but hides all the state in private variables within the closure 
	•	Closures for events and callbacks 
	•	Enforce public/private methods 

**Q: Explain AJAX in as much detail as possible**

A: Make http requests (use of the XMLHttpRequest object to communicate with server-side scripts). It can send as well as receive information in a variety of formats, including JSON, XML, HTML, and even text files. AJAX's most appealing characteristic, however, is its "asynchronous" nature, which means it can do all of this without having to refresh the page. This lets you update portions of a page based upon user events. 

**Q: Explain how JSONP works (and how it differs from AJAX)**

A: JSONP is a method commonly used to bypass the cross-domain policies in web browsers (You are not allowed to make AJAX requests to a webpage perceived to be on a different server by the browser). JSON and JSONP behave differently on both the client and the server. JSONP requests are not dispatched using the XMLHTTPRequest (and the associated browser methods), instead a <script> tag is created, whose source is set to the target URL. This script tag is then added to the DOM. 

**Q: Explain "hoisting".**

A: Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted and not the values. http://www.sitepoint.com/back-to-basics-javascript-hoisting/

**Q: Difference between document load event and document ready event?**

A: Document ready: executes when HTML-Document is loaded and DOM is ready. Document load: executes when complete page is fully loaded, including all frames, objects and images. 

**Q: What is the difference between == and ===?**

A: This tests for understanding of type coercion. ===, or 'strict comparison' means is the same type and equal == simply means equal 

	•	JavaScript has both strict and type-converting equality comparison. For strict equality the objects being compared must have the same type and: 
	•	Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
	•	Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
	•	Two Boolean operands are strictly equal if both are true or both are false.
	•	Two objects are strictly equal if they refer to the same Object.
	•	Null and Undefined types are == (but not ===).


**Q: Explain the same-origin policy with regards to JavaScript.**

A: The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. Only scripts that are served from the same domain can access each others objects and properties without restriction (so if you have a .js file with named functions defined, you can call it from any other file hosted on the same domain. Two pages have the same origin if the protocol, port (if one is specified), and host are the same for both pages. 

BONUS: If they know what CORS is. http://www.html5rocks.com/en/tutorials/cors/

**Q: What is strict mode? What are the advantages and disadvantages to using it?**

A: strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/

**Q: Have you ever used JavaScript templating? If so, what libraries have you used? (Mustache.js, Handlebars etc.)**

A: Open ended... 

**Q: How do you go about testing your JavaScript?**

A: Open ended, but hopefully should know some JS testing frameworks like Jest, Jasmine, qUnit, Mocha/Chai, Karma, UI component testing with Enzyme, etc... 

**Q: What is async/await?**

A: The ES6 way of using promises. It adds syntactic sugar but at the core still uses promises. It allows for code readability and efficiency since you 
won't have to deal with .then promise chains.

**Q: What are promises?**

A: A Promise is an object that is a proxy for a value not yet known when it is created. It allows for asynchronous operations.

**Q: What are generators?**

A: Generators are functions (syntax: function*) that can be exited and later re-entered holding the previous state.
  When a generator is invoked, it returns an interator () object. The iterator has a next() method that returns an object 
  with a *value* property containing the yielded value and a *done* property as a boolean which indicates whether the 
  generator has yielded its last value. Calling next() resumes the generator function execution until the next yield where 
  it pauses until the next next() invocation.

**Q: How does the event loop work?**

A: The browser has a runtime (like Chrome's v8) that includes a call stack, Web APIs, task queue, and an event loop. All code execution gets pushed onto and popped from 
the call stack. When a nonblocking (fast) task (e.g. console logging) is executed, it gets pushed onto the stack and popped and executed right away. When a blocking (slow) 
task (e.g. setTimeout, ajax calls, DOM events) is executed, it gets pushed onto the stack, popped and pushed onto the Web API block to kick off a timer (or waits). When the 
timer is done (or event is triggered), then that task gets pushed onto the task queue. The event loop then checks if there are any tasks in the stack. If there are tasks, 
the event loop waits until it's clear before pushing the next queued task onto the stack for execution (https://www.youtube.com/watch?v=8aGhZQkoFbQ).

**Q: What is the difference between event.preventDefault() and event.stopPropagation()?**

A:
event.preventDefault() - tells the browser to disallow any default action if the event does not get explicitly handled
event.stopPropagation() - prevents further propagation of the current event in the capturing and bubbling phases

**Q: What is the difference between flow, redux, saga, or thunk?**

**Q: What is the difference between object-oriented and functional programming?**

A: The OOP approach can share states and can be mutated whereas in FP, objects are immutable and adhere to pure functions.
Pure functions are:
  - return the same values if the input is the same
  - there are no side effects (network or db calls cannot affect the return value)
  - data passed into pure functions cannot be altered

**Q: What is code chunking and bundling?**

**Q: What is lazy loading?**

A: It means that only the files needed in the current view is loaded while others are loaded as needed.

**Q: What are progressive web apps?**

A: Apps that have the look and feel of a native app but are really web apps. The app resides on the desktop/mobile and can be opened and used even offline.

**Q: Tell me about headless web architectures (CMS).**
