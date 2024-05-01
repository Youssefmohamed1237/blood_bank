const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db = process.env.DATA_BASE;
mongoose
  .connect(db)
  .then((con) => {
    console.log("db connect succefuly..");
  })
  .catch(() => {
    console.log("connectionn faild");
  });

app.listen(4000, () => {
  console.log(`app running on port 4000`);
});
