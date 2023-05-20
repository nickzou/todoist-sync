import * as dotenv from "dotenv";
import { TodoistApi } from "@doist/todoist-api-typescript";

dotenv.config();

const api = new TodoistApi("177d3de82208c3098076935a7ea33eedc1be75a5");

api
  .getProjects()
  .then((projects) => {
    console.log(projects);
  })
  .catch((err) => {
    console.log(err);
  });

api
  .addTask({ content: "Buy Milk", projectId: "2078702594" })
  .then((task) => console.log(task))
  .catch((error) => console.log(error));
