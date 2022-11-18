const express = require("express");
const app = express();
const subscriberRouter = require("./Routes/subscriber");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const DATABASE_URL = `mongodb+srv://Pushkar3698:Pushi1234@cluster0.9fepqww.mongodb.net/?retryWrites=true&w=majority`;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// getting all the routes from the routes folder and using them up in the app
app.use(subscriberRouter);

// connecting to the mongodb database with connection url provided by them and if once it is connected the server would be listening up and if there is an error it will logged onto the console
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("db-connected"))
  .then(() =>
    app.listen(port, () => console.log(`App listening on port ${port}!`))
  )
  .catch((err) => console.log(err));
