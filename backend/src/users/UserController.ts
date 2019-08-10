import { Request, Response } from 'express'
import { User, UserDocument } from './User'

/**
 * Retrieve a list of User
 */
export const getUsers = (_1: Request, res: Response) =>
  User.find((err: Error, doc: UserDocument[]) => res.send(doc))

/**
 * Add a User
 */
export const addUser = (req: Request, res: Response) => {
  const newUser: UserDocument = new User(req.body)
  return newUser.save((err: Error, doc: UserDocument) => res.send(doc))
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
