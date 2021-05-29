/* eslint-disable no-undef */
import { handler } from './index'
import { APIGatewayEvent, Context } from 'aws-lambda'

test('handler returns 200', async () => {
  const event = {
    httpMethod: 'GET',
  } as APIGatewayEvent

  const context = {} as Context

  const result = await handler(event, context)

  expect(result.statusCode).toBe(200)
})

test('handler to throw error', async () => {
  const event = {
    httpMethod: 'POST',
  } as APIGatewayEvent

  const context = {} as Context

  await expect(handler(event, context)).rejects.toThrowError()
})
