const expressLoader = require("./express");

const init = () => {
  //init express
  //init dbConnection(mongoose)
  const expressApp = expressLoader();
  return { expressApp };
};

const { expressApp } = init();

//export
exports.express = expressApp;
