import { Router } from 'express'
import { signin } from '../controllers/authentication.controller'

const router = Router()

router.post ('/signin', signin)

// router.get('/check', check)

export default router