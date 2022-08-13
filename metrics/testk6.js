import http from 'k6/http';

export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 },
  ]
};

export default () => {
  http.get('http://test.k6.io');
};
