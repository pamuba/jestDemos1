const express = require("express")
const router = express.Router()
const totoController = require("../controllers/todo.controller")

router.post("/", totoController.createTodo);

module.exports = router;