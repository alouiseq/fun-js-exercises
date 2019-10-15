# Behavioral Questions

**Why Us?**

Over the years, I found myself reading less and less news. I'm always behind current events. When I analyzed why that is, I realized that I was so immersed  
in the work I'm doing and my family that I didn't make room for news. When I saw this opportunity at New York Times, that was the first thing that popped into  
mind. How cool would it be, if I can work and contribute at a journalism/publication company where the main product is news. Then I would satisfy both my  
quench for software knowledge and be up to date with everything that's happening in the world.

Among other things:

- I read 2 articles by Hamman and Mike Reifman that was catered to the Front-End Engineer hiring process. This shows the dedication and care for current enginners  
as well as new engineers coming in. It speaks to the type of engineering culture.
- I like how large the company size is (what I'm currently looking for)
- The mission of delivering news and helping readers be aware of what's happening immediately around them and around the world is fascinating.
  - being able to contribute to this cause would be amazing
- Having a reason to fly to New York would be awesome.
- I love how I feel like I know what's going on at New York Times due to the number of articles detailing what's going on inside.

**Company Values**

**Note**Prepare a list of skills that the role requires and come up with an example that showcases the skill.

**Resume background questions**

**List of Questions:**

Most difficult project I've worked on? How did I solve it?

Give a story of how you could've done something differently?

Biggest professional/personal achievements?

Consider top 3-5 attributes (e.g. initiative, leadership, commitment) and craft a professional narrative?

Decisions, tradeoffs, and impact of actions on the project and its stakeholders?

## Use Situation-Task-Action-Result (STAR)

**Situation: Describe the event, problem, or challenge you encountered. This must describe a specific situation, not your whole professional experience.**

**Task: Describe the task you had ownership over within the situation. What goal were you working toward? Be sure to keep it specific and highlight the challenges you faced.**

**Action: What did you (not your team) decide to do? What steps did you take to address the situation? Focus on your actions, while being humble, and acknowledging the accomplishments of your team. Make sure that your actions highlight the characteristics the company is seeking, such as initiative, teamwork, leadership, perseverance, etc.**

**Result: Describe what happened as a result of your actions; and if possible, back up your success with hard numbers. This is also an opportunity for you to be a bit introspective and speak about what you learned or might’ve done differently.**

Behavioral Questions

Use STAR:
* Situation: Describe the event, problem, or challenge you encountered. This must describe a specific situation, not your whole professional experience.
* Task: Describe the task you had ownership over within the situation. What goal were you working toward? Be sure to keep it specific and highlight the challenges you faced.
* Action: What did you (not your team) decide to do? What steps did you take to address the situation? Focus on your actions, while being humble, and acknowledging the accomplishments of your team. Make sure that your actions highlight the characteristics the company is seeking, such as initiative, teamwork, leadership, perseverance, etc.
* Result: Describe what happened as a result of your actions; and if possible, back up your success with hard numbers. This is also an opportunity for you to be a bit introspective and speak about what you learned or might’ve done differently.
* 

**STAR 1:**
```
Situation:
- My team were creating components but we had no mechanism for doing in such a way to not as duplicate the efforts
- We weren’t sure of the API contract that others have implemented
Task:
- I wanted create a way to unify the components to be more reusable and well defined
Action:
- I spearheaded the effort in creating a separate page (called examples) that allowed my team to create reusable components that were clearly defined.
- This React component contained all the reusable composible components like button, dropdown, select, footer, etc.
- it had examples of how to use them small documentation on API to provide properties and types allowed
- We worked as a team to build this library of reusable components and constantly communicating to ensure we don’t duplicate the efforts
Result:
- Faster development time
- take ownership in the components we’re building
- Our code was better organized
- this later gave birth to JS reusable components via Lerna and Storybook
```

**STAR 2:**
```
Situation:
- Our monolith application codebase was increasing, hiring and growth pace is increasing
- we were finding ourselves having to take 1hr or more on a simple one line code fix
Task:
- Find a solution to help decrease dev time on bugs, new features, on boarding, tech debt, loosen coupling
Action:
- I proposed a solution by selecting a feature in our app that we use across other parts of the application and implement it as a NPM package that we can use as a library dependency (build time integration) in our app.
- This is essentially our intro to micro frontends since it was isolated and had its own API and downstream micro service that it talks to
Result
- Albeit a good intro to a more modular approach, we found it somewhat difficult to manage and use
- Any small change to the code would mean a redeploy for the entire application
- used create-react-app and had a lot of restrictions on web pack configurations and babel presets
- naturally, this enabled me to do more research and started looking into micro frontends which we now employ in our applications
- I along with another developer spearheaded the discussion and documentation on the benefits of micro frontends
```
