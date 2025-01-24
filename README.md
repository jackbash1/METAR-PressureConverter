# METAR and Pressure Converter ☔
Code &amp; Documentation for SE Summative One: METAR and Pressure Converter Application. Created by Jack Bashford.

**User Experience Guide: Navigate to [Dropbox](https://www.dropbox.com/scl/fo/qbtjhu3ul2aayjuqo25ej/AI7YfA3HC6LX4Cl1TsXcJOg?rlkey=51idf8gihdhonccojtxzlqkls&st=t3vzjktv&dl=0).**

**Feedback [Form](https://forms.office.com/e/sxu6fXbSYm)**

[![codecov](https://codecov.io/gh/jackbash1/METAR-PressureConverter/graph/badge.svg?token=QPCR8QED5I)](https://codecov.io/gh/jackbash1/METAR-PressureConverter)

<details closed><summary>Introduction 🏫</summary>

## Purpose

![Final App](https://github.com/user-attachments/assets/654cba3b-4166-4622-9dd1-f85dea5d0836)

***Figure One**: Showing the App Layout*


Within an airline, there are lots of people that work with Atmospheric Pressure daily. Atmospheric Pressure is Air Pressure that is within the Earth's Atmosphere, and it affects the weather depending on high or low pressure. More importantly, Pressure directly impacts Aviation, and it can cause variations in lift, drag and thrust, alongside the instruments that measure altitude. It is crucial to understand the pressure along the route that is being flown, and due to differences across the world, the units are different. The main units are Hectopascals in the UK, and Inches of Mercury in the US, with the conversion being tricky to do mentally.

Therefore, this project aims to solve the issues that arise from this conversion that has to happen frequently. The main users that have to convert these numbers within the business are Pilots (the Pressure is referred to as the QNH), during their initial briefing phase, Flight Operations and Route Management. They require the ability to solely convert between Hectopascals (hPa) and Inches of Mercury (inHg), whilst also being able to retrieve the METAR for given airports based on the ICAO code. An ICAO code is an identifier for an Airport. For convenience, there needs to be an ability to automate moving the QNH (Pressure Value) from the METAR directly to the Converter, so there is a button to extract this.

</details>

<details closed>
<summary>User Documentation 📄</summary>

## User Documentation

## Features
The app contains the following features:
* The user is able to input a value they want to convert manually.
* The user is able to select the units they want to convert to.
* To convert the value, there is a clickable button to carry out the conversion and display it back to the user underneath, alongside the original value.
* An input field for ICAO codes which will output the recent METAR for that Airport.
* A copy button that extracts the Pressure from the METAR, and places it into the Converter, with the correct units selected in the dropdown.

## How to use the App

![App Demo](https://github.com/user-attachments/assets/8cf8d272-0192-4429-8b48-bee872d3c072)

***Figure Two**: Animated GIF showing a short Demo of the App working. It covers all buttons and possibilities for use. You can find the full version in the [Dropbox Folder](https://www.dropbox.com/scl/fo/qbtjhu3ul2aayjuqo25ej/AI7YfA3HC6LX4Cl1TsXcJOg?rlkey=51idf8gihdhonccojtxzlqkls&st=t3vzjktv&dl=0).*

</details>

<details closed>
<summary>Technical Documentation 🧑‍💻</summary>

## Technical Documentation

To execute the files, you require Node and npm. Follow the below steps to ensure that you can execute the files.

### 1. Ensure node and npm are installed by running the following commands in your terminal:

```sh
node -v
```
```sh
npm -v
```
If they are not installed, follow the steps on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 2. Afterwards, clone this repo:

```sh
git clone https://github.com/jackbash1/METAR-PressureConverter.git
```

## Running all tests

### 3. Before running any code below, make sure npm is installed in the terminal.

```sh
npm install
```

### 4. To run the unit tests for the app, run the following command:

```sh
npm test
```
This runs the Unit Tests within the app.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 5. To view full tests and code coverage for the code:

```sh
npm test -- --coverage --watchAll=false
```
To change the API key, navigate to Line 87 of index.html and alter the key:

```sh
const apiKey = 'KeyGoesHere'; // API Key to call METAR data
```

## Technical Documentation

### Technical Stack

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Project Management

* [GitHub Projects](https://github.com/users/jackbash1/projects/2/views/1)

### Product Design

* [Figma for Designs and Prototyping](https://www.figma.com/proto/SKUixSRww6lVhCeuEjPoJe/Design-Prototype?node-id=46-2&t=UTFqlbxfzRfOGJ9T-1)

### Files to run the App

* index.html
* script.js
* styles.css

### Files used for Testing

* script.test.js
* package.json

### Other Tools

* [Microsoft Forms](https://forms.office.com/Pages/DesignPageV2.aspx)

### Additional Sites used

* Codecov to automatically track Code Coverage from Unit Tesing: [https://about.codecov.io/](https://about.codecov.io/)
* API Website that provides free live METAR Data: [https://info.avwx.rest/](https://info.avwx.rest/)
</details>

<details closed>
<summary>Design 🛠️</summary>

## Design Stage and [Prototyping](https://www.figma.com/proto/SKUixSRww6lVhCeuEjPoJe/Design-Prototype?node-id=46-2&t=UTFqlbxfzRfOGJ9T-1)

### User Personas and Empathy Map

User Personas were collated based on personal understanding of the Job Roles, and asking those with experience in those fields. This allowed me to form a picture of the roles they work, the traits they possess, and also the Painpoints and Needs from their perspectives. With this information, we can better inform the design, and features of the app.

![User Personas](https://github.com/user-attachments/assets/c2b02fb4-8340-454b-af68-a2a363130fd3)

***Figure Three**: Showing the User Personas for the App, covering important details about the target demographic users. Access [here](https://www.figma.com/design/O7Xz6tJLqJmPbZ46BMNcvk/Designs?node-id=14-2&p=f&t=ueyiR0hgBMPoCN71-0).*

An Empathy Map was developed before the intial designing of the app took place, it allowed me to understand how our users feel, and experience the emotions that they feel on a day to day basis. By empathising with my end users, I gain a better understanding of the requirements for the app.

![Empathy Map](https://github.com/user-attachments/assets/5efb7a4d-58fe-4bf6-a789-cba5ff1e7ee1)

***Figure Four**: Shows the Empathy Map based on the User Personas, highlighting key aspects of their work, and the link to this App. Access [here](https://www.figma.com/design/O7Xz6tJLqJmPbZ46BMNcvk/Designs?node-id=27-49&p=f&t=ueyiR0hgBMPoCN71-0).*

I had 2 Wireframe designs for Version 1.0 of the app, shown below, they offer the same functions, in a different aesthetic manner. To decide on the best design, I took onboard user feedback, recorded within a [Google Form](https://forms.office.com/e/jnREighNZ9) from my colleagues and the end users. This was simple showing the different designs, asking which was preferred, and ultimately any features that users would like to see in that design.

![Wireframe Designs V1.0](https://github.com/user-attachments/assets/f4924cb3-930a-43ca-92bb-0e1e28ba676e)

***Figure Five**: This shows the Wireframe Designs for the first Version of the app which was produced in Sprint One. Access [here](https://www.figma.com/design/O7Xz6tJLqJmPbZ46BMNcvk/Designs?node-id=0-1&p=f&t=ueyiR0hgBMPoCN71-0).*

I implemented Design One for the Pressure Converter as it users found the output clearer, with more of a modern feel. The final prototype version is shown below attached as an animated GIF for convenience.

![Version 1.0 Prototype](https://github.com/user-attachments/assets/6d96fa34-8c83-4c23-9beb-5eeda790ab30)

***Figure Six**: This shows the Figma Prototpye developed based on the selected Wireframe Design. This uses a series of preset routes to determine what the App would look like. Access [here](https://www.figma.com/proto/SKUixSRww6lVhCeuEjPoJe/Design-Prototype?node-id=4-3&p=f&t=lkv79lfilw9Fb1iB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3).*

Upon commencing Sprint Two, developing it further into the METAR retriever and Pressure Converter, I returned to Figma to develop more wireframe designs, focussing on EDIPT (Empathize, Define, Ideate, Prototype and Test). This process of design thinking is especially important when making changes to an app that had positive feedback from users. I decided that due to previous feedback, it was established that users like the current design, meaning that I did not want to alter the design where possible. From there, I could use my Empathy Map to create a list of ideas that a user would benefit from.

![Wireframe Designs V2.0](https://github.com/user-attachments/assets/6d711579-f50e-47f7-875b-96b43bd28f37)

***Figure Seven**: In a similar way to Figure Five, for Sprint Two, further Wireframe Designs were created to inform the stakeholders on possible options for the App. Access [here](https://www.figma.com/design/O7Xz6tJLqJmPbZ46BMNcvk/Designs?node-id=1-37&p=f&t=ueyiR0hgBMPoCN71-0).*

Ultimately, Design One was chosen for the final design. The copy symbol is widely adopted in the Technology space, but for those unfamiliar, this button can be misleading. The simplicity of the text button is unmatched. Compared to Version 1.0, Version 2.0 extends the container horizontally, adding a section for the METAR retrieval, allowing the user to input an ICAO (Airport) code, output the METAR, and copy the QNH directly into the Pressure Converter with the correct units selected. As above, the Prototype is attached below as a GIF for convenience.

![Version V2.0 Prototype](https://github.com/user-attachments/assets/7af719f9-0fa4-45c4-a4c0-930595631106)

***Figure Eight**: With a chosen design, to assist the development process and inform the stakeholders, another prototype was developed in [Figma](https://www.figma.com/proto/SKUixSRww6lVhCeuEjPoJe/Design-Prototype?node-id=46-107&starting-point-node-id=46%3A107).*

</details>

<details closed>
<summary>Project Management 🧑‍💼</summary>
  
## Project Management Structure

![Project Kanban Board](https://github.com/user-attachments/assets/95f6c47f-8a78-4edf-a1e5-709633cfcecd)

***Figure Nine**: The Project Kanban board, on [GitHub Projects](https://github.com/users/jackbash1/projects/2/views/1). This allows different tickets (GitHub issues) to be tracked across the Software Development Lifecycle.*

I have utilised GitHub Projects as the tool to manage my workflow and ensure I can adopt an Agile Way of Working. Project Management uses knowledge, skills and techniques to deliver something valuable, which in this is the app that I have created. Agile was the best way to work on this project as it offers an iterative approach to working that splits tasks into manageable "sprints". This also accounts for the variable nature of the tool, which could encounter bugs and require fixes.

I worked in sprints that each had a set of aims and tickets to accomplish before reviewing the progress in that sprint, and making changes ready for the next sprint. During this time, I kept my tickets (issues) within the project Kanban board, shown in Figure Nine. This allowed me to break the project development into chunks, that could be assigned to a specific label, branch and pull request. There are 5 sections on the board, **Backlog, Ready, In Progress, In Review & Done**.

Each branch that I created followed the naming convention of feature/bug/documentation / issue-name. When change did occur within the scope, perhaps due to external feedback, it was added to the sprint and prioritised. When I updated my MVP for Version 1.0 to develop Version 2.0, I first assessed the time scale and overall impact on the progress. This change warranted a new sprint, dedicated to the changes that would be made for the second version. If I was in a team environment, I would ensure that Scrum meetings are incorporated throughout the sprints. These would also be able to gauge the progress of the sprint.

After the first Sprint, I conducted a Sprint Review, which allowed me to review my progress during the Sprint. Having this review after the first sprint, allows improvements for the following sprint. With this, we were able to tailor the second Sprint, focussing on implementing the design changes and functionality that the stakeholder requested.
</details>


<details closed>
<summary>Coding Journey 💻</summary>

</details>


<details closed>
<summary>Testing 🧪</summary>

## Test Driven Development

Test Driven Development (TDD) is an development process that involves writing a failing test, creating the passing function code, and then refactoring. It is an iterative process that ensures the final function passes all the tests.

First Failing Test:

![First Failing Test](https://github.com/user-attachments/assets/cba313ba-a2f4-4f60-9d5a-040a7b971e65)

***Figure Ten**: Showing a Failing Unit Test. The test failed because the the function code had not been written. The test was built with the function in mind, and therefore the function will be built around the tests.*

Code to Pass First Test:

![First Working Function](https://github.com/user-attachments/assets/259474b1-48f7-499c-acb3-6b2c4519596b)

***Figure Eleven**: This figure follows on from the Failing Test and shows the Passing Code for the failing test. Whilst initally simple, this will be scaled up with each failing test, to a point of automation for all possible values. This involves refactoring the code and creating IF statements.*

In doing this, I was creating the best code for the function, ensuring that is was passing each test, and would pass for all values of those tests. I had multiple iterations of this cycle, ensuring that the function was built to pass all of the required tests. You can find more examples of the changes and tests I created, [here](https://github.com/jackbash1/METAR-PressureConverter/pull/58/files).

## Continuous Integration

Continuous Integration (CI) is a Software method that involves tests that run after every commit. It ensures that new commits to the repository do not cause the tests to fail, as this could result in an exploit to the app. Using GitHub actions, for each commit to main, the testing suite will run automatically in the code, and will return a Green Tick on the home page, if they are all successful. Likewise, the code coverage can be printed through a website such as Codecov, which in the case of my testing, is 100%.

![Continuous Integration](https://github.com/user-attachments/assets/b6fcc8ce-d684-49aa-a089-fa5dfa42bdfd)

***Figure Tweleve**: Showing the output of CI in GitHub actions, it displays the test suite that has run, if they passed, and the coverage that the testing has. This shows the 100% test coverage that the app has, denoted by the badge at the top of the README. The actions can be found [here](https://github.com/jackbash1/METAR-PressureConverter/actions/workflows/node.js.yml).*

## Google Lighthouse Audit

Google Lightouse is an in-built function within Google Chrome, allowing easy quality assessments of webpages. With a series of audits, it assess our webpage, returning a rating from 0 - 100, with 100 being the top rated score.

The audits that are included are:

* Performance
* Accessibility
* Best Practices
* SEO (Search Engine Optimisation)

![Google Lighthouse Audit](https://github.com/user-attachments/assets/fcbced18-3126-4a03-b125-9cdd9694b105)

### Performance

The Audit has scored the page a Performance Score of 100, the top score. Whilst this highlights that the app is performing well, and the code is optimised, it is important to ensure it remains like this. One method that aims to keep this consistency is Continuous Integration within GitHub. This is mentioned within the README, and through this, any changes to the app are suitably tested to detect issues.

### Accessibility

Accessibility scored 91 on the Audit, which is a good score, with room for improvements. Namely, increasing the contrast of the text within my buttons. The reason that having a contrast is important is to enable users with reduced vision and those colourblind users to distinguish the writing. 

#### How to improve this?

In the next sprint, there should be a ticket to implement a colourblind setting, which will ensure a high contrast pairing of colours. This should also be extended to different types of colourblindness. 


</details>

<details closed>
<summary>Future Plans 🔐</summary>

</details>

<details closed>
<summary>Conclusion 🏁</summary>


</details>























