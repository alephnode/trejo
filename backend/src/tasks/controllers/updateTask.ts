import { Request, Response } from 'express'
import { Task } from '../Task'

/**
 * Update a task
 */
export const updateTask = (req: Request, res: Response) => {
  try {
    Task.findByIdAndUpdate(
      <String>req.params.id,
      { $set: req.body },
      (err: Error) => res.send(err ? err : {})
    )
  } catch (e) {
    res.status(500).send({ err: e })
  }
}
