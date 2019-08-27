import request from 'supertest'
import app from '../../../src/app'

test('Get the tasks', async () => {
  await request(app)
    .get('/tasks')
    .expect(200)
})
