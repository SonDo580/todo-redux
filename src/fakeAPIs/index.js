import { createServer, Model } from "miragejs";

export function setupServer() {
  createServer({
    models: {
      todo: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/todos", (schema) => schema.todos.all());

      this.post("/todos", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        schema.todos.create(payload);
      });

      this.put("/todo/:id", (schema, request) => {
        const currentTodo = schema.find(request.params.id);
        currentTodo.completed = !currentTodo.completed;
      });
    },
  });
}
