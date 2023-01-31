import { createServer, Model } from "miragejs";

export function setupServer() {
  createServer({
    models: {
      todo: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/todos", (schema) => schema.todos.all());
    },
  });
}
