import React from 'react';
import { Text } from '@/ui/components';

import { HtmlParagraph } from './Dot.types';

export function Dot({ ...htmlProps }: HtmlParagraph) {
  return <Text {...htmlProps}>&bull;</Text>;
}
