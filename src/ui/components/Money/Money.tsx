import React from 'react';
import { formatMoney } from '@/utils/formatting';

interface MoneyProps {
  children: number;
}

export function Money({ children: money }: MoneyProps) {
  return <p>{formatMoney(money)}</p>;
}
