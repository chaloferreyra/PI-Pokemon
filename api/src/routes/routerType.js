const { Router } = require('express');

const getTypeHandler = require("../handlers/typeHandler.js")

const routerType = Router();

routerType.get("/", getTypeHandler);

module.exports = routerType;