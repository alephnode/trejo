import { Request, Response } from 'express'
import { Task, TaskDocument } from '../Task'

/**
 * Add a task
 */
export const addTask = (req: Request, res: Response) => {
  const newTask: TaskDocument = new Task(req.body)
  return newTask.save((err: Error, doc: TaskDocument) => res.send(doc))
}
