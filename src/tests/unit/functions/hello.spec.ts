import { getAllItemsHandler } from '../../../functions/hello'
import { APIGatewayEvent, Context, ProxyResult } from 'aws-lambda'

test('getAllItemsHandler returns 200', async () => {
  const event = {
    httpMethod: 'GET',
    body: 'hello world getAllItemsHandler',
  } as APIGatewayEvent

  const context = {} as Context

  const result = await getAllItemsHandler(event, context)
  const parsedBody = JSON.parse(result.body)

  expect(result.statusCode).toBe(200)
  expect(parsedBody.message).toStrictEqual(event.body)
})

test('getAllItemsHandler to throw error', async () => {
  const event = {
    httpMethod: 'POST',
  } as APIGatewayEvent

  const context = {} as Context

  await expect(getAllItemsHandler(event, context)).rejects.toThrowError()
})
