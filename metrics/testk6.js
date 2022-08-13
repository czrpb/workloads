import http from 'k6/http';

export const options = {
  stages: [
    { duration: '5s', target: 10 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10s', target: 10 }, // stay at 100 users for 10 minutes
    { duration: '5s', target: 0 }, // ramp-down to 0 users
  ]
};

export default () => {
  http.get('http://test.k6.io');
};
