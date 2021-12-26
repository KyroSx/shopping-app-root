const asFn = (string: string) => () => string;

export const Texts = {
  global: {
    error: {
      unexpected: asFn('Unexpected Error!'),
    },
    loading: {
      text: asFn('Loading...'),
    },
    layout: {
      header: {
        text: asFn('Shopping'),
      },
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
    title: asFn('Shopping Cart'),

    product: {
      testId: (id: number) => `product-in-cart@${id}`,
      quantity: (quantity: number) => `Quantity: ${quantity}`,

      button: {
        add: asFn('+'),
        remove: asFn('-'),
      },
    },
  },
};
