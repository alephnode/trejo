import mongoose from 'mongoose';

// TODO flesh this schema out
export type TaskDocument = mongoose.Document & {
  description: string;
};

const taskSchema = new mongoose.Schema(
  {
    description: {type: String}
  },
  {timestamps: true}
);

export const Task = mongoose.model<TaskDocument>('Task', taskSchema);
