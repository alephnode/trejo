import auth from '../../src/middleware/auth'
import request from 'supertest'
import app from '../../src/app'

test('Check auth throws without valid req/res objects', async () => {
  await expect(auth(undefined, undefined, undefined)).rejects.toThrow()
})
