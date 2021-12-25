export enum NodeEnvs {
  development = 'development',
  production = 'production',
  testing = 'test',
}

export class Environment {
  static apiUrl() {
    return process.env.REACT_APP_BASE_API_URL;
  }

  static isDevelopment() {
    return Environment.isNodeEnv(NodeEnvs.development);
  }

  static isProduction() {
    return Environment.isNodeEnv(NodeEnvs.production);
  }

  static isTesting() {
    return Environment.isNodeEnv(NodeEnvs.testing);
  }

  private static isNodeEnv(env: NodeEnvs) {
    return process.env.NODE_ENV === env;
  }
}
