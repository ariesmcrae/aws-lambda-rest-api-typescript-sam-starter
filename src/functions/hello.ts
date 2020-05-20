/**
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.getAllItemsHandler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getAllItems only accept GET method, but you tried: ${event.httpMethod}`)
  }

  let response
  const payload = { message: 'hello world getAllItems' }

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify(payload),
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
