import { test } from '@japa/runner'
import { assert } from 'chai'

const BASE_URL = '/api'

test.group('Posts api', () => {
  test('example test', async ({ assert }) => {
    // Your test code here
  })

  test('get all posts', async ({ client }) => {
    const response = await client.get(`${BASE_URL}/posts`).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })

  test('get a specific post by id', async ({ client }) => {
    const postId = '1' // Assuming 1 is a valid post ID for testing
    const response = await client.get(`${BASE_URL}/posts/${postId}`).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
    response.assertBodyContains({
      id: postId, // Assuming 1 is the new post ID
    })
  })

  test('create a new post', async ({ client }) => {
    const postData = { /* post data */ }
    const response = await client.post(`${BASE_URL}/posts`).json(postData).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })

  test('update a specific post by id', async ({ client }) => {
    const postId = '1' // Assuming 1 is a valid post ID for testing
    const updateData = { /* new post data */ }
    const response = await client.put(`${BASE_URL}/posts/${postId}`).json(updateData).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })

  test('delete a specific post by id', async ({ client }) => {
    const postId = '1' // Assuming 1 is a valid post ID for testing
    const response = await client.delete(`${BASE_URL}/posts/${postId}`).withCsrfToken()
    assert.equal(response.status(), 200) // Add assertion for status code
  })
})