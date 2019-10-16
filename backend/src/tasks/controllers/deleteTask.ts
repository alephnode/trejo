import { Request, Response } from 'express'
import { Task } from '../Task'

/**
 * Delete a task
 */
export const deleteTask = (req: Request, res: Response) => {
  try {
    Task.findByIdAndRemove(<String>req.params.id, (err: Error) =>
      res.send(err ? err : {})
    )
  } catch (e) {
    res.status(500).send({ err: e })
  }
}
