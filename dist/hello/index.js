"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
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
const handler = async (event, ctx) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`handler only accept GET method, but you tried: ${event.httpMethod}`);
    }
    let response;
    try {
        const messageBody = { message: 'hello world' };
        response = {
            statusCode: 200,
            body: JSON.stringify(messageBody),
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
exports.handler = handler;
//# sourceMappingURL=index.js.map