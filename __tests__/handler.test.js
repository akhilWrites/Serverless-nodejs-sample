const handler = require('../index');
 
test('correct greeting is generated', () => {
  expect(handler.printHelloWorld()).toBe("Hello World");
});
