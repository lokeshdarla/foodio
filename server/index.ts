import dotenv from "dotenv"
import connectDB from "./src/models/db";
import { app } from "./src/app";


dotenv.config({
  path: './.env'
})



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  })
