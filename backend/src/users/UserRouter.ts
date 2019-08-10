import { Router } from 'express'
import auth from '../middleware/auth'
import * as UserController from './UserController'

/**
 * Register routes for User
 */
export const register = (router: Router): Router => {
  router.get('/users', UserController.getUsers)
  router.get('/users/me', auth, UserController.getUserDetails)

  router.post('/users', UserController.addUser)
  router.post('/users/login', UserController.loginUser)
  router.post('/users/logout', auth, UserController.logoutUser)

  return router
}
