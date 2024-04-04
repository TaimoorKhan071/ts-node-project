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

export const deleteTodo = async (req:Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedTodo = await todo.findByIdAndDelete(id);

    if (deletedTodo) {
      // Check if the item was found and deleted
      res.json({
        deleted: true,
        todo: deletedTodo,
      });
    } else {
      res.status(404).json({
        // Use a 404 status code to indicate item not found
        deleted: false, // Indicate deletion was not successful
        todo: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      deleted: false,
      todo: null,
    });
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
