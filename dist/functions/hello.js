"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItemsHandler = void 0;
let response;
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
async function getAllItemsHandler(event, ctx) {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, but you tried: ${event.httpMethod}`);
    }
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(event)
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
}
exports.getAllItemsHandler = getAllItemsHandler;
//# sourceMappingURL=hello.js.map