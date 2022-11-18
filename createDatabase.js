const mongoose = require("mongoose");
const subscriberModel = require("./models/subscriberModel");
const data = require("./data");

// Connect to DATABASE
const DATABASE_URL = `mongodb+srv://Pushkar3698:Pushi1234@cluster0.9fepqww.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log(connection)
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
