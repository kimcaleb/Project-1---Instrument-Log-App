# Project 1: "Hycor Biomedical Instrument Assay Logs"

## Overview

### What Is It and Why Do we Need It?
A full-stack application for keeping track of materials/external variables for any test runs performed on engineering and production prototype units developed at Hycor Biomedical. During the development and testing phase of IVD (In Vitro Diagnostics)/Medical Devices, it is important to log pretty much everything you do. This is because of two main reasons: passing internal/external audits for ISO cerfications/Meeting Company Compliance and GDP (Good Documentation Practices).
  - ISO 9001 Certification is important for a company to have before launching a new product for several reasons.     The reasons include but are not limited to: meeting customer requirements, improving company and producy quality, improving the consistency of your operations, and many more. 
  - GDP allows for easy back-tracking of events and possibly figuring out what went wrong in the case of an experiment producing unexpected results. 

### Issues with current log tracking:
Hycor has been using VB programmed Excel sheets to keep track of their instrument logs. Although it provided a basic layout for logging run details, there were numerous issues with this tool:
  - The application did not have an external database, meaning if someone accidently deleted the excel sheet, all the data would be lost. 
  - For some reason, people kept making numerous copies of one particular excel sheet, so it was hard to see which one was the original. 
  - The tool lagged a lot and often crashed when it reached the point where it contained hundreds of logs and also that there were many other applications running at the same time in the desktop. 

As a result, Hycor just recently gave up on this tool and reverted back to using pen and paper. Remember that for each test run it is not uncommon to log details about over 40 materials/reagents, so you can see how tedious and tiredsome this can get using your hand. 

Website URL: (https://gentle-beyond-78922.herokuapp.com/)

---


## Snippets of the App

![alt text](https://i.imgur.com/sko2THv.png)
![alt text](https://i.imgur.com/nkEaZWK.png)
![alt text](https://i.imgur.com/7aqCuEp.png)
![alt text](https://i.imgur.com/2cIx47f.png)
![alt text](https://i.imgur.com/g1xquxu.png)
![alt text](https://i.imgur.com/vUpTyUh.png)

---

## Trello/Postman/WireFrame

![alt text](https://i.imgur.com/KCE4o1D.jpg)
![alt text](https://i.imgur.com/wrHfPwJ.jpg)
![alt text](https://i.imgur.com/0T0fyW3.png)
![alt text](https://i.imgur.com/8fomvf6.png)
![alt text](https://i.imgur.com/1cT6x4t.png)

---

## Technologies Used

  - Node.js
  - Express
  - Mongodb/mongoose
  - EJS (Embedded JavaScript) / Express-EJS-Layouts
  - Bcrypt-nodejs
  - Passport/Passport-local Authenticaton Strategies
  - Method-Override
  - Connect-flash
  - Morgan
  - dotenv
  - Bootstrap
  - JQuery
  - HTML5/CSS3

---

## Project Idea Guidance

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
