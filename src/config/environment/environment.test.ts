import { Env } from '@/config/environment';

describe('Env', () => {
  it('returns main-api-url', () => {
    process.env.REACT_APP_BASE_API_URL = 'http://main-api-url.com';
    expect(Env.apiUrl()).toBe('http://main-api-url.com');
  });
});
