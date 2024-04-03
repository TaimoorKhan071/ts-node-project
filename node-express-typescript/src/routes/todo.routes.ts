import express from "express";
import { getTodoById, getTodos, updateTodo } from "../controllers/todoController";

const todoRouter = express.Router();

todoRouter.get("/api/v1/todos/:id", getTodoById);
todoRouter.get("/api/v1/todos", getTodos);
todoRouter.put("/api/v1/todos/update/:id", updateTodo);

export default todoRouter;

// todoRouter.post(    "/api/v1/todos/add");
// todoRouter.delete(  "/api/v1/todos/delete/:id");
