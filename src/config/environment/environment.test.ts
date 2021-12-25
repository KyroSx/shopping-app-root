import { Environment, NodeEnvs } from '@/config/environment';

describe('Env', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('returns main-api-url', () => {
    process.env.REACT_APP_BASE_API_URL = 'http://main-api-url.com';
    expect(Environment.apiUrl()).toBe('http://main-api-url.com');
  });

  describe('isDevelopment', () => {
    it('returns true if NODE_ENV is "development"', () => {
      // @ts-ignore
      process.env.NODE_ENV = NodeEnvs.development;
      expect(Environment.isDevelopment()).toBe(true);
    });

    it('returns false if NODE_ENV is not "development"', () => {
      expect(Environment.isDevelopment()).toBe(false);
    });
  });

  describe('isProduction', () => {
    it('returns true if NODE_ENV is "production"', () => {
      // @ts-ignore
      process.env.NODE_ENV = NodeEnvs.production;
      expect(Environment.isProduction()).toBe(true);
    });

    it('returns false if NODE_ENV is not "production"', () => {
      expect(Environment.isProduction()).toBe(false);
    });
  });
});
