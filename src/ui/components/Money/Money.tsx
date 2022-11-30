import React from 'react';
import { formatMoney } from '@/utils/formatting';
import { Text } from '@/ui/components';
import { MoneyProps } from '@/ui/components/Money/Money.types';

export function Money({ children: money }: MoneyProps) {
  return <Text>{formatMoney(money)}</Text>;
}
