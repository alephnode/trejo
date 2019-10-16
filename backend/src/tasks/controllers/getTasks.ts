import { Request, Response } from 'express'
import { Task, TaskDocument } from '../Task'

/**
 * Retrieve a list of tasks
 */
export const getTasks = (_1: Request, res: Response) => {
  try {
    Task.find((err: Error, doc: TaskDocument[]) => res.send(doc))
  } catch (e) {
    res.status(500).send({ err: e })
  }
}
