import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { User, UserDocument } from '../users/User'

export interface RequestToken extends Request {
  token: string
  user: UserDocument
}

/**
 * Middleware to verify headers for auth-protected endpoint
 */
const auth = async (req: RequestToken, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({
      _id: (<UserDocument>decoded)._id,
      'tokens.token': token
    })

    if (!user) {
      throw new Error()
    }

    req.token = token
    req.user = user
    next()
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' })
  }
}

export default auth
