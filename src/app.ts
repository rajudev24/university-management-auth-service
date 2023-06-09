import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/user/user.route'
import cors from 'cors'
const app: Application = express()

app.use(cors())

// parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working succesfully!')
})

export default app
