import { Router } from 'express'
import { getUsers, addUser } from './UserController'

/**
 * Register routes for User
 */
export const register = (router: Router): Router => {
  router.get('/users', getUsers)
  router.post('/users', addUser)
  return router
}
