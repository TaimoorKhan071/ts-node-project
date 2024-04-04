import express from "express";
import { getTodoById, getTodos, createTodo, updateTodo } from "../controllers/todo.controller";

const todoRouter = express.Router();

todoRouter.get("/api/v1/todos/:id", getTodoById);
todoRouter.get("/api/v1/todos", getTodos);
todoRouter.put("/api/v1/todos/update/:id", updateTodo);
todoRouter.post("/api/v1/todos/add", createTodo);

export default todoRouter;

// todoRouter.put(     "/api/v1/todos/update/:id");
// todoRouter.delete(  "/api/v1/todos/delete/:id");
