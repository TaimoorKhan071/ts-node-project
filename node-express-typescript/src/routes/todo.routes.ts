import express from "express";
import { getTodoById, getTodos } from "../controllers/todoController";

const todoRouter = express.Router();

todoRouter.get("/api/v1/todos/:id", getTodoById);
todoRouter.get("/api/v1/todos", getTodos);

export default todoRouter 


// todoRouter.post(    "/api/v1/todos/add");
// todoRouter.put(     "/api/v1/todos/update/:id");
// todoRouter.delete(  "/api/v1/todos/delete/:id");