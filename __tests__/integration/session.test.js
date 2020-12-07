const { User } = require('../../src/app/models')
const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
describe('Authentication', () => {

  beforeEach(async () => {
    await truncate()
  })

  it('should authentication with valid credentials', async () => {
    const user = await User.create({ name: 'Vitor', email: 'vitor@gmail.com', password_hash: '2348923' })

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123123123'
    })

    expect(response.status).toBe(404)
  })
})
