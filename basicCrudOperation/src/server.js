
const connectDB = require("./config/db");
const app = require("./index");

app.listen(5000, async () => {
    try {
      await connectDB();
      console.log("listening port 5000");
    } catch (err) {
      console.log(err);
    }
  });