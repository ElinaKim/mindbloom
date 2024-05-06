import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import type { AuthenticatedRequest } from '../types/requestWithUserId'

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401)
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!)
        req.user = payload
        next()
    } catch (err) {
        console.error(err)
        res.sendStatus(401)
    }
}
