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
    testId: (id: number) => `product-card@${id}`,
    available: (available: number) => `${available} left`,

    button: {
      text: asFn('Buy'),
    },
  },

  cart: {
    product: {
      testId: (id: number) => `product-in-cart@${id}`,
    },
  },
};
