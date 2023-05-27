import express, { Request, Response } from "express";
// import * as dotenv from "dotenv";
import { TodoistApi } from "@doist/todoist-api-typescript";

const port = 3000;

//dotenv.config();

const app = express();

app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  const api = new TodoistApi("177d3de82208c3098076935a7ea33eedc1be75a5");
  api
    .addTask({ content: "Buy Milk", projectId: "2078702594" })
    .then((task) => console.log(task))
    .catch((error) => console.log(error));
});

// api
//   .getProjects()
//   .then((projects) => {
//     console.log(projects);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
