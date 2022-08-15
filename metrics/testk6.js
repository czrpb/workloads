import http from 'k6/http';

export const options = {
  stages: [
    { duration: '5s', target: 20 },
    { duration: '5s', target: 36 },
    { duration: '5s', target: 44 },
    { duration: '5s', target: 48 },
    { duration: '5s', target: 50 },
    { duration: '15s', target: 55 },
    { duration: '5s', target: 32 },
    { duration: '5s', target: 16 },
    { duration: '5s', target: 8 },
    { duration: '5s', target: 4 },
    { duration: '5s', target: 1 },
    { duration: '5s', target: 0 },
  ]
};

export default () => {
  http.get('http://test.k6.io');
};
