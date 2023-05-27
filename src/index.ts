import express, { Request, Response } from "express";
// import * as dotenv from "dotenv";
import { TodoistApi } from "@doist/todoist-api-typescript";
import cron from "node-cron";

const port = 3000;

//dotenv.config();

const app = express();
const api = new TodoistApi("177d3de82208c3098076935a7ea33eedc1be75a5");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

cron.schedule("*/1 * * * *", () => {
  api
    .addTask({ content: "Buy Milk", projectId: "2078702594" })
    .then((task) => console.log(task))
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// api
//   .getProjects()
//   .then((projects) => {
//     console.log(projects);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
