import { Router } from 'express'
import * as TaskRouter from './tasks/router'
import * as UserRouter from './users/UserRouter'

const router = Router()

TaskRouter.register(router)
UserRouter.register(router)

export default router
