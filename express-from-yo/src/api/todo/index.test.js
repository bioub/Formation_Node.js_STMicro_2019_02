import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Todo } from '.'

const app = () => express(apiRoot, routes)

let todo

beforeEach(async () => {
  todo = await Todo.create({})
})

test('POST /todos 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test', completed: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.completed).toEqual('test')
})

test('POST /todos 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /todos 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('DELETE /todos/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${todo.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /todos/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${todo.id}`)
  expect(status).toBe(401)
})

test('DELETE /todos/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
