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

As a result, Hycor just recently gave up on this tool and reverted back to using pen and paper. Remember that for each test run it is not uncommon to log details about over 40 materials/reagents, so you can see how tedious and tiredsome this can get!

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

## Client Side

![alt text](https://i.imgur.com/xTYM3Xh.jpg?1)
![alt text](https://i.imgur.com/qTjor47.jpg)
