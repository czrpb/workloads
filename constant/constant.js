import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 1 },
  ]
};

export default () => {
  http.get('https://test.k6.io');

  sleep(2);
};
