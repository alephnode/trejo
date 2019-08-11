import { Router } from 'express'
import auth from '../middleware/auth'
import * as UserController from './UserController'

/**
 * Register routes for User
 */
export const register = (router: Router): Router => {
  /**
   * Get all users
   */
  router.get('/users', UserController.getUsers)

  /**
   * Get a user's details
   */
  router.get('/users/me', auth, UserController.getUserDetails)

  /**
   * Add a new user
   */
  router.post('/users', UserController.addUser)

  /**
   * Log a user in
   */
  router.post('/users/login', UserController.loginUser)

  /**
   * Log a user out
   */
  router.post('/users/logout', auth, UserController.logoutUser)

  /**
   * Update a user
   */
  router.put('/users/:id', UserController.updateUser)

  /**
   * Delete a user
   */
  router.delete('/users/:id', UserController.deleteUser)

  return router
}
