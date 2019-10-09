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

**Q: GraphQL vs REST?**

A: GraphQL is more flexible and efficent than REST. GraphQL solves the problem of under and over-fetching data with REST.
Under-fetching happens when the endpoint does not return nough required information. Over-fetching happens when the client 
downloads more data than what is required. Over and under-fetching occur because hitting endpoints return fixed data structures. 
They are fixed because of the difficulty in designing the API in a way that provides clients with their exact data needs. 
Even if a REST API is structured to design endpoints according to the views of the app, it doesn't allow for rapid interations 
in the frontend. Any change in the frontend will consequently produce the issue of under/over-fetching data.

GraphQL solves this issue because the client sends a single query to the GraphQL server that includes the exact data requirements. 
The server responds with a JSON object where all the data requirements are fulfilled.

**Q: What is headless architecture?**

A: Provide a solution to produce and manage content while ensuring a seamless eperience across channels/devices/platforms. It is a 
decoupled model that shifts responsibility of display logic from the server to the client. This allows the frontend to create as 
many "heads" as it wants and have full control over the user experience with its own native tools.

**Q: What are progressive web apps?**

A: Apps that have the look and feel of a native app but are really web apps. The app resides on the desktop/mobile and can be opened and used even offline.

**Q: How do you solve the issue with CORS (cross origin resource sharing) when attempting to acces a resource outside of the current domain?**  

The browser is the gatekeeper when accessing resources and either blocks the API request with the CORS policy error if the external domain access is not  
permitted or allows access to the resource (origins don't match).

3 Ways to resolve the issue access control issue:  
1. Include the `Access-Control-Allow-Origin: *` header in the server response.
2. Send your request to a proxy server like [cors-anywhere]https://github.com/Rob--W/cors-anywhere/#documentation) which adds the CORS header to the response.  
The idea is for the web app to send the request to the proxy server, the proxy server then requests the resource directy from the desired server, the proxy server  
adds the `Access-Control-Allow-Origin: *` header to the response header and returns to the web app, the browser sees that the API is ok to access, proceeds to  
request the resource and receives from the server. 
3. Build your own proxy to avoid latency from the publicly used cors-anywhere.

