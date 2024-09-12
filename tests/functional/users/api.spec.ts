import { test } from '@japa/runner'
import { assert } from 'chai'

const BASE_URL = '/api'

test.group('UsersController', () => {
  test('get all users', async ({ client }) => {
    const response = await client.get(`${BASE_URL}/user`).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })

  test('get a specific user by id', async ({ client }) => {
    const userId = '1' // Assuming 1 is a valid user ID for testing
    const response = await client.get(`${BASE_URL}/user/${userId}`).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
    response.assertBodyContains({
      id: userId, // Assuming 1 is the new user ID
    })
  })

  test('create a new user', async ({ client }) => {
    const userData = { /* user data */ }
    const response = await client.post(`${BASE_URL}/user`).json(userData).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })

  test('update a specific user by id', async ({ client }) => {
    const userId = '1' // Assuming 1 is a valid user ID for testing
    const updateData = { /* new user data */ }
    const response = await client.put(`${BASE_URL}/user/${userId}`).json(updateData).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })

  test('delete a specific user by id', async ({ client }) => {
    const userId = '1' // Assuming 1 is a valid user ID for testing
    const response = await client.delete(`${BASE_URL}/user/${userId}`).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })
})
