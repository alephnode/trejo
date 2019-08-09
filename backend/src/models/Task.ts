import mongoose from 'mongoose';
import {UserDocument} from './User';

export type TaskDocument = mongoose.Document & {
  description: string;
  completed: boolean;
  author: UserDocument;
};

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
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
    }
  },
  {
    timestamps: true
  }
);

export const Task = mongoose.model<TaskDocument>('Task', taskSchema);
