import express from "express";
import {
  getTodoById,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller";
import { validator } from "../middlewares/validation.middleware";
import { createTodoSchema, updateTodoSchema } from "../schema/todo.schema";

const todoRouter = express.Router();

todoRouter.get("/api/v1/todos/:id", getTodoById);
todoRouter.get("/api/v1/todos", getTodos);
todoRouter.delete("/api/v1/todos/delete/:id", deleteTodo);
todoRouter.put(
  "/api/v1/todos/update/:id",
  validator(updateTodoSchema),
  updateTodo
);
todoRouter.post("/api/v1/todos/add", validator(createTodoSchema), createTodo);

export default todoRouter;
