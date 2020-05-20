# aws-sam-lambda-rest-api-typescript-example

aws-sam-lambda-rest-api-typescript-example

## How this was created

`git clone https://github.com/ariesmcrae/aws-sam-lambda-rest-api-typescript-example.git`

`npm init` will create package.json

`npx tsc --init` will create tsconfig.json

## Dependencies

`npm install -D typescript @types/node @types/aws-lambda`

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
