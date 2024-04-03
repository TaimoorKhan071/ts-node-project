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
    if (!id) {
      console.log("Todo Item does not exist");
    }
    res.json({ todo: result });
  } catch (err) {
    console.log(err);
  }
};
