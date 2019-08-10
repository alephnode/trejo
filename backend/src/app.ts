import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import cors from 'cors'
import router from './router'

import mongoose from 'mongoose'
import { MONGODB_URI } from './utils/secrets'

const mongoUrl = MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true })

const app = express()

/**
 * Set up app-level middleware, config
 */
app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xssProtection(true))
app.use(cors())

/**
 * Register application routes
 */
app.use(router)

export default app
