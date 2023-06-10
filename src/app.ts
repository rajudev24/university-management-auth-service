import express, { Application } from 'express'
import { UserRoutes } from './app/modules/user/user.route'
import cors from 'cors'
import globalErrorhandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', UserRoutes.router)

// Global Error Handler
app.use(globalErrorhandler)

export default app
