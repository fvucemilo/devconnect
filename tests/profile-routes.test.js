const request = require('supertest');
const app = require('../app');

describe('Profile Endpoints', () => {
  // test('Should create a new post', async () => {
  //   const res = await request(app)
  //     .post('/api/posts')
  //     .send({
  //       userId: 1,
  //       title: 'test is cool',
  //       content: 'Lorem ipsum',
  //     });
  //   expect(res.statusCode).toEqual(201);
  //   expect(res.body).toHaveProperty('post');
  // });

  // test('Should fetch a single post', async () => {
  //   const postId = 1;
  //   const res = await request(app).get(`/api/posts/${postId}`);
  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toHaveProperty('post');
  // });

  test("Should fetch all posts", async () => {
    const response = await request(app).get("/api/profile/all");
    expect(response.statusCode).toBe(200);
    expect(response).toHaveProperty("body");
  });

  // test('should update a post', async () => {
  //   const res = await request(app)
  //     .put('/api/posts/1')
  //     .send({
  //       userId: 1,
  //       title: 'updated title',
  //       content: 'Lorem ipsum',
  //     });

  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toHaveProperty('post');
  //   expect(res.body.post).toHaveProperty('title', 'updated title');
  // });

  // test('should return status code 500 if db constraint is violated', async () => {
  //   const res = await request(app)
  //     .post('/api/posts')
  //     .send({
  //       title: 'test is cool',
  //       content: 'Lorem ipsum',
  //     });
  //   expect(res.statusCode).toEqual(500);
  //   expect(res.body).toHaveProperty('error');
  // });

  // test('should delete a post', async () => {
  //   const res = await request(app).delete('/api/posts/1');
  //   expect(res.statusCode).toEqual(204);
  // });

  // it('should respond with status code 404 if resource is not found', async () => {
  //   const postId = 1;
  //   const res = await request(app).get(`/api/posts/${postId}`);
  //   expect(res.statusCode).toEqual(404);
  // });
});