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
        return schema.todos.create(payload);
      });
    },
  });
}
