import mongoose from 'mongoose';
import {UserDocument} from '../users/User';

/**
 *  Interface for task document used in project
 */
export interface TaskDocument extends mongoose.Document {
  description: string;
  ticket: string;
  completed: boolean;
  author: UserDocument;
  assignee: UserDocument;
}

/**
 * Schema for task
 */
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    ticket: {
      type: String,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

export const Task = mongoose.model<TaskDocument>('Task', taskSchema);
