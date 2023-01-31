import { createServer } from "miragejs";

export function setupServer() {
  let server = createServer();

  server.namespace = "api";

  server.get("/todos", {
    todos: [
      { id: 1, task: "Learn React", priority: "High", completed: true },
      { id: 2, task: "Learn Express", priority: "High", completed: false },
      { id: 3, task: "Learn Redux", priority: "Medium", completed: true },
      { id: 4, task: "Learn Firebase", priority: "Medium", completed: false },
      { id: 5, task: "Learn Networking", priority: "Low", completed: false },
    ],
  });
}
