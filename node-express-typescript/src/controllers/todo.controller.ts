import { Request, Response } from "express";
import { todo } from "../models/todo.model";

export const getTodos = async (_: Request, res: Response) => {
  try {
    const result = await todo.find();
    res.json({ todos: result });
  } catch (err) {
    console.log(err);
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await todo.findById(id);
    if (!result) {
      console.log("Todo Item does not exist");
    }
    res.json({ todo: result });
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    // Update the todo item with the provided data
    const todoItem = await todo.findById(id);
    if (!todoItem) {
      throw new Error("Todo Item not found");
    }

    // Update the todo item with the provided data
    todoItem.text = updates.text;
    await todoItem.save();

    res.json({
      updated: true,
      todo: todoItem,
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      updated: false,
      todo: null,
      error: err.message,
    });
  }
};
