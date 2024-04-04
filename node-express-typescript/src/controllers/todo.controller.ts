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

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const deleteTodo = await todo.findByIdAndDelete(req.params.id);

    if (!deleteTodo) {
      throw new Error("TodoItem not found");
    }

    // await deleteTodo.deleteOne();

    res.json({
      deleted: true,
      todo: deleteTodo,
    });
  } catch (err: any) {
    res.json({
      deleted: false,
      todo: null,
      error: err.message,
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    // Update the todo item with the provided data
    const todoItem = await todo.findById(id);
    if (!todoItem) {
      throw new Error("Todo Item not found");
    }

    // Update the todo item with the provided data
    todoItem.text = text;
    await todoItem.save();

    res.json({
      updated: true,
      todo: todoItem,
    });
  } catch (err) {
    console.log(err);
    res.json({
      updated: false,
      todo: null,
      error: (err as { message: string }).message,
    });
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
