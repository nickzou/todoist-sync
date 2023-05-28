//Access to environment variables
import * as dotenv from "dotenv";
dotenv.config();

//Google APIs
import { google } from "googleapis";

//Express
import express, { Request, Response } from "express";

//Todoist API
import { TodoistApi } from "@doist/todoist-api-typescript";

//Other stuff I need
import cron from "node-cron";
//import fetch from "node-fetch";

//declaring environment variables so TypeScript doesn't yell at me (or crash the app)
declare const process: {
  env: {
    TODOIST_API_TOKEN: string;
    GOOGLE_API_CLIENT_ID: string;
    GOOGLE_API_CLIENT_SECRET: string;
    GOOGLE_API_REDIRECT_URI: string;
  };
};

//declaring port
const port = 3000;

//Starting stuff
const app = express();
const { OAuth2 } = google.auth;
const TodoistAPI = new TodoistApi(process.env.TODOIST_API_TOKEN);

const oauth2Client = new OAuth2(
  process.env.GOOGLE_API_CLIENT_ID,
  process.env.GOOGLE_API_CLIENT_SECRET,
  process.env.GOOGLE_API_REDIRECT_URI
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// cron.schedule("*/1 * * * *", () => {
//   api
//     .addTask({ content: "Buy Milk", projectId: "2078702594" })
//     .then((task) => console.log(task))
//     .catch((error) => console.log(error));
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
