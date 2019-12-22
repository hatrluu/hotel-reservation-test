# Instructions
## Prerequisites
[NodeJS](https://nodejs.org)  
[MongoDB](https://www.mongodb.com/)

*Both server and application must be running at the same time*  
*Each server need their own terminal*
## To start the server
cd server  
-**If node_modules doesn't exist**  
npm install && npm start  
-**Else**  
npm start  

## To start the react application
cd client  
-**If node_modules doesn't exist**  
npm install && npm start  
-**Else**  
npm start  

---
Project Description
>This is a full-stack challenge that should demonstrate knowledge and experience utilizing GraphQL Apollo,> ReactJS, TypeScript and Node.js.  
>Create an app that simulates a basic hotel reservations system. Use node 8 or newer.
>A reservation should have the following fields:
>- id
>- guest name
>- hotel name
>- arrival date
>- departure date
>
>The application should support:
>- a query for retrieving all reservations
>- a query for retrieving a reservation by ID
>- a mutation for creating a reservation Reservations should be persisted to a NoSQL data store.