const { User } = require('../../src/app/models')
const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await User.create({ name: 'leandro', email: 'leandrovieira@gmail.com', password: '1234' })

    expect(await bcrypt.compare('1234', user.password_hash)).toBe(true)

  })
})
