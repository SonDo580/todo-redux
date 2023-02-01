import { createServer, Model } from "miragejs";

const initialTodos = [
  { id: 1, task: "Learn React", priority: "High", completed: true },
  { id: 2, task: "Learn Express", priority: "High", completed: false },
  { id: 3, task: "Learn Redux", priority: "Medium", completed: true },
  { id: 4, task: "Learn Firebase", priority: "Medium", completed: false },
  { id: 5, task: "Learn Networking", priority: "Low", completed: false },
];

export function setupServer() {
  createServer({
    models: {
      todo: Model,
    },

    seeds(server) {
      initialTodos.forEach((todo) => server.create("todo", todo));
    },

    routes() {
      this.namespace = "api";

      this.get("/todos", (schema) => schema.todos.all());

      this.post("/todos", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.todos.create(payload);
      });

      this.put("/todo/:id", (schema, request) => {
        const currentTodo = schema.todos.find(request.params.id);
        return currentTodo.update({ completed: !currentTodo.completed });
      });
    },
  });
}
