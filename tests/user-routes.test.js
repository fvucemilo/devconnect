const request = require("supertest");
const app = require("../app");

const userTestData = {
  email: 'fvucemilo@tvz.hr',
  password: '123456'
};

let token;

beforeAll(done => {
  request(app)
    .post('api/users/login')
    .send({ email: userTestData.email, password: userTestData.password })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

describe("User Endpoints", () => {

  // it("Should fetch JSON Web Token", done => {
  //   request(app)
  //      .post('api/users/login')
  //      .field('email', userTestData.email)
  //      .field('password', userTestData.password)
  //      .then(res => {
  //        token = res.body.token;
  //        done();
  //      });
  //  });
 
 
  // test('Should get a valid token for user', done => {
  //   let headerAuth = {
  //     'Authorization': 'Bearer ' + token, 
  //     'Content-Type': 'application/json'
  //   };     
  //   request(app)
  //       .get('api/users/current')
  //       .set(headerAuth)
  //       .expect(200, done);
  // });

  
  test('Should get a valid token for user', () => {
    const response = request(app)
      .get('api/users/current')
      .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzhiNDk1ZDViZjUwNGVhMDNlZjA3NCIsIm5hbWUiOiJGaWxpcCBWdcSNZW1pbG92acSHLUdyZ2nEhyIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvNWU1ODc5OGU2OWM2ZGMzODkwZWM5ZDI2MzgwODA2YTc_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTg1MDA5OTYxLCJleHAiOjE1ODUwMTM1NjF9.Dx7rGYLHU-rmd4TzG8Kj2_YmpX8r0iGmVU2JDHnFbQI"`);
      expect(response.statusCode).toBe(200);
      expect(response).toHaveProperty("body");
  });
});
