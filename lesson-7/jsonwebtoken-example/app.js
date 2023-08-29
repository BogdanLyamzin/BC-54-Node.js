const jwt = require("jsonwebtoken");
require("dotenv").config();

const {JWT_SECRET} = process.env;

const payload = {
    id: "64ee0e3faed6f0534b8586aa",
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    console.log(id)
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWUwZTNmYWVkNmYwNTM0Yjg1ODZhYSIsImlhdCI6MTY5MzMyMzM4NSwiZXhwIjoxNjkzNDA2MTg1fQ._vIb-tulngs91SvnhNePPStGMXdXU2MpXKU1hpHGsTy";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message)
}