import { Router } from 'express'
import * as TaskController from './TaskController'

/**
 * Register routes for Task
 */
export const register = (router: Router): Router => {
  /**
   * Get all tasks
   */
  router.get('/tasks', TaskController.getTasks)

  /**
   * Add a new task
   */
  router.post('/tasks', TaskController.addTask)

  /**
   * Update an existing task
   */
  router.put('/tasks/:id', TaskController.updateTask)

  /**
   * Delete a task
   */
  router.delete('/tasks/:id', TaskController.deleteTask)

  return router
}
