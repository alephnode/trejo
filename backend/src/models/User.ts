import mongoose from 'mongoose';

/**
 * Interface for User
 */
export interface UserDocument extends mongoose.Document {
  name: string;
}

/**
 * Schema for User
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

export const User = mongoose.model<UserDocument>('Task', userSchema);
