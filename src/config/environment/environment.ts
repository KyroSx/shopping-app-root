class Environment {
  apiUrl() {
    return process.env.REACT_APP_BASE_API_URL;
  }
}

export const Env = new Environment();
