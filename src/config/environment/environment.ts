class Environment {
  apiUrl() {
    return process.env.REACT_APP_BASE_API_URL;
  }

  isDevelopment() {
    return process.env.NODE_ENV === 'development';
  }
}

export const Env = new Environment();
