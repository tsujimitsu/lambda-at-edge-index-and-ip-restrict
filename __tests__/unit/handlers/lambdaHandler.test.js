// Import all functions from hello-from-lambda.js
const lambda = require('../../../src/handlers/lambdaHandler.js')

// This includes all tests for helloFromLambdaHandler()
describe('Test for lambdaHandler', function() {
  // This test invokes lambdaHandler() and compare the result
  it('Verifies successful response', async () => {
    // Invoke lambdaHandler()
    const result = await lambda.lambdaHandler()
    /* 
            The expected result should match the return from your Lambda function.
            e.g. 
            if you change from `const message = 'Hello from Lambda!';` to `const message = 'Hello World!';` in hello-from-lambda.js
            you should change the following line to `const expectedResult = 'Hello World!';`
        */
    const expectedResult = 'Hello from Lambda!'
    // Compare the result with the expected result
    expect(result).toEqual(expectedResult)
  })
})
