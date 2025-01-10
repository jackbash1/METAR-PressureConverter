# METAR and Pressure Converter
Code &amp; Documentation for the METAR and Pressure Converter Application. Created by Jack Bashford. GitHub: @jackbash1

[![codecov](https://codecov.io/gh/jackbash1/PressureConverter/branch/feature%2Funit-testing/graph/badge.svg?token=QPCR8QED5I)](https://codecov.io/gh/jackbash1/PressureConverter)

## Context

*PLACE SCREENSHOT OF FINAL APP HERE*


This application allows users to input a numeric floating value, and find the conversion from Hectopascals (hPa) -> Inches of Mercury (inHg), or vice versa, inHg -> hPa. These metrics are Atmospheric Pressure units, with Hectopascals being the commonly used unit to measure it in the UK and Europe. Inches of Mercury are commonly used in the United States for the same purpose. Within Aviation, this is specifically important, as Pilots rely on knowing the different pressure values wherever they are flying, so their instruments read the correct height above sea level. Consistency across aircraft is vital for safety and collision avoidance.

In an airline setting, this app provides consistent and up to date conversions between hPa and inHg. Different airlines often use different pressure metrics, which is why knowing the equivalent value is key. Pilots may use this when preparing for their flights, or Flight Planning may use it to understand the differences aceoss charts. Whilst this can be worked manually, it will not provide the level of accuracy that this app provides. 

## Features
The app contains the following features:
* The user is able to input the value they want to convert.
* The user is able to select the units that the outputted value will be in.
* To convert the value, there is a clickable button to carry out the conversion and display it back to the user underneath, alongside the original value.

## How to use the App

![App Demo](https://github.com/user-attachments/assets/49afee50-bf81-4796-9979-0c21e469b79d)


## Design and [Figma Prototype](https://www.figma.com/proto/SKUixSRww6lVhCeuEjPoJe/Design-Prototype?node-id=46-2&t=UTFqlbxfzRfOGJ9T-1)

To design my application, I used Figma, which is an online tool that allows design and development of products, collaboratively across teams. In the case of this project, it allowed me to create prototype designs of the application, to scale with screen sizes. It offers users interactivity, which can help to detect issues with the design. 

I had 2 Wireframe designs for Version 1.0 of the app, shown below, they offer the same functions, in a different aesthetic manner. To decide on the best design, I took onboard user feedback, recorded within a Google Form from my colleagues. This was as simple as showing the different designs, asking which was preferred, and ultimately any features that users would like to see. This allowed me to iteratively improve my designs, before concluding with the final design. 

![Wireframe Designs V1.0](https://github.com/user-attachments/assets/f4924cb3-930a-43ca-92bb-0e1e28ba676e)

I implemented Design One for Version 1.0 of the Pressure Converter as it users found the output clearer, with more of a modern feel. It also removes the confusion about being able to convert from inHg, which isn't clear in Design Two. The final prototype version is shown below attached as an animated GIF for convenience.

![Version 1.0 Prototype](https://github.com/user-attachments/assets/6d96fa34-8c83-4c23-9beb-5eeda790ab30)


Upon commencing Version 2.0 of this App, developing it further into the METAR retriever and Pressure Converter, I returned to Figma to develop more wireframe designs, focussing on EDIPT (Empathize, Define, Ideate, Prototype and Test). This process of design thinking is especially important when making changes to an app that had positive feedback from users. I decided that due to this feedback, it was established that users like the current design, meaning that I did not want to alter the design where possible. From there, I could create a list of ideas that a user would benefit from:
* An input box for Airport ICAO codes.
* An option to output the METAR (Weather information) for that Airport.
* Ability to copy the Pressure (QNH) across to the Pressure Converter.
* A decoded version of the METAR information.

What does the <i>intended</i> user want to see?
The intended users are Pilots and Flight Ops Planning. These users have a working understanding of METAR and can decode them in their heads, they do not need the decoded version, and this will reduce the space used. However, they will want to retrieve the METAR for any airport, output the METAR onto the screen and then copy the QNH across to the converter to note down quickly. With this in mind, I designed a further two wireframe designs that included all of these features, aiming to keep the style of the app the same as the first version. The main difference between the designs is the "Copy QNH" button. Crucially, these designs are very similar, and the functionality remains the same, the second however, with less context to what the button carries out. 

![Wireframe Designs V1.0](https://github.com/user-attachments/assets/6d711579-f50e-47f7-875b-96b43bd28f37)

Ulitmately, Design One was chosen for the final design. The reason this design won was the ease of access for all users. The copy symbol is widely adopted in the Technology space, but for those unfamiliar, this button can be misleading. The simplicity of the text button is unmatched and therefore is a better design for the use case. Compared to Version 1.0, Version 2.0 extends the container horizontally, adding a section for the METAR retrieval, allowing the user to input an ICAO (Airport) code, output the METAR, and copy the QNH directly into the Pressure Converter with the correct units selected. As above, the Prototype is attached below as a GIF for convenience.

![Wireframe Designs V2.0](https://github.com/user-attachments/assets/7af719f9-0fa4-45c4-a4c0-930595631106)

The designs overall match the tools created, with slightly differing colours, as decided during the development process. It offered an insight into how the tool should work, before it was coded in both instances. The prototypes allowed me to use Test Driven Development when coding the app and its tests.

## Project Management

![image](https://github.com/user-attachments/assets/52ad450f-d476-4d08-8c43-3b1c14aa8474)

Through this project, I have utilised GitHub Projects as the tool to manage my workflow and ensure I can adopt an Agile Way of Working. Project Management uses knowledge, skills and techniques to deliver something valuable, which in this is the app that I have created. Agile was the best way to work on this project as it offers an iterative approach to working that splits tasks into manageable "sprints". This also accounts for the variable nature of the tool, which could encounter bugs and require fixes on a interchangeable basis. Due to this way of working, I decided that Agile was better than a Waterfall approach. 

I worked in small sprints that each had a set of aims and tickets to accomplish before reviewing the progress in that sprint, and making changes ready for the next sprint. This is easier in a group of people, as there is limited room for reviewers and external reviewers that can help evaluate the sprint progress. During this time, I kept my tickets (issues) within the project Kanban board, shown above. This allowed me to break the project development into chunks, that could be assigned to a specific label, branch and pull request. It also helps for visualising the work that had to be complete, adding checklists within each ticket that could track my progress. There are 5 sections on the board, **Backlog, Ready, In Progress, In Review & Done**. At the start of each sprint, tickets within the Backlog are prioritised, and moved to Ready when included in that current sprint, and then moved as required throughout the sprint.

To ensure that I was maintaining Agile methodologies, each branch that I created also followed the naming convention of feature/fix/documentation / issue-name. This method prevented scope creep, as I could see the issue that I was working on throughout the process. Likewise, when change did occur, it was added to the sprint where required. Utilising this Agile methodology allows for changes, unlike a traditional Waterfall chart, which will restrict changes until completion, extending the development time. When I changed my design, based on UI feedback, I assessed the time scale and overall impact on the sprint, and decided it was manageable within the current sprint. If I was in a team environment, I would ensure that Scrum meetings are incorporated throughout the sprints, allowing each member of the team to share blockers with progress, and for the Scrum Master to update on the sprint and project progress, including change requests.






