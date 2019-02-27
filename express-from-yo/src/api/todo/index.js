import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, destroy } from './controller'
import { schema } from './model'
export Todo, { schema } from './model'

const router = new Router()
const { title, completed } = schema.tree

/**
 * @api {post} /todos Create todo
 * @apiName CreateTodo
 * @apiGroup Todo
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Todo's title.
 * @apiParam completed Todo's completed.
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title, completed }),
  create)

/**
 * @api {get} /todos Retrieve todos
 * @apiName RetrieveTodos
 * @apiGroup Todo
 * @apiUse listParams
 * @apiSuccess {Object[]} todos List of todos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {delete} /todos/:id Delete todo
 * @apiName DeleteTodo
 * @apiGroup Todo
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Todo not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
