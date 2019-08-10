import mongoose from 'mongoose'
import { NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserDocument } from './User'
import { Task } from '../tasks/Task'
import throwError from '../utils/throwError'

/**
 * Interface for User
 */
export interface UserDocument extends mongoose.Document {
  name: string
  email: string
  password: string
  tokens?: object[]
}

/**
 * Schema for User
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
})

/**
 * Add virtual property for relation with tasks
 */
userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
})

/**
 * Attach validators to User
 */
userSchema.obj.email.validate = (val: string): void => {
  if (!validator.isEmail(val)) {
    throw new Error('Invalid Email')
  }
}

/**
 * method to convert user to JSON, removing passwords and tokens
 */
userSchema.methods.toJSON = function(): UserDocument {
  const user = this
  const userObject: UserDocument = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}

/**
 * method to generate auth token
 */
userSchema.methods.generateAuthToken = async (
  user: UserDocument
): Promise<string> => {
  const token: string = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

/**
 * static to locate user credentials
 */
userSchema.statics.findByCredentials = async (
  email: string,
  password: string
): Promise<UserDocument> => {
  const user: UserDocument = await User.findOne({ email })

  if (!user) throwError('Incorrect Credentials Supplied')

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) throwError('Incorrect Credentials Supplied')

  return user
}

/**
 * Persist a hashed password
 */
userSchema.pre('save', async function(next: NextFunction) {
  const user = <UserDocument>this

  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8)

  next()
})

/**
 * Delete Tasks associated with user
 */
userSchema.pre('remove', async function(next: NextFunction) {
  const user = <UserDocument>this
  await Task.deleteMany({ owner: user._id })
  next()
})

export const User = mongoose.model<UserDocument>('User', userSchema)
