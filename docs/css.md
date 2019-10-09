# CSS Questions 

**Q: Describe what a "reset" and "normalize" CSS file does and how it's useful.**

A reset removes and neutralizes the inconsistent default styling of HTML elements in different 
browsers. The reset stylesheet removes the browser’s defaults, so you don’t have to worry about them. 

CSS normalizing ensures that all html elements behave in a consistent way across browsers and platforms.

**Q: Describe Floats and Clear and how they work.**

A: A float is a box that is shifted to the left or right on the current line. The most interesting characteristic of a float (or “floated” or “floating” box) is that content may flow along its side (or be prohibited from doing so by the “clear” property). Content flows down the right side of a left-floated box and down the left side of a right-floated box. When using clear to clear or not overlay the floated element, use the same side as was used in the float (e.g. if float: left then use clear: left OR clear: both). 


**Q: How are Class and Id different? When are good examples when to use each?**

A: Class can be reused. Id should only be used once. Id overrides class. Class uses the "." while ID uses the "#" in CSS declarations. Classes are good for common items that are used often throughout a site. ID is used best when you want to attach events or interact with the DOM. Stuff like that. 


**Q: Explain CSS sprites, and how you would implement them on a page or site.**

A: The idea of CSS sprites is pretty genius. For those of you who don't know the idea of a sprite, a sprite is basically multiple graphics compiled into one image. The advantages of using sprites are: 

	•	Fewer images for the browser to download, which means fewer requests to the server. 
	•	Total images size is generally smaller, so less download time for the user and less bandwidth consumption. 
	•	No ugly mouseover code. No JavaScript -- only CSS! 

Implementation: Create a new image that is as wide as your widest image and and as tall as the combined height of all your images plus X pixels, where X is the number of images you have. Now place your images into this new image, left aligned, one on top of the other with one pixel of white space in between. 

**Q: Explain your understanding of the box model. Bonus: How you would tell the browser in CSS to render your layout in different box models.**

A: For display purpose, every element in the page is considered a box. The box model refers to the specification of the box attributes such as the width, padding, border and margin. You can change the box model by setting the box-sizing property [content-box (default) and border-box] 

	•	Content-box: width & height include content but not padding/border/margin 
	•	Border-box: width & height include content, padding, and border - no margin 

Bonus points for knowing that IE is different with it’s box model rendering before IE6 and in quirks mode. 


**Q: What are some different ways to visually hide content (and make it available only for screen readers)?**

A: Any one of these will work:

	•	visibility: hidden
	•	display: none
	•	width: 0; height: 0;
	•	text-indent: -1000px
	•	absolute position off the screen

**Q: What are the advantages/disadvantages of using CSS preprocessors? (SASS, Compass, Stylus, LESS)**

A: 
Advantages 
	•	better organization from nesting them
	•	ability to define variables and mixins (define styles that can be reused throughout stylesheet)
	•	have mathematical functions
	•	joining multiple files
	•	in some cases, cleaner syntaxes

Disadvantages 
	•	mainly for designers not comfortable on the command line or programming concepts
	•	slower app or site

BONUS: Describe what you like and dislike about the CSS preprocessors you have used. 

**Q: How would you implement a web design comp that uses non-standard fonts? Webfonts (font services like: Google Webfonts, Typekit etc.)**

A: 2 ways to do this... 
	•	Use @font-face to render a font (uses src for hard resources)
	•	Can just link to a webfont as a stylesheet, use @import, or javascript

**Q: Explain how a browser determines what elements match a CSS selector?**

A: Browsers read selectors from right-to-left. First looks for all elements matching the key selector (the right-most). Then checks if it matches or is under the next (left-most) element. 

**Q: Have you ever used a grid system, and if so, what do you prefer?**

A: Open ended question. Should be able to name a few of these hopefully: 

	•	Bootstrap 
	•	960 grid system 
	•	Blueprint 
	•	Responsive Grid System 
	•	Foundation 
	•	antd 

**Q: Have you used or implemented media queries or mobile specific layouts/CSS?**

A: 
It can be inline in the html doc as an attribute *media=<>* or in an external CSS file and can be defined as such:

  @media screen and (min-width: 300px) {
    *normal css*
  }
where screen is a media type (other types: all, print, screen, speech)

**Q: Why use flexbox?**

A: It's an efficient way to layout, align, and distribute space among items in a container, regardless if their size is dynamic or unknown.
Resource: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**Q: What are web components**

A: They are a suite of varying technologies that allows one to create reusable custom elements.

**Q: What is shadow dom**

A: a set of JS APIs that encapsulates a "shadow" DOM tree (scoped subtree) to an element which is separate from the main document DOM. This allows
the element to have private features so they can be scripted and styled without collision with other parts of the document.

**Q: How to draw a triangle, square, and circle in CSS**

A:
Triangle: use borders and 0 width/height
Circle: use border-radius
Square: use width and height

**Q: What are pseudo elements and classes **

A:
Both give elements special effects:
Pseudo elements are selectors that act like they add a new HTML element into the markup (e.g. ::before, ::after). Similar to how elements work.
Pseudo classes are selectors that select elements that are in a specific state (e.g. :hover, :first-child). Similar to how classes work.

**Q: Native CSS vs CSS Modules vs BEM?**

A: Native CSS is exactly that. CSS Modules use javascript to create elements with imported css styles. BEM is a CSS pattern used by some.
The main reasons to use css modules and BEM are to localize css styles within a component to avoid css collision across the entire document.

BEM (Block, Element, Modifier) follows the pattern:
  .btn {}  - Block
  .btn__price {}  - child element
  .btn--orange {}  - modifier
Reference: https://css-tricks.com/bem-101/

**Q: CSS Specificity Calculations**

Style attribute                   (most specificity value)
ID
Class, pseudo-class, attribute
Elements                          (least specificity value)

**Q: How do you center things?**

*Text-align*
1. Wrap a div you want to center with a parent element
2. Set text-align:center on the parent element.

*Margin auto*
1. Set a width on the element you want to center.
2. Set margin-left and margin-right to auto.

*Absolute positioning*
1. Set the element's position property to absolute.
2. Apply left:50% to the element to place the left edge of the element to the center (notice that the actual element including it's width is not quite centered).
3. Set a margin-left of negative half of the element's width (e.g. if the width is 100px then set margin-left: -50px) to correctly offset to the center.

*Transform/translate*
1. Set the element's position property to absolute.
2. Apply left:50% to the element to place the left edge of the element to the center (notice that the actual element including it's width is not quite centered).
3. Apply top:50% if you desire to vertically align the element to the center.
4. Apply transform: translate(-50%, -50%) to correctly offset both the width and height, respectively. This is convenient because you don't need to know the 
width/height of the element, the transform/translate will calculate that automatically.

*Flexbox*
1. HTML, body, and parent container need to have a height of 100%.
2. Set display to flex on the parent container.
3. Set align-items to center on the parent container to vertically center.
4. Set justify-content to center on the parent container to horizontally center.

**Q: What are CSS hacks to fix the issue with overlapping elements when using floats? **

1. Use clear left, right, or both (e.g. follows):
element {
	float: left;
}
element-after {
	clear: left;
}

2. Use overflow auto on the containing element:
child-element {
	float: left;
}
.parent-element {
  overflow: auto;
}

3. Use pseudo-class and a few properties on the containing element:
child-element {
	float: right;
}
parent-element::after {
  content: "";
  clear: both;
  display: table;
}

**Q: How do you use animations?**

Use CSS3 animation and keyframes properties.

E.g.:
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
div {
  animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

**Q: How does z-index work?**

The position on an element must be set for z-index to work. Webpages are made out of stacking contexts (stack of elements). The z-index  
property determines the order of items in each stack, with higher z-index being placed further up or in front of lower z-index values.
