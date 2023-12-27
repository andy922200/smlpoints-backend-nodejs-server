import express, { Request, Response, NextFunction } from 'express'
import { demoController } from '../controller/demo'

const router = express.Router()

router.get('/dogs', (req: Request, res: Response, next: NextFunction) => {
  demoController.getDogs(req, res, next)
})

export default router
