import mongoose from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
  } 
});

export const todo = mongoose.model("todo", todoSchema);
