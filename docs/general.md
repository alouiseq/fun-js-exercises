General Questions

Q: There are several ways to decrease page load (perceived or actual load time). Can you name 3? 

A: Any one of these...plus many, many more... 
	•	Minimize HTTP requests.
	•	Keep the size of data you get from the server to a minimum.
	•	Be lazy. Don’t do something until you absolutely have to (lazy loading).
	•	Enable compression on your server.
	•	Enable HTTP caching on your server.
	•	Minify and if possible compress your css and JavaScript.
	•	Reduce the number of JavaScript and css files.
	•	Keep your JavaScript at the bottom of the page.
	•	Keep your css at the top of the page.
	•	If inline JavaScript exceeds 50 lines make it external.
	•	Use a CDN.
	•	Make minimum number of DOM modifications.


Q: Can you describe the difference between progressive enhancement and graceful 
degradation?

A: They’re the same thing. :) They're both about accessibility, but from opposite sides or point of views. With progressive enhancement, the idea is to start from a base level and build your way up to the best possible experiences by testing for and adding more advanced features in browsers along the way. 

With graceful degradation, the idea is to start from a modern level of user experiences, and degrading gracefully down non-modern browsers so that it stays functional in older browsers. Some modern features will fail, but it'll fail in a way that doesn't affect the core functionality of the site. 

We currently have tools that makes it easy to check for features, like Modernizr. 

	•	Bonus points for the answer “no one can” 
	•	Extra bonus points for describing feature detection/polyfills, etc. 

HTML Questions 

Q: What's a doctype do? 

A: The doctype declaration should be the very first thing in an HTML document, before the tag. The doctype declaration is not an HTML tag; it is an instruction to the web browser about what version of the markup language the page is written in. The doctype declaration refers to a Document Type Definition (DTD). The DTD specifies the rules for the markup language, so that the browsers render the content correctly. 


Q: What's the difference between standards mode and quirks mode? 

A: In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5 for Windows that is required not to break existing content on the Web. In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In almost standards mode, there are only a very small number of quirks implemented. http://www.quirksmode.org/css/quirksmode.html 

Q: What is the difference between windows.onload and onDocumentReady?

A: The onload event does not fire until the last element of the page is loaded including CSS and images etc. There could be a huge delay before onload code on the page is executed.

onDocumentReady will be able to execute code as long as DOM has been is built; without waiting for the elements to be loaded, such as images. That means there will be a faster code execution.

Q: What are data- attributes used for? 

A: Any attribute that starts with “data-” will be treated as a storage area for private data (private in the sense that the end user can’t see it – it doesn’t affect layout or presentation). This allows you to write valid HTML markup while, simultaneously, embedding data within your page. 


Q: Describe the difference between cookies, sessionStorage and localStorage. 

A: 
Local Storage = persistent and scoped to the domain. Stores data with no expiration date. Unsupported before IE8. 

Session Storage = non persistent and scoped only to the current window. Stores data for one session. Unsupported before IE8. 

Cookies = the old school way of doing all of the above. Stores name/value pairs per domain. 
CSS Questions 

Q: Describe what a "reset" CSS file does and how it's useful. 

A: A reset removes and neutralizes the inconsistent default styling of HTML elements in different 
browsers. The reset stylesheet removes the browser’s defaults, so you don’t have to worry about them. 


Q: Describe Floats and how they work. 

A: A float is a box that is shifted to the left or right on the current line. The most interesting characteristic of a float (or “floated” or “floating” box) is that content may flow along its side (or be prohibited from doing so by the “clear” property). Content flows down the right side of a left-floated box and down the left side of a right-floated box. 


Q: How are Class and Id different? When are good examples when to use each? 

A: Class can be reused. Id should only be used once. Id overrides class. Class uses the "." while ID uses the "#" in CSS declarations. Classes are good for common items that are used often throughout a site. ID is used best when you want to attach events or interact with the DOM. Stuff like that. 


Q: Explain CSS sprites, and how you would implement them on a page or site. 

A: The idea of CSS sprites is pretty genius. For those of you who don't know the idea of a sprite, a sprite is basically multiple graphics compiled into one image. The advantages of using sprites are: 

	•	Fewer images for the browser to download, which means fewer requests to the server. 
	•	Total images size is generally smaller, so less download time for the user and less bandwidth consumption. 
	•	No ugly mouseover code. No JavaScript -- only CSS! 

Implementation: Create a new image that is as wide as your widest image and and as tall as the combined height of all your images plus X pixels, where X is the number of images you have. Now place your images into this new image, left aligned, one on top of the other with one pixel of white space in between. 

Q: Explain your understanding of the box model. Bonus: How you would tell the browser in CSS to render your layout in different box models. 

A: For display purpose, every element in the page is considered a box. The box model refers to the specification of the box attributes such as the width, padding, border and margin. You can change the box model by setting the box-sizing property. Some values are: content-box (default), padding-box, and border-box) 

	•	Content-box: width & height includes content but not padding/border/margin 
	•	Padding-box: include up to padding 
	•	Border-box: include up to border, but not margin 

Bonus points for knowing that IE is different with it’s box model rendering before IE6 and in quirks mode. 


Q: What are some different ways to visually hide content (and make it available only for screen readers)? 

A: Any one of these will work: 

	•	visibility: hidden
	•	width: 0; height: 0;
	•	text-indent: -1000px
	•	absolute position off the screen

Q: What are the advantages/disadvantages of using CSS preprocessors? (SASS, Compass, Stylus, LESS) 

A: 
Advantages 
	•	better organization from nesting them
	•	ability to define variables and mixins
	•	have mathematical functions
	•	joining multiple files
	•	in some cases, cleaner syntaxes

Disadvantages 
	•	mainly for designers not comfortable on the command line or programming concepts

BONUS: Describe what you like and dislike about the CSS preprocessors you have used. 


Q: How would you implement a web design comp that uses non-standard fonts? Webfonts (font services like: Google Webfonts, Typekit etc.) 

A: 2 ways to do this... 
	•	Use @font-face to render a font (uses src for hard resources)
	•	Can just link to a webfont as a stylesheet, use @import, or javascript

Q: Explain how a browser determines what elements match a CSS selector? 

A: Browsers read selectors from right-to-left. First looks for all elements matching the key selector (the right-most). Then checks if it matches or is under the next (left-most) element. 

Q: Have you ever used a grid system, and if so, what do you prefer? 

A: Open ended question. Should be able to name a few of these hopefully: 

	•	Bootstrap 
	•	960 grid system 
	•	Blueprint 
	•	Responsive Grid System 
	•	Foundation 

Q: Have you used or implemented media queries or mobile specific layouts/CSS? 

A: Open ended... 
JS Questions 

Q: Can you name some JavaScript types (primitive)? 

A: Number, String, Boolean, Function, Object, Null, Undefined. 

Q: What do these JS methods do? getElementById, getElementsByTagName, querySelectorAll, appendChild and removeChild. 

A: 
	•	getElementById - Returns the element whose ID is specified.
	•	getElementsByTagName - Returns a list of elements with the given tag name. The subtree underneath the specified element is searched, excluding the element itself.
	•	appendChild - Adds a node to the end of the list of children of a specified parent node. If the node already exists it is removed from current parent node, then added to new parent node.
	•	removeChild - Removes a child node from the DOM. Returns removed node.
	•	querySelectorAll - enter a CSS selector as a parameter and return the selected elements as DOM elements.

Q: Explain event delegation in regards to the DOM. (if they are blocked mention event bubbling) 

A: A process of using event propagation to handle events at a higher level in the DOM. Allows us to put a single event listener to the parent element instead multiple on all the children. When the children is clicked, a click event is fired and bubbles up the DOM tree (event propagation/bubbling). The parent then simply checks the event target property to get the reference to the actual clicked node. 


Q: Explain how “this” works in JavaScript.

A: The "this" keyword acts as a reference to the context object, so you can access its properties through the normal dot notation. The value of "this" changes though, depending on what context you're executing in. 

Examples: 
	•	When there's no dot notation, 'this' is bound to the global object window
	•	“this” usually refers to the object to the left of the dot at call time 
	•	When you use call and apply, you get to decide what 'this' is bound to
	•	When you use the keyword 'new' to create an instance, the keyword 'this' is bound to the instance not the function.


Q: Explain how prototypal inheritance works

A: Since javascript doesn't have a concept of a class, we implement inheritance by creating objects which can act as a prototype for other objects. You can do so by adding the 'parent' or 'blueprint' object to the prototype property of your child object. Or create an 'object' function that takes in the parent (and overriding supplements) and returns the child with parent in prototype. 

One of the benefit of this is a performance boost since all child instances will point to the prototype properties and methods as references instead of making their own copies. 


Q: What's a hashtable? 

A: It's a data structure that can map keys to values. It uses a hash function to compute an index (key?) into an array of buckets or slots, from which the correct value can be found. 

In Javascript, all objects are hashes. 


Q: What's the difference between a variable that is: null, undefined or undeclared? 2nd part - How would you go about checking for any of these states?

A: Undeclared variables are those that are not declared at all. Undefined variables are declared variables that were not given a value. It is also a type. Null is an object that indicates lack of a value. 

Part 2 - Null and undefined are the same value but different types: 

null == undefined // true 
null === undefined // false 

Q: What is ‘lexical’ scoping?

A: This means that the functions run in the scope in which they are defined, not the scope from which they are executed. 

Q: What is a closure, and how/why would you use one?

A: A function within a function, a closure is an inner function that has access to the outer function's variables. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables. 

Properties 

	•	Closures have access to the outer function's variable even after the outer function returns. 
	•	Closures store references to the outer function's variables 

Uses: 
	•	Call a function that generates another function or group of functions but hides all the state in private variables within the closure 
	•	Closures for events and callbacks 
	•	Enforce public/private methods 


Q: Explain AJAX in as much detail as possible 

A: Make http requests (use of the XMLHttpRequest object to communicate with server-side scripts). It can send as well as receive information in a variety of formats, including JSON, XML, HTML, and even text files. AJAX's most appealing characteristic, however, is its "asynchronous" nature, which means it can do all of this without having to refresh the page. This lets you update portions of a page based upon user events. 


Q: Explain how JSONP works (and how it differs from AJAX)

A: JSONP is a method commonly used to bypass the cross-domain policies in web browsers (You are not allowed to make AJAX requests to a webpage perceived to be on a different server by the browser). JSON and JSONP behave differently on both the client and the server. JSONP requests are not dispatched using the XMLHTTPRequest (and the associated browser methods), instead a <script> tag is created, whose source is set to the target URL. This script tag is then added to the DOM. 


Q: Explain "hoisting".

A: Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. http://www.sitepoint.com/back-to-basics-javascript-hoisting/


Q: Difference between document load event and document ready event?

A: Document ready: executes when HTML-Document is loaded and DOM is ready. Document load: executes when complete page is fully loaded, including all frames, objects and images. 


Q: What is the difference between == and ===?

A: This tests for understanding of type coercion. ===, or 'strict comparison' means is the same type and equal == simply means equal 

	•	JavaScript has both strict and type-converting equality comparison. For strict equality the objects being compared must have the same type and: 
	•	Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
	•	Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
	•	Two Boolean operands are strictly equal if both are true or both are false.
	•	Two objects are strictly equal if they refer to the same Object.
	•	Null and Undefined types are == (but not ===).


Q: Explain the same-origin policy with regards to JavaScript. 

A: The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. Only scripts that are served from the same domain can access each others objects and properties without restriction (so if you have a .js file with named functions defined, you can call it from any other file hosted on the same domain. Two pages have the same origin if the protocol, port (if one is specified), and host are the same for both pages. 

BONUS: If they know what CORS is. http://www.html5rocks.com/en/tutorials/cors/


Q: What is strict mode? What are the advantages and disadvantages to using it? 

A: strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/


Q: Have you ever used JavaScript templating? If so, what libraries have you used? (Mustache.js, Handlebars etc.) 

A: Open ended... 


Q: How do you go about testing your JavaScript? 

A: Open ended, but hopefully should know some JS testing frameworks like Jasmine, qUnit, Mocha, Karma, etc... 

Miscellaneous 

Q: Are you on Github? If so, what are some examples of repos you follow... 

Q: What blogs do you follow? 

Q: What version control systems have you used? 

Q: What is your preferred development environment? (OS, Editor, Browsers, Tools etc.) 

Q: Can you describe your workflow when you create a web page? 

Q: What tools do you use to test your code’s performance? 

Q: If you could master one technology this year, what would it be?

