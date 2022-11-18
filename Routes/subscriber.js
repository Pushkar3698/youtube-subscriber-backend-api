const express = require("express");
const { default: mongoose } = require("mongoose");
// importing helper function
const refactorTillNames = require("../helper");

// this is the name of the route we will be using
const subscriberRouter = express.Router();

// importing the subscriber model
const subscriberModel = require("../models/subscriberModel");

// if teh pasth by the client is not mentioned then it will be automatically redirected to the subscribers path
subscriberRouter.get("/", (req, res, next) => {
  res.redirect("/subscribers");
});

// this is the get request for /subscriber which is returning us a full array of subscriber objects
subscriberRouter.get("/subscribers", (req, res, next) => {
  // we are finding out all the subscriber objects from the mongodb database with the help of mongoose and its functions and if we are not able to get it we are sending an error message as a response

  subscriberModel
    .find()
    .then((subscribers) => res.send(subscribers))
    .catch((err) =>
      res.send({ error: `Not able to find the the data Please try again!` })
    );
});

// this is the get rout for /subscribers/names which returns us all the subscriber data from the database
subscriberRouter.get("/subscribers/names", (req, res, next) => {
  // after getting all the data from the db we are using our helper function created and pass the data fetched from the db and the helper function returns a new refactored array which we need to send as response. If there is an error then we are sending an error message indeed.
  subscriberModel
    .find()
    .then((subscribers) => res.send(refactorTillNames(subscribers)))
    .catch((err) =>
      res.send({ error: `Not able to find the the data Please try again!` })
    );
});

// this is the route for /subscribers/:id which will return a specified object with that id only
subscriberRouter.get("/subscribers/:id", (req, res, next) => {
  // extracting the id from the url with the help of parameters
  const { id } = req.params;

  // finding the subscriber object from the db with the id extracted with the help of method provided to us by mongoose and returning the final object if we get an error then we are returning an error object with the status 400.
  subscriberModel
    .findById(id)
    .then((data) => res.send(data))
    .catch((err) => {
      if (err) {
        res
          .status(400)
          .send({ message: `the folllowing id ${id} does not match` });
      }
    });
});

// exporting the route created to handle all the requests coming
module.exports = subscriberRouter;
