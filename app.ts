/* require config */
import dotenv from 'dotenv'
dotenv.config()

/* init basic express app */
import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* PORT should be capitalized */
const port = process.env.PORT || 3000

/* Routes */
import { routerList } from './routes'
routerList(app)

/* Error Handling */
import { appError, errorHandlerMainProcess } from './utils/mixinTools'
import { initUncaughtException, initUnhandledRejection } from './utils/process'
initUncaughtException()
initUnhandledRejection()
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(appError(404, '40401', 'No Routes'))
})
app.use(errorHandlerMainProcess)

/* Display Port to assure all services are on. */
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
