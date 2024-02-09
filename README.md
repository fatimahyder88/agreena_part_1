# Agreena Test

This project consists of testing the **React Shopping Cart** website, as specified in the test description.

- Added 4 specs to verify test cases for the **React Shopping Cart** website

---

## Future Improvements

In the future, I may recommend the following improvements in this project,
- I would add data-tests as selectors, instead of taking the classes as selectors as that would be best practice. This point is more valid for an in-house project, where we have the flexibility to ask the Front-End developer to add these data-test in their Front-End project.

---

## Project Setup & Execution

Please go through the following steps to start the project.

### 1. Pre-Requirements
The project was created on **`MacOS`** having following javascript runtime system and browser version.

- Node.js `v18.13.0`
- npm `v8.19.3`
- Cypress `v10.11.0`
- Electron `v106`


### 2. Initialisation

You need to run `npm i` in root directory of the folder to install all the required libraries for the project. 


### 3. Execution

You need to start the frontend project first as that is configured against this cypress project. Using terminal, go inside the `frontend` folder and first run `npm i` to instal the required libraries and then run `npm start` to start the frontend server. It should start on `http://localhost:3000`. The cypress project is configured against this URL and port number. If this changes then you may need to change the base URL in `cypress.config.js` at line 11.

Open a new terminal in the base directory on this project and please run `npm run cy:open` in root directory to start the cypress project. This will open the Cypess control panel in **Electron**. From here you can click on any of the test to start the execution of that test. You can also run `npx cypress open --e2e`, if you want to use another browser.

---