import { Router } from 'express'
import { getTasks, addTask } from './TaskController'

/**
 * Register routes for Task
 */
export const register = (router: Router): Router => {
  router.get('/tasks', getTasks)
  router.post('/tasks', addTask)
  return router
}
