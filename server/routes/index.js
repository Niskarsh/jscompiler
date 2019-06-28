import { Router } from 'express'
import authRoutes from './authentication.routes'
import { authCORS } from '../controllers/authentication.controller'

const router = Router()

router.get('/', (req, res) => {
    res.send('Server up and running')
})

router.use('/api', authCORS)
router.use('/api/auth', authRoutes)

export default router

