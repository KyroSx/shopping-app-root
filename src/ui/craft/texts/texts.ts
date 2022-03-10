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
        user: asFn('User'),
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

    empty: {
      description: asFn('The cart is empty'),
    },

    checkout: {
      button: asFn('Checkout'),
    },

    voucher: {
      input: asFn('Discount Code'),
      button: asFn('Apply'),
    },

    financial: {
      total: {
        text: asFn('Total'),
      },

      discount: {
        text: asFn('Discount'),
      },

      subtotal: {
        text: asFn('Subtotal'),
      },

      shipping: {
        text: asFn('Shipping'),
      },
    },

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
