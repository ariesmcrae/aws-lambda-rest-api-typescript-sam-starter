# aws-sam-lambda-rest-api-typescript-example

aws-sam-lambda-rest-api-typescript-example

## How this was created

`git clone https://github.com/ariesmcrae/aws-sam-lambda-rest-api-typescript-example.git`

`npm init` - will create package.json

`npx tsc --init` - will create tsconfig.json

## Dependencies

`npm i -D typescript`

`npm i @types/node @types/aws-lambda`

# typescript-eslint

`npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

# eslint-config-standard-with-typescript

```
npm i -D \
eslint@6 \
eslint-plugin-standard@4 \
eslint-plugin-promise@4 \
eslint-plugin-import@2 \
eslint-plugin-node@9 \
eslint-config-prettier \
eslint-plugin-jest \
eslint-config-standard-with-typescript \
@typescript-eslint/eslint-plugin@2
```

# .eslintrc.js

```
extends: [
  'standard-with-typescript'
],
'parserOptions': {
  'project': './tsconfig.json'
}
```

# Jest Typescript

`npm i -D jest ts-jest @types/jest`

`npx ts-jest config:init` - creates jest.config.js

# Run

pre-requisite: docker

`npm run build && npm run dev`

response

```
{
   "statusCode":200,
   "body":{
      "message":"hello world getAllItems"
   }
}
```
