const TodoController = require('../../controllers/todo.controller');
const TodoModel = require("../../model/todo.model")
describe("TodoController.createTodo", ()=>{
    it("should have a createTodo function", ()=> {
        expect(typeof TodoC