import React from 'react';

interface MoneyProps {
  children: number;
}

export function Money({ children: money }: MoneyProps) {
  return <p>$ {money}.00</p>;
}
