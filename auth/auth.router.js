const express = require("express");
const { authLogin } = require("./auth.service");
const authRouter = express.Router();

authRouter.post("/login", authLogin);

module.exports = { authRouter };
