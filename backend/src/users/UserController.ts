import { Request, Response } from 'express'
import { User, UserDocument } from './User'
import { RequestToken } from '../middleware/auth'

interface UserToken {
  token: string
}

/**
 * Retrieve a list of Users
 */
export const getUsers = (_1: Request, res: Response) =>
  User.find((err: Error, doc: UserDocument[]) => res.send(doc))

/**
 * Retrieve User details
 */
export const getUserDetails = async (req: RequestToken, res: Response) =>
  res.send(req.user)

/**
 * Add a User
 */
export const addUser = async (req: Request, res: Response) => {
  const user: UserDocument = new User(req.body)
  try {
    await user.save()
    res.status(201).send({ user })
  } catch (e) {
    res.status(400).send(e)
  }
}

/**
 * Log in User
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const user: UserDocument = await User.schema.statics.findByCredentials(
      req.body.email,
      req.body.password
    )
    const token = await user.schema.methods.generateAuthToken(user)
    res.status(200).send({ user, token })
  } catch (e) {
    res.status(400).send({ message: e.message })
  }
}

/**
 * Log out User
 */
export const logoutUser = async (req: RequestToken, res: Response) => {
  try {
    req.user.tokens = req.user.tokens.filter((token: UserToken) => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send()
  } catch (e) {
    res.status(500).send()
  }
}

/**
 * Update a User
 */
export const updateUser = (req: Request, res: Response) =>
  User.findByIdAndUpdate(
    <String>req.params.id,
    { $set: req.body },
    (err: Error) => res.send(err ? err : {})
  )

/**
 * Delete a User
 */
export const deleteUser = (req: Request, res: Response) =>
  User.findByIdAndRemove(<String>req.params.id, (err: Error) =>
    res.send(err ? err : {})
  )
