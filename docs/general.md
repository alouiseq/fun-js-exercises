# General Questions

**Q: There are several ways to decrease page load (perceived or actual load time). Can you name 3?** 

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


**Q: Can you describe the difference between progressive enhancement and graceful degradation?**

A: They’re the same thing. :) They're both about accessibility, but from opposite sides or point of views. With progressive enhancement, the idea is to start from a base level and build your way up to the best possible experiences by testing for and adding more advanced features in browsers along the way. 

With graceful degradation, the idea is to start from a modern level of user experiences, and degrading gracefully down non-modern browsers so that it stays functional in older browsers. Some modern features will fail, but it'll fail in a way that doesn't affect the core functionality of the site. 

We currently have tools that makes it easy to check for features, like Modernizr. 

	•	Bonus points for the answer “no one can” 
	•	Extra bonus points for describing feature detection/polyfills, etc. 

Q: Are you on Github? If so, what are some examples of repos you follow... 

Q: What blogs do you follow? 

Q: What version control systems have you used? 

Q: What is your preferred development environment? (OS, Editor, Browsers, Tools etc.) 

Q: Can you describe your workflow when you create a web page? 

Q: What tools do you use to test your code’s performance? 

Q: If you could master one technology this year, what would it be?

**Q: What are you testing, integration testing, and functional testing?**
