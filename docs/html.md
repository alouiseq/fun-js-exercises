# HTML Questions 

**Q: What's a doctype do?**

A: The doctype declaration should be the very first thing in an HTML document, before the tag. The doctype declaration is not an HTML tag; it is an instruction to the web browser about what version of the markup language the page is written in. The doctype declaration refers to a Document Type Definition (DTD). The DTD specifies the rules for the markup language, so that the browsers render the content correctly. 


**Q: What's the difference between standards mode and quirks mode?**

A: In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5 for Windows that is required not to break existing content on the Web. In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In almost standards mode, there are only a very small number of quirks implemented. http://www.quirksmode.org/css/quirksmode.html 

**Q: What is the difference between windows.onload and onDocumentReady?**

A: The onload event does not fire until the last element of the page is loaded including CSS and images etc. There could be a huge delay before onload code on the page is executed.

onDocumentReady will be able to execute code as long as DOM has been built; without waiting for the elements to be loaded, such as images. That means there will be a faster code execution.

**Q: What are data- attributes used for?**

A: Any attribute that starts with “data-” will be treated as a storage area for private data (private in the sense that the end user can’t see it – it doesn’t affect layout or presentation). This allows you to write valid HTML markup while, simultaneously, embedding data within your page. 

**Q: Describe the difference between cookies, sessionStorage and localStorage.**

A: 
Local Storage = persistent and scoped to the domain. Stores data with no expiration date. Unsupported before IE8. 

Session Storage = non persistent and scoped only to the current window. Stores data for one session. Unsupported before IE8. 

Cookies = the old school way of doing all of the above. Stores name/value pairs per domain. 
