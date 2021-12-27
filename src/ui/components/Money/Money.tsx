import React from 'react';
import { formatMoney } from '@/utils/formatting';
import { Text } from '@/ui/components';

interface MoneyProps {
  children: number;
}

export function Money({ children: money }: MoneyProps) {
  return <Text>{formatMoney(money)}</Text>;
}
