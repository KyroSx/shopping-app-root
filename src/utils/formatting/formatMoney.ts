const makeIntlUsdOptions = () => {
  return {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
};

const makeIntlFormatting = () => {
  return new Intl.NumberFormat('en', makeIntlUsdOptions());
};

export function formatMoney(number: number) {
  return makeIntlFormatting().format(number);
}
