# METAR and Pressure Converter
Code &amp; Documentation for the METAR and Pressure Converter Application. Created by Jack Bashford. GitHub: @jackbash1

[![codecov](https://codecov.io/gh/jackbash1/PressureConverter/branch/feature%2Funit-testing/graph/badge.svg?token=QPCR8QED5I)](https://codecov.io/gh/jackbash1/PressureConverter)

## Context

*PLACE SCREENSHOT OF FINAL APP HERE*

Within an airline, there are lots of people that work with Atmospheric Pressure daily. Atmospheric Pressure is Air Pressure that is within the Earth's Atmosphere, and it affects the weather depending on high or low pressure. More importantly, Pressure directly impacts Aviation, and it can cause variations in lift, drag and thrust, alongside the instruments that measure altitude. It is crucial to understand the pressure along the route that is being flown, and due to differences across the world, the units are different. The main units are Hectopascals in the UK, and Inches of Mercury in the US, with the conversion being tricky to do mentally.

Therefore, this project aims to solve the issues that arise from this conversion that has to happen frequently. The main users that have to convert these numbers within the business are Pilots (the Pressure is referred to as the QNH), during their initial briefing phase, Flight Operations and Route Management. They require the ability to solely convert between Hectopascals (hPa) and Inches of Mercury (inHg), whilst also being able to retrieve the METAR for given airports based on the ICAO code. An ICAO code is an identifier for an Airport. For convenience, there needs to be an ability to automate moving the QNH (Pressure Value) from the METAR directly to the Converter, so there is a button to extract this.


## Features
The app contains the following features:
* The user is able to input a value they want to convert manually.
* The user is able to select the units they want to convert to.
* To convert the value, there is a clickable button to carry out the conversion and display it back to the user underneath, alongside the original value.
* An input field for ICAO codes which will output the recent METAR for that Airport.
* A copy button that extracts the Pressure from the METAR, and places it into the Converter, with the correct units selected in the dropdown.

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

![Project Kanban Board](https://github.com/user-attachments/assets/95f6c47f-8a78-4edf-a1e5-709633cfcecd)

Through this project, I have utilised GitHub Projects as the tool to manage my workflow and ensure I can adopt an Agile Way of Working. Project Management uses knowledge, skills and techniques to deliver something valuable, which in this is the app that I have created. Agile was the best way to work on this project as it offers an iterative approach to working that splits tasks into manageable "sprints". This also accounts for the variable nature of the tool, which could encounter bugs and require fixes on a interchangeable basis. Due to this way of working, I decided that Agile was better than a Waterfall approach. 

I worked in small sprints that each had a set of aims and tickets to accomplish before reviewing the progress in that sprint, and making changes ready for the next sprint. This is easier in a group of people, as there is limited room for reviewers and external reviewers that can help evaluate the sprint progress. During this time, I kept my tickets (issues) within the project Kanban board, shown above. This allowed me to break the project development into chunks, that could be assigned to a specific label, branch and pull request. It also helps for visualising the work that had to be complete, adding checklists within each ticket that could track my progress. There are 5 sections on the board, **Backlog, Ready, In Progress, In Review & Done**. At the start of each sprint, tickets within the Backlog are prioritised, and moved to Ready when included in that current sprint. From there, the ticket is worked on, and progress determined by the story points (sub-tasks within the ticket). The ticket will be moved to In-Review to allow for the intended outcome of the ticket to be checked, removing the chance of human error. The Done column is reserved for the tickets that are complete, and should also have a linked closed Pull Request. 

To ensure that I was maintaining Agile methodologies, each branch that I created also followed the naming convention of feature/fix/documentation / issue-name. This method prevented scope creep, as I could see the issue that I was working on throughout the process of comitting to the branch. Likewise, when change did occur within the scope, perhaps due to external feedback, it was added to the sprint and prioritised. Utilising this Agile methodology allows for changes, unlike a traditional Waterfall approach, which will restrict changes until completion, extending the development time. When I changed my MVP for Version 1.0 to develop Version 2.0, I first assessed the time scale and overall impact on the progress. This change warranted a new sprint, dedicated to the changes that would be made for the second version. If I was in a team environment, I would ensure that Scrum meetings are incorporated throughout the sprints, allowing each member of the team to share blockers with progress, and for the Scrum Master to update on the sprint and project progress, including change requests. Scrum meetings would also be able to gauge the progress of the sprint, viewing how each task is progressing through the stories. 

After the first Sprint, I conducted a Sprint Review, which allowed me to review my progress during the Sprint, and it would allow me to present my work to the key stakeholders who will be using this app. Having this review after the first sprint, allows for feedback on the MVP, and allows stakeholders to raise questions, highlight issues and also offer improvements for the following sprint. With this, we were able to tailor the second Sprint, focussing on implementing the design changes and functionality that the stakeholder requested, which was to include the METAR data and the ability to extract the pressure directly from it and into the Converter. If we were approaching the project using the Waterfall methodology, this feedback would have been recieved after the first project iteration, meaning more time would be spent implementing changes afterwards.






