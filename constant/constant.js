import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: `${__ENV.seconds}s`, target: 1 },
  ]
};

var every = parseInt(`${__ENV.every}`) - 0.1;

export default () => {
  http.get('https://test.k6.io');

  sleep(every);
};
