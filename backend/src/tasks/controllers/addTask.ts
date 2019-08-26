import { Request, Response } from 'express'
import { Task, TaskDocument } from '../Task'

/**
 * Add a task
 */
export const addTask = (req: Request, res: Response) => {
  try {
    const newTask: TaskDocument = new Task(req.body)
    const result = newTask.save((err: Error, doc: TaskDocument) =>
      res.send(doc)
    )
    return result
  } catch (e) {
    return res.status(500).send({ err: e })
  }
}
