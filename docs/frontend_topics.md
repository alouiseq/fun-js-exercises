##General Web Knowledge

**HTTP requests: GET, POST and headers like cache-control, etag, transfer-encoding**

content-encoding: entity response header used to compress the media-type (gzip, compress, ...)
transfer-encoding: hop-by-hop response header that is applied to a message between nodes, not the resource itself
cache-control: general header used to specify directives for caching mechanisms in both requests and responses
etag: response header that is an identifier for a specific version of a resource (similar to a fingerprint)

**REST vs RPC**

RPC - useful for working with a narrow view of the data.
REST - requires HTTP methods (GET, POST, PUT, DELETE)

**Security: CORS, JSONP, iFrame policies**

CORS - cross origin resource sharing is a policy put in place by the browser ensure that another domain with a  
different origin cannot be accessed unless the proper access control header is set (Access-Control-Allow-Origin: *)

JSONP -  (JSON with padding) provides a work around for the same-origin policy (CORS) issue. Instead of using  
fetch or XMLHttpRequest to make an API call to retrieve data, <script> tag is used.

##Web Performance

**Critical rendering path**

CRP is the sequence of steps the browser goes through to convert the HTML, CSS, and Javascript into pixels on the screen.  
It includes the DOM (Document Object Model), CSSOM (CSS Object Model), render tree, and layout.

DOM is created as html is parsed. The HTML may request JS which can alter the DOM. The HTML makes requests for styles,  
which builds the CSS object model. The browser engine combines the DOM and CSSOM to create the Render Tree. Layout  
determines the size and location of everything on the page. Once layout is determined, pixels are painted to the screen  
(source: [MDN-critical-path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)).

While DOM is built incrementally, CSSOM is not and is render blocking (browser blocks the page rendering until it receives  
and processes all of the CSS). Content can't be rendered until the CSSOM is complete.

**Service workers**

service workers act as proxy servers between web apps, browser, and the network. They enable the creation of effective  
offline experiences, intercept network requests, and take appropriate action based on network availability, and  
update assets residing on the server. The also allow access to push notifications and background sync APIs.

**Image optimization**

Use the right image format. Compress images but still retain good quality. Use sprites to decrease image resource requests.

**Lazy loading images and video**

This is good practice as users may never see the images/videos. There are different techniques to lazy load images:
```
1. Add an event listener and check if the image is inside the viewport. If it is, then load the image.
2. Intersection Observer. Create an observer and subscribe to it. When an image hits an intersection area or  
document viewport, run the function. If there is intersection, load the image.

**HTTP/2**

supports queries multeplexing, headers compression, priority and more intelligent packet streaming management for reduced  
latency and accelerates content download on modern web pages.

**Preload, preconnect, and prefetch**

They allow web developers optimize delivery of resources, reduce round trips, and fetch resources to deliver content  
faster while a user is browsing a page.

Preload - used in a link tag; makes an early fetch request to get the resource; useful for high priority resource
Preconnect - resolves the DNS and TCP handshaking
Prefetch - helps fetch the resource and places it in the cache and used as needed without making another request.

**Minimize browser reflows**

Refers to the re-calculation of positions and dimensions of all elements, which leads to re-rendering part or all  
of the document. Reflows are browser blocking. They are triggered by:

```
adding, removing, or changing visible DOM elements
adding, removing, or changing CSS styles
CSS3 animations and transitions
using offsetWidth and offsetHeight
user actions
```

Ways to minimize browser reflows:
```
1. Reduce unnecessary DOM depth.
2. Minimize the number of CSS rules, and remove unused CSS rules.
3. Remove complex animations from the flow (use positions).
4. Avoid unnecessary complex CSS selectors - descendant selectors in particular - which require more CPU power to do selector matching.
```

**Rendering performance**

Optimizing web performance:
```
1. Minimize the number of critical resources by deferring their download, making them async, or removing them.
2.Optimize the number of requests required along with the file size of each request.
3. Optimize the order in which critical resources are loaded by prioritizing the downloading of critical assets,  
sorten the critical path length.
4. Minification.
5. compress the resources (gzip)
6. Minimize http requests.
7. Place CSS stylesheets on the top and scripts on the bottom of <body>
8. Use CDNs

##DOM

**Select or find using document.querySelector**

**Traverse the DOM**

Finding the parent node of a given node:  
`const parent = node.parentNode;`  
Finding the child nodes of a given node:  
`const children = node.childNodes;`  
Finding siblings of a node:  
`const next = node.nextSibling;`  

**Manipulation: Add, remove, copy, and create nodes in the DOM tree**

Create a new element and attach if to the DOM tree:  
```
let el = document.createElement('div');
el.innerHTML = '<p>Hello World!</p>';
OR use DOM methods and append to the new element.
let textnode = document.createTextNode('Hello World!');
el.appendChild(textnode);
```
(Source: [DOM-manipulation](https://plainjs.com/javascript/manipulation/))

**Performance: Document fragments and node caching**

##Javascript

**Binding: call, apply, bind, and lexical this**

Call, bind, and apply methods set the `this` keyword independent of how the function is called.  

bind(thisArg, arg1, arg2, ...) - returns the function with `this` set to `thisArg`
call(thisArg, arg1, arg2, ...) - similar to bind but executes the function
apply(thisArg, [arg1, arg2, ...]) - similar to call but allows for arguments as an array

**Execution Context: scoping & closures**

Closures are functions that have access to variables and data of the encapsulating function.

**Prototypal inheritance**

When creating a new object that inherits from another, the new object does not contain its own properties/methods,  
but instead the props/methods exist higher up its prototype chain.

**Event delegation and bubbling**

To ways of event propagation in the HTML DOM API. Allows for a single handler to be registered on an element instead  
of registering handlers for each element in a hierarchy (parent to/from children).

Bubbling - the event is first captured and handled by the innermost element and then propagated to the outer elements.
Capturing - the event is first captured and handled by the outermost element and then propagated to the inner elements.

`addEventListener(type, listener, useCapture)` where useCapture default is bubbling.

**Type coercion, using typeof, instanceof, and Object.prototype.toString**

instanceof - tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object

Object.prototype.toString - returns a string representing the object

**Event Loop**

**Handling async calls with callbacks, promises, await, and async**

**Variable and function hoisting**

**Currying**

Currying is the process of turning a function with multiple arity (number of arguments a function takes) into  
a function with less arity (source: Kristina Brainwave)

**Object prototypes, constructors, and mixins**

**Composition and high order functions**

Higher-order functions - functions that operate on other functions, either by taking them as arguments or by returning them.  

**When to use function declarations and expressions**

##Design Patterns

**Decorator**

**Factory**

**Singleton**  
Limits the number of instances of a particular object to just one.  

**Revealing module**  
All functionality and variables should be hidden unless deliberately exposed.  
Use function-level scoping to mimic 'private' and 'public' variables.  

**Facade**

**Observer**

**MVC, MVP, MVVM**

##HTML

**Semantic markup**

Added tags that provide semnatic meaning to HTML: header, footer, main, nav, aside, article, section

**Tag attributes**

**How to declare your doctype and what meta tags are available to use**

**Accessibility concerns**

ARIA is a set of attributes that define ways to make web content and applications more accessible to  
people with disabilities.

**What are web components?**

A: They are a suite of varying technologies that allows one to create reusable custom elements.

##CSS

**Layout**

Positions and sizes of all the elements in the DOM.  

**Responsive Design**

**Adaptive Design**

**Specificity**

**Namespacing**

##Data Structurees & Algorithms (DS&A)

``
Linked Lists
Hash Tables
Stacks and queues
Trees(binary trees and heaps)
Graphs (know how to implement depth-first and breadth-first search traversals)
```

##System Design

**Rendering**

**Layout**

**State Management**

**Async flow**

**Separation of concerns**

**Multi-device support**

**Asset delivery**
