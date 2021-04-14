// Load the Express package as a module
const express = require("express");
// Access the exported service
const app = express();
// Return the index.html for requests to the root URL ("/")
app.get("/", (request, response) => { 
   //response.send("Hello from Express!");
response.sendFile(`${__dirname}/views/index.html`);
});
app.get("/ex1", (request, response) => { 
 //response.send("Hello from Express!");
 response.sendFile(`${__dirname}/views/ex1.html`);
});
app.get("/ex1", (request, response) => { 
  //response.send("Hello from Express!");
  response.sendFile(`${__dirname}/views/ex2.html`);
 });
 app.get("/ex1", (request, response) => { 
  //response.send("Hello from Express!");
  response.sendFile(`${__dirname}/views/ex3.html`);
 }); 
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1", upload.array(), (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  response.send(`Hello ${name}, your email: ${email}`);
});

app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/ex2", upload.array(), (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  response.send();
});

app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/ex3", upload.array(), (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  response.send();
});
