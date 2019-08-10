import { Router } from 'express'
import * as TaskRouter from './tasks/TaskRouter'
import * as UserRouter from './users/UserRouter'

const router = Router()

TaskRouter.register(router)
UserRouter.register(router)

export default router
