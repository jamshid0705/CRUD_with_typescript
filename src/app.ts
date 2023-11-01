import express from "express";
import userRoute from "./route/user";
import bodyParser from "body-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("ok");
  console.log('ok')
});
app.use("/users", userRoute);
// app.use('/api',userRoute)

export default app;
