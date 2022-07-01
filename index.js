'use strict';

exports.handler = async (event,context,callback) => {

  const response = {

    statusCode: 200,

    body: JSON.stringify(

      {

        message: printHelloWorld(),

        input: event,

      },

      null,

      2

    ),

  };

callback(null,response)

};

function printHelloWorld(){

  return "Hello World";

}
