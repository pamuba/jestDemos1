const express = require("express")
const router = express.Router()
const totoController = require("../controllers/todo.controller")

router.post("/", totoController.createTodo);
router.get("/", totoController.getTodos);
router.get("/:todoId", totoController.getTodoById);


module.exports = router;