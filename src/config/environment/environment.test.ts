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

  function mockNodeEnv(env: NodeEnvs) {
    // @ts-ignore
    process.env.NODE_ENV = env;
  }

  describe('isDevelopment', () => {
    it('returns true if NODE_ENV is "development"', () => {
      mockNodeEnv(NodeEnvs.development);
      expect(Environment.isDevelopment()).toBe(true);
    });

    it('returns false if NODE_ENV is not "development"', () => {
      mockNodeEnv(NodeEnvs.production);
      expect(Environment.isDevelopment()).toBe(false);
    });
  });

  describe('isProduction', () => {
    it('returns true if NODE_ENV is "production"', () => {
      mockNodeEnv(NodeEnvs.production);
      expect(Environment.isProduction()).toBe(true);
    });

    it('returns false if NODE_ENV is not "production"', () => {
      mockNodeEnv(NodeEnvs.testing);
      expect(Environment.isProduction()).toBe(false);
    });
  });

  describe('isTesting', () => {
    it('returns true if NODE_ENV is "test"', () => {
      mockNodeEnv(NodeEnvs.testing);
      expect(Environment.isTesting()).toBe(true);
    });

    it('returns false if NODE_ENV is not "test"', () => {
      mockNodeEnv(NodeEnvs.production);
      expect(Environment.isTesting()).toBe(false);
    });
  });
});
