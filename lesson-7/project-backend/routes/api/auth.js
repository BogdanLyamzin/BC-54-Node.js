const express = require("express");

const ctrl = require("../../controllers/auth");

const {validateBody} = require("../../decorators");

const schemas = require("../../schemas/users");

const router = express.Router();

const signupValidateMiddleware = validateBody(schemas.userSignupSchema);
const signinValidateMiddleware = validateBody(schemas.userSigninSchema);

router.post("/signup", signupValidateMiddleware, ctrl.signup);

router.post("/signin", signinValidateMiddleware, ctrl.signin);

module.exports = router;