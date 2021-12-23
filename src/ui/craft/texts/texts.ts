const asFn = (string: string) => () => string;

export const Texts = {
  global: {
    error: {
      unexpected: asFn('Unexpected Error!'),
    },
    loading: {
      text: asFn('Loading...'),
    },
  },

  home: {
    description: asFn('Home'),
  },

  productCard: {
    available: (available: number) => `${available} left`,

    button: {
      text: asFn('Buy'),
    },
  },
};
