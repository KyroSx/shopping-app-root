export enum NodeEnvs {
  development = 'development',
  production = 'production',
}

class Environment {
  apiUrl() {
    return process.env.REACT_APP_BASE_API_URL;
  }

  isDevelopment() {
    return this.isNodeEnv(NodeEnvs.development);
  }

  isProduction() {
    return this.isNodeEnv(NodeEnvs.production);
  }

  private isNodeEnv(env: NodeEnvs) {
    return process.env.NODE_ENV === env;
  }
}

export const Env = new Environment();
