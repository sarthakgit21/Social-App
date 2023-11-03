const mongoose = require("mongoose");
// console.log(MONGO_URI);
exports.connectDatabase = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/social-app")
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
