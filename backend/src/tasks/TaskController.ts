import { Request, Response } from 'express'
import { Task, TaskDocument } from './Task'

/**
 * Retrieve a list of tasks
 */
export const getTasks = (_1: Request, res: Response) =>
  Task.find((err: Error, doc: TaskDocument[]) => res.send(doc))

/**
 * Add a task
 */
export const addTask = (req: Request, res: Response) => {
  const newTask: TaskDocument = new Task(req.body)
  return newTask.save((err: Error, doc: TaskDocument) => res.send(doc))
}

/**
 * Update a task
 */
export const updateTask = (req: Request, res: Response) =>
  Task.findByIdAndUpdate(
    <String>req.params.id,
    { $set: req.body },
    (err: Error) => res.send(err ? err : {})
  )

/**
 * Delete a task
 */
export const deleteTask = (req: Request, res: Response) =>
  Task.findByIdAndRemove(<String>req.params.id, (err: Error) =>
    res.send(err ? err : {})
  )
