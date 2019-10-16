import { Request, Response } from 'express'
import { Task, TaskDocument } from '../Task'

/**
 * Add a task
 */
export const addTask = (req: Request, res: Response): void => {
  try {
    const newTask: TaskDocument = new Task(req.body)
    newTask.save((err: Error, doc: TaskDocument) => res.send(doc))
  } catch (e) {
    res.status(500).send({ err: e })
  }
}
