const { response } = require("express");
const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json")

const endpointUrl = "/todos/"

let fisrtTodo;

describe (endpointUrl, ()=>{
    it("GET" + endpointUrl, async ()=>{
        const response = await request(app).get(endpointUrl);

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0].title).toBeDefined();
        expect(response.body[0].done).toBeDefined();
        fisrtTodo = response.body[0];
    })

    it("GET by Id" + endpointUrl + ":todoId", async()=>{
        const response = await request(app).get(endpointUrl + fisrtTodo._id);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(fisrtTodo.title);
        expect(response.body.done).toBe(fisrtTodo.done);
    });

    it("Get todoby id doesnt exist" + endpointUrl+":todoId", async ()=>{
        const response = await request(app).get(endpointUrl+ "5f281c93b9308e43044c899d");
        expect(response.statusCode).toBe(404);
    })

    it("POST" + endpointUrl, async ()=>{
        const response = await request(app)
            .post(endpointUrl)
            .send(newTodo)

        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);
    });

    it('should return error 500 on malformed data with POST' + endpointUrl, async()=>{
        const response =  await request(app)
            .post(endpointUrl)
            .send({title:"Missing done property"});

        expect(response.statusCode).toBe(500);
        expect(response.body).toStrictEqual({
            message:
                "Todo validation failed: done: Path `done` is required."
        })
    })
});