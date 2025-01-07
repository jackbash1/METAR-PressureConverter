# Atmopsheric Pressure Converter
Code &amp; Documentation for the Pressure Converter Application. Created by Jack Bashford. GitHub: @jackbash1

[![codecov](https://codecov.io/gh/jackbash1/PressureConverter/branch/feature%2Funit-testing/graph/badge.svg?token=QPCR8QED5I)](https://codecov.io/gh/jackbash1/PressureConverter)

## Context

![image](https://github.com/user-attachments/assets/a5716e1f-6cb1-4000-a430-ff9ec8cfd6e5)


This application allows users to input a numeric floating value, and find the conversion from Hectopascals (hPa) -> Inches of Mercury (inHg), or vice versa, inHg -> hPa. These metrics are Atmospheric Pressure units, with Hectopascals being the commonly used unit to measure it in the UK and Europe. Inches of Mercury are commonly used in the United States for the same purpose. Within Aviation, this is specifically important, as Pilots rely on knowing the different pressure values wherever they are flying, so their instruments read the correct height above sea level. Consistency across aircraft is vital for safety and collision avoidance.

In an airline setting, this app provides consistent and up to date conversions between hPa and inHg. Different airlines often use different pressure metrics, which is why knowing the equivalent value is key. Pilots may use this when preparing for their flights, or Flight Planning may use it to understand the differences aceoss charts. Whilst this can be worked manually, it will not provide the level of accuracy that this app provides. 

## Features
The app contains the following features:
* The user is able to input the value they want to convert.
* The user is able to select the units that the outputted value will be in.
* To convert the value, there is a clickable button to carry out the conversion and display it back to the user underneath, alongside the original value.

## How to use the App

![Alt Text](https://github.com/user-attachments/assets/e245daff-2358-4c81-ba1b-f6b595b0090d)

## Design and [Figma Prototype](https://www.figma.com/proto/SKUixSRww6lVhCeuEjPoJe/Design-Prototype?node-id=46-2&t=UTFqlbxfzRfOGJ9T-1)

To design my application, I used Figma, which is an online tool that allows design and development of products, collaboratively across teams. In the case of this project, it allowed me to create prototype designs of the application, to scale with screen sizes. It offers users interactivity, which can help to detect issues with the design. 

I had 2 iterations of the initial Version 1.0 wireframe design, taking onboard user feedback, recorded within a Google Form. This was as simple as showing the different designs, asking which was preferred, and ultimately any features that users would like to see. This allowed me to iteratively improve my designs, before concluding with this first design. I implemented Version 1.0 for the Pressure Converter shown below alongside the working prototype, which is attached as animated GIF for convenience. 

![Version 1.0 Design](https://github.com/user-attachments/assets/e2b4bf7f-3f69-4fd8-be19-d9e30382e7d0)

Upon commencing Version 2.0 of this App, developing it further into the METAR retriever and Pressure Converter, I returned to Figma to develop more wireframe designs, focussing on EDIPT (Empathize, Define, Ideate, Prototype and Test). This process of design thinking is especially important when making changes to an app that had positive feedback from users. I decided that due to this feedback, it was established that users like the current design, meaning that I did not want to alter the design where possible. From there, I could create a list of ideas that a user would benefit from:
* An input box for Airport ICAO codes.
* An option to output the METAR (Weather information) for that Airport.
* Ability to copy the Pressure (QNH) across to the Pressure Converter.
* A decoded version of the METAR information.

What does the <i>intended</i> user want to see?
The intended users are Pilots and Flight Ops Planning. These users have a working understanding of METAR and can decode them in their heads, they do not need the decoded version, and this will reduce the space used. However, they will want to retrieve the METAR for any airport, output the METAR onto the screen and then copy the QNH across to the converter to note down quickly. With this in mind, I built a prototype that included all of these features, aiming to keep the style of the app the same. 

Version 2.0 extends the container horizontally, adding a section for the METAR retrieval, allowing the user to input an ICAO code, output the METAR, and copy the QNH directly into the Pressure Converter with the correct units selected. Similarly, the Prototype is attached below as a GIF for convenience.


![Version 2.0 Design](https://github.com/user-attachments/assets/9afea59d-ab4d-4516-8896-7a2931e0255a)



The design overall matches the tool created, with differing colours, decided during the development process. It offered an insight into how the tool should work, before it was coded in both instances. The prototypes allowed me to use Test Driven Development when coding the app and its tests.

## Project Management

![image](https://github.com/user-attachments/assets/52ad450f-d476-4d08-8c43-3b1c14aa8474)

Through this project, I have utilised GitHub Projects as the tool to manage my workflow and ensure I can adopt an Agile Way of Working. Project Management uses knowledge, skills and techniques to deliver something valuable, which in this is the app that I have created. Agile was the best way to work on this project as it offers an iterative approach to working that splits tasks into manageable "sprints". This also accounts for the variable nature of the tool, which could encounter bugs and require fixes on a interchangeable basis. Due to this way of working, I decided that Agile was better than a Waterfall approach. 

I worked in small sprints that each had a set of aims and tickets to accomplish before reviewing the progress in that sprint, and making changes ready for the next sprint. This is easier in a group of people, as there is limited room for reviewers and external reviewers that can help evaluate the sprint progress. During this time, I kept my tickets (issues) within the project Kanban board, shown above. This allowed me to break the project development into chunks, that could be assigned to a specific label, branch and pull request. It also helps for visualising the work that had to be complete, adding checklists within each ticket that could track my progress. There are 5 sections on the board, **Backlog, Ready, In Progress, In Review & Done**. At the start of each sprint, tickets within the Backlog are prioritised, and moved to Ready when included in that current sprint, and then moved as required throughout the sprint.

To ensure that I was maintaining Agile methodologies, each branch that I created also followed the naming convention of feature/fix/documentation / issue-name. This method prevented scope creep, as I could see the issue that I was working on throughout the process. Likewise, when change did occur, it was added to the sprint where required. Utilising this Agile methodology allows for changes, unlike a traditional Waterfall chart, which will restrict changes until completion, extending the development time. When I changed my design, based on UI feedback, I assessed the time scale and overall impact on the sprint, and decided it was manageable within the current sprint. If I was in a team environment, I would ensure that Scrum meetings are incorporated throughout the sprints, allowing each member of the team to share blockers with progress, and for the Scrum Master to update on the sprint and project progress, including change requests.






