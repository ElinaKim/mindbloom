import { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import type { User } from '../types/user'
import type { AuthenticatedRequest } from '../types/requestWithUserId'
import { authenticateToken } from '../middlewares/auth'
import { db } from '../db'

const router = Router()

router.post('/register', async (req, res) => {
    const { user_name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const [userId] = await db<User>('user').insert({
            user_name,
            email,
            password: hashedPassword
        }, ['id'])
        res.status(201).send({ userId })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error creating user' })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await db<User>('user')
        .where({ email })
        .first();

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '24h' })
        res.json({ token })
    } else {
        res.status(401)
    }
})

router.get('/profile', authenticateToken, async (req: AuthenticatedRequest, res) => {
    const user = await db<User>('user')
        .where({ id: req.user.userId })
        .first()

    if (user) {
        res.json(user)
    } else {
        res.json(user)
    }

})

export default router
