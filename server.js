const express = require("express");
require('dotenv').config()
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://ethan:mongodbpassword%401@cluster0.b0pdf.mongodb.net/notes-db"
);
app.use("/", require("./routes/noteRoute"));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.listen(process.env.PORT || 3001, () => {
  console.log("express listening");
});
