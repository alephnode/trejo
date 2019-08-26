import { Request, Response } from 'express'
import { Task } from '../Task'

/**
 * Delete a task
 */
export const deleteTask = (req: Request, res: Response) => {
  try {
    const result = Task.findByIdAndRemove(<String>req.params.id, (err: Error) =>
      res.send(err ? err : {})
    )
    return result
  } catch (e) {
    return res.status(500).send({ err: e })
  }
}
