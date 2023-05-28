import * as dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import { TodoistApi } from "@doist/todoist-api-typescript";
import cron from "node-cron";

declare const process: {
  env: {
    TODOIST_API_TOKEN: string;
  };
};

const port = 3000;

const app = express();
const api = new TodoistApi(process.env.TODOIST_API_TOKEN);

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
