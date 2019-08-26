import { Request, Response } from 'express'
import { Task } from '../Task'

/**
 * Update a task
 */
export const updateTask = (req: Request, res: Response) => {
  try {
    const result = Task.findByIdAndUpdate(
      <String>req.params.id,
      { $set: req.body },
      (err: Error) => res.send(err ? err : {})
    )
    return result
  } catch (e) {
    return res.status(500).send({ err: e })
  }
}
