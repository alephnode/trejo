import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
  name: string;
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

export const User = mongoose.model<UserDocument>('Task', userSchema);
