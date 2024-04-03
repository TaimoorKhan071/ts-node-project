import express from "express";
import {
  getTodoById,
  getTodos,
  deleteTodo,
} from "../controllers/todo.controller";

const todoRouter = express.Router();

todoRouter.get("/api/v1/todos/:id", getTodoById);
todoRouter.get("/api/v1/todos", getTodos);
todoRouter.delete("/api/v1/todos/delete/:id", deleteTodo);

export default todoRouter;

// todoRouter.post(    "/api/v1/todos/add");
// todoRouter.put(     "/api/v1/todos/update/:id");
