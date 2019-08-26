import { Router } from 'express'
import TaskController from '../controllers'

/**
 * Register routes for Task
 */
export const register = (router: Router): Router => {
  /**
   * Get all tasks
   */
  router.get('/tasks', TaskController.get)

  /**
   * Add a new task
   */
  router.post('/tasks', TaskController.post)

  /**
   * Update an existing task
   */
  router.put('/tasks/:id', TaskController.put)

  /**
   * Delete a task
   */
  router.delete('/tasks/:id', TaskController.delete)

  return router
}
