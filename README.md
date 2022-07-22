Full readme can be found here: https://github.com/desperate-housewares/app-readme

# Installation


To begin installing this app please clone the app into a folder from github. [link](https://github.com/desperate-housewares/dh-frontend-cra)

## Steps:

1. Open the terminal
2. CD into the dh-frontend-cra directory after cloning it as above. 
3. Type into the terminal 'npm install' and wait for it to complete the installation.
4. Type into the terminal 'npm start' to start the application on your local machine.

Note: If you run into files not found when you have started the server but the components are present make sure that the directory name for the component matches the import statement. This should not effect your build if you deploy the website online using a platform such as netlify.

### Testing
To run the tests run `npm test` and follow the prompts.

# Dependencies

In this project the front end makes use of the following dependencies and libraries:

1. [React](https://reactjs.org/)
   1. A javascript framework used to build user interfaces for web application.
2. [MUI](https://mui.com/)
   1. A component based library that includes ready made components for use react projects. 
   2. In addition to MUI we have also made use of some of their icons.
3. [Axios](https://github.com/axios/axios#features)
   1. A promise based HTTP client for the browser which used to make HTTP requests easier. 
4. [Day.JS](https://day.js.org/)
   1. A small 2kB extension that enables parsing and manipulating dates and times in the browser easier and faster.
5. [Tailwind]

# Project Management

Trello Board: [link](https://trello.com/invite/b/BzgS0oZt/641fd4be604d47fca55fb75d6d5855c0/team-project)

For our project we decided to allocate tasks based on the teams strengths. This lead to Gisele primarily working in the backend, Nik on both ends and Ben on the front end. In addition to this we all attended daily stand up (excl weekends) where we discussed what we were working on and the cards we would be trying to finish. Once assigned a card in our daily standup we would write  our checklist fo that card and input a dude date to track our progress.In addition to this you will notice that we limited our scope significantly so we could prioritize our MVP product. The difficulty levels on each card was also displayed on our Trello Board using labels. To see our daily progress look at our Trello Board where we logged daily screenshots of our Trello Board, our minutes and our stand ups. 

We did snapshot testing for some components on the frontend and unit testing and integration testing for components on the backed. In addition to this we also did user flow manual tests. These can be found here: [userFlowTests](https://docs.google.com/spreadsheets/d/1cAdR8FZKEPNZPPeULztCVAeeWFnUP69NutmQy8QTe40/edit?usp=sharing)

Lastly, for source control the team made use of git and git branches to organize the development of features for the app. A copy of our git-log can be found here: [commits](https://github.com/desperate-housewares/dh-backend/commits/main)
