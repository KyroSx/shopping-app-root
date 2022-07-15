export enum NodeEnvs {
  development = 'development',
  production = 'production',
  testing = 'test',
}

export class Environment {
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
