# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project 1: "Full Stack Node App"

### Overview

This project is your first foray into building a **full-stack application**. You'll be **building a Node app**, which means you'll learn about what it takes to build a functional application from the ground up yourself.

**This is exciting!** It's a lot, but by the end of the week we will have given you the all of the tools needed to build your app.  Here's the best part - you get to decide what you want to build - as long as it meets the technical requirements outlined below.

**You will be working individually for this project.** You'll be designing and coding the app yourself. **Remember to keep things small and focus on mastering the fundamentals – scope/feature creep is the biggest pitfall for any project!**

---

### Technical Requirements

Your app must:

- **Have at _least_ 2 models** (more if they make sense) – one representing someone using your application, and at least one more that represents the main functional idea for your app.
- **Include sign up/log in functionality**, with authentication. Implement basic authorization by restricting access to certain features (i.e. editing or deleting a resource) to an authenticated user.
- **Have full CRUD** with complete RESTful routes for at least one of your resources (GET, POST, PUT/PATCH, and DELETE)
- Have **semantically clean HTML and CSS** in your templates/views.
- Be **deployed online** (Heroku) and accessible to the public.

---

### Necessary Deliverables

- A **working full-stack application, built by you**, hosted on Heroku.

- A **git repository for your app, hosted on GitHub** with frequent 
  commits dating back to the **very beginning** of your project. Commit early, commit often.

- A **link to your hosted working app** in the URL section of your GitHub repo

- A `readme.md` file at the root of the project's git repo with:

    - A screenshot of the finished application ([Taking screenshots on a Mac](https://support.apple.com/en-us/HT201361))
    - An introduction to the application
      - What is it?
      - What problem(s) does it aim to solve?
    - Explanations of the technologies used.
    - Installation/startup instructions (this will be a little more complicated than with project 1!). How can a potential employer run your code *locally* on their own machine?
    - A [wireframe](https://en.wikipedia.org/wiki/Website_wireframe) of the initial idea. You could take a screenshot of a wireframe using [Gliffy](https://www.gliffy.com/), [Balsamiq](https://balsamiq.com/), or even just draw it on a napkin and snap a photo!
    - An **ERD** (entity relationship diagram) for the data models in your app. The quickest way to get a nice looking ERD is to build one with [Gliffy](https://www.gliffy.com/), take a screenshot of it, and include the screenshot in your readme. But again, a napkin sketch works just as well!
    - A **Backlog**: Descriptions of any **unsolved problems** or **major hurdles** you had to overcome.
    - Take advantage of Markdown syntax in your `readme.md` using this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!
    - A link to your **publicly accessible** trello board, described below:

- A **Trello board** with **User Stories**, each moving from left to right in the following lists in your board:

    - *Backlog* (stretch goals)
    - *To-Do* (what you think you can get done during the week)
    - *Doing* (what feature(s) you are working on NOW)
    - *Done* (what features have been tested and merged into the main codebase)

    The lists in your trello board don't have to be named exactly like the ones listed above, but those are a good reference point to start with.

    Prioritize your user stories within the *Backlog* with your "wish list" stories at the bottom.

---

### Suggested Ways to Get Started

- **Plan with the end in mind.** Know where you want to go by planning with Wireframes & User Stories, so you don't waste time building things you don't need.
- **Aim for MVP Wednesday** If you define an MVP that you think you can complete by end of day Wednesday, that gives you plenty of extra time before demo day in case it takes longer than you think it will. If you do achieve MVP Wednesday, then you have plenty of time for stretch goals and styling!
- **Test whatever libraries or gems you want to use.** Most of the time, there is a tutorial that you can follow, but not always, and learning to read documentation is crucial to your success as a developer. **Don't blindly install gems without first understanding how they work!** *If you choose to work with gems that we don't teach in class, it is* **YOUR** *responsibility to read the docs - we may not be able to support you fully if you use a gem that we haven't covered.*
- **Model your data!** Get your data model (`ActiveRecord`) running first, independent of your implementation of User Stories.

---

### Project Idea Guidance

Nearly all of the web applications you interact with on a daily basis would do for this project: they are "full-stack" CRUD apps, that is. How to spot a CRUD app: if a website has users that log in, it is a CRUD app!

#### Do Not Do

Easiest is to list applications that aren't CRUD apps:

- ***games***
- artistic sites that focus on rich interaction
- aggregators that get data not from users, but from other web services (like Yahoo)
- real-time interactive applications, like chat apps (Slack)

Finally, there are types of CRUD apps that don't do well as projects:

- storefronts: these are technically CRUD apps. However, they involve complex use of web services that we will explore in the next project - save your effort for then!

#### Good Examples

So much of the Internet is CRUD apps!

- Social media:
  - Facebook
  - Twitter
  - Instagram
  - Tumblr
  - LinkedIn
  - Reddit
- Organizational, Business or ERP apps:
  - Todoist
  - Quicken
  - Salesforce
  - [Connect](http://www.getconnectapp.com)
- Services:
  - YouTube
  - Tinder
  - IMDB
  - StackOverflow
  - Uber
  - Yelp
  - FourSquare

You can make a clone of any of these (but not straight from a tutorial!), or something that performs a
service like these, or something else entirely!

---

### Project Feedback + Evaluation

- __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

- __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

- __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

- __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Is your code commented well enough for another developer to reason about your code easily?

- __Problem Solving__: Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

- __Total__: Your instructors will give you a total score on your project between:

  | Score | Expectations                                         |
  | ----- | ---------------------------------------------------- |
  | **1** | _Does not meet expectations._                        |
  | **2** | _Meets expectactions, good job!_                     |
  | **3** | _Exceeds expectations, you wonderful creature, you!_ |

  This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!

---

### Useful Resources

* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_
