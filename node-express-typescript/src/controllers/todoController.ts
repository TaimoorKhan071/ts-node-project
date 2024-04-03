import { Request, Response } from "express";
import { todo } from "../models/todoModel";

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

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text || text.length < 10) {
      throw new Error("Text size less than 10!");
    }

    const todoItem = new todo({
      text: text,
    });
    await todoItem.save();

    res.status(201).json({
      created: true,
      todo: todoItem,
    });
  } catch (err: any) {
    
    console.log(err);

    res.json({
      created: false,
      todo: null,
      error: err.message,
    });
  }
};
